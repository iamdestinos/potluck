import React from 'react';
import FoodForm from '../food-form/food-form.component.jsx';
import eventExamples from '../../../../server/src/sample-data/fake-events';

const EventCard = () => {
    return (
        <div>
            <h1>Event Card Component</h1>
            <FoodForm foods={eventExamples[0].foods}></FoodForm>
        </div>
    )
};

export default EventCard;
