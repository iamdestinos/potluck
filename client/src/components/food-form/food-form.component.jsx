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
          attending={props.attending}
        />
        <Dishes
          className="col"
          title="Side Dishes"
          foods={foods.filter((food) => food.course === 'side')}
          eventId={props.eventId}
          attending={props.attending}
        />
      </div>
      <div className="row text-center">
        <Dishes
          className="col"
          title="Bread"
          foods={foods.filter((food) => food.course === 'bread')}
          eventId={props.eventId}
          attending={props.attending}
        />
        <Dishes
          className="col"
          title="Salads"
          foods={foods.filter((food) => food.course === 'salad')}
          eventId={props.eventId}
          attending={props.attending}
        />
      </div>
      <div className="row text-center">
        <Dishes
          className="col"
          title="Desserts"
          foods={foods.filter((food) => food.course === 'dessert')}
          eventId={props.eventId}
          attending={props.attending}
        />
        <Dishes
          className="col"
          title="Other"
          foods={foods.filter((food) => food.course === 'other')}
          eventId={props.eventId}
          attending={props.attending}
        />
      </div>
    </div>
  );
};

export default FoodForm;
