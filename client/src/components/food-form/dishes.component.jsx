import React, { useState } from 'react';

import Dish from './dish.component.jsx';

function Dishes (props) {
    const [foods, setFoods] = useState(props.foods);
    const [value, setValue] = useState('');

    const clickHandler = () => {
        console.log('button clicked!', value);
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