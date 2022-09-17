import React, { useState } from 'react';

import Dishes from './dishes.component.jsx';

const FoodForm = (props) => {
  const [foods, setFoods] = useState(props.foods);

  return (
    <div className="container">
      <div className="row text-center">
        <Dishes
          className="col"
          title="Main Dishes"
          foods={foods.filter((food) => food.course === 'main')}
          eventId={props.eventId}
        />
        <Dishes
          className="col"
          title="Side Dishes"
          foods={foods.filter((food) => food.course === 'side')}
          eventId={props.eventId}
        />
      </div>
    </div>
  );
};

export default FoodForm;
