import React from 'react';
import FoodForm from '../food-form/food-form.component.jsx';

const EventCard = () => {
    return (
        <div>
            <h1>Event Card Component</h1>
            <FoodForm foods={[{name: 'main dish', course: 'main'}, {name: 'side dish', course: 'side'}]}></FoodForm>
        </div>
    )
};

export default EventCard;
