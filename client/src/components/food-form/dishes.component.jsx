import React, { useState, useContext } from 'react';
import axios from 'axios';
import Dish from './dish.component.jsx';
import { UserContext } from '../../contexts/user.context';

const Dishes = (props) => {
    const [foods, setFoods] = useState(props.foods);
    const [value, setValue] = useState('');
    const [loading, setLoad] = useState('');
    const { currentUser } = useContext(UserContext);

    const clickHandler = () => {
        let newFood = {
            name: value,
            course: props.title === 'Main Dishes' ? 'main' : 'side',
            userId: currentUser._id,
        }
        
        setLoad('Processing...');
        axios.put(`/event/${props.eventId}`, { food: newFood })
            .then(result => {
                setFoods(foods.concat(newFood));
                setValue('');
                setLoad('');
            })
            .catch(err => {
                console.log(err);
                setLoad('Error adding dish, please try again');
            });
    }

    const inputHandler = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className={props.className}>
            {props.title}
            <div className='row'>
                <input 
                    className='col-sm-10' 
                    placeholder="Add a Dish" 
                    value={value} 
                    onChange={inputHandler}
                    onKeyPress={ (e) => { 
                        if (e.key === 'Enter') {
                            clickHandler();
                        }
                    } }
                    ></input>
                <button 
                    className='col-sm-2' 
                    onClick={ clickHandler }
                    disabled={value === '' || !currentUser}
                    >+</button>
            </div>
            <div>
                { loading }
            </div>
            <ul className='list-group float-left d-flex justify-content-between'>
                {foods.map((food, index) => {
                    return(<Dish food={food} key={food.name + index}></Dish>);
                })}
            </ul>
        </div>
    )
}

export default Dishes;