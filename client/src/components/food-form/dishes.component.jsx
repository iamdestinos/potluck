import React, { useState } from 'react';
//import subclasses
import Dish from './dish.component.jsx';

function Dishes (props) {
    const [foods, setFoods] = useState(props.foods);

    return (
        <div className={props.className}>
            {props.title}
            <input></input>
            <ul>
                {foods.map((food, index) => {
                    return(<Dish food={food} key={food.name + index}></Dish>);
                })}
            </ul>
        </div>
    )
}

export default Dishes;