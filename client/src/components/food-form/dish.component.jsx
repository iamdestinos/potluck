import React, { useState } from 'react';

function Dish (props) {
    const [food, setFood] = useState(props.food);

    return (
        <li>
            {food.name}
        </li>
    )
}

export default Dish;