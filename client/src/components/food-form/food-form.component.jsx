import React, { useState } from 'react';

import Dishes from './dishes.component.jsx';

const FoodForm = (props) => {
  const [foods, setFoods] = useState(props.foods);

  return (
    <div className="container w-75">
      <div className="row text-center">
        <Dishes
          className="col gx-5"
          title="Main Dishes"
          foods={foods.filter((food) => food.course === 'main')}
          eventId={props.eventId}
          attending={props.attending}
        />
        <Dishes
          className="col gx-5"
          title="Side Dishes"
          foods={foods.filter((food) => food.course === 'side')}
          eventId={props.eventId}
          attending={props.attending}
        />
      </div>
      <div className="row text-center">
        <Dishes
          className="col gx-5"
          title="Bread"
          foods={foods.filter((food) => food.course === 'bread')}
          eventId={props.eventId}
          attending={props.attending}
        />
        <Dishes
          className="col gx-5"
          title="Salads"
          foods={foods.filter((food) => food.course === 'salad')}
          eventId={props.eventId}
          attending={props.attending}
        />
      </div>
      <div className="row text-center">
        <Dishes
          className="col gx-5"
          title="Desserts"
          foods={foods.filter((food) => food.course === 'dessert')}
          eventId={props.eventId}
          attending={props.attending}
        />
        <Dishes
          className="col gx-5"
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
