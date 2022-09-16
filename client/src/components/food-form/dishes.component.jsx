import React, { useState, useContext } from 'react';
import axios from 'axios';
import Dish from './dish.component.jsx';
import { UserContext } from '../../contexts/user.context';

const Dishes = (props) => {
    const [foods, setFoods] = useState(props.foods);
    const [value, setValue] = useState('');
    const { currentUser } = useContext(UserContext);

    const clickHandler = () => {
        //create food object to be passed
        let newFood = {
            name: value,
            course: props.title === 'Main Dishes' ? 'main' : 'side',
            userId: currentUser._id,
        }
        console.log('button clicked!', newFood);
        //add new food
        axios.put(`/event/${props.eventId}`, { food: newFood })
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
            //need event identification
            
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
                <button className='col-sm-2' onClick={ clickHandler }>+</button>
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