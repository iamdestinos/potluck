import React, { useState } from 'react';
// import FoodForm from '../food-form/food-form.component';

const EventProfile = ({ selectedEvent: {time, location:{address}, foods, attending:{userIds}} }) => {
  const [dish, setDish] = useState({
    main: '',
    side: '',
  });
  const [dishes, setDishes] = useState([]);

  const handleDishChange = (e) => {
    const { main, side } = e.target.value;
    setDish({ main, side });
  };

  const dishSubmit = () => {
    setDishes((prevDish) => {
      return {...prevDish, ...dishes}});
  }

  return (
    <div>
      <h1>{address}</h1>
      <div className="main-dish">
        <h3>Main Dish</h3>
        <input name="main" value={dishes.main} onChange={handleDishChange} />
      </div>
      <button type="button" onSubmit={dishSubmit}>Add Dish</button>
      <div className="side-dish">
        <h3>Side Dish</h3>
        <input name="side" value={dishes.side} onChange={handleDishChange} />
      </div>
      <button type="button" onSubmit={dishSubmit}>Add Dish</button>
      {/* <FoodForm /> */}
      <div className="attending">
        {`${userIds.length} people attending`}
      </div>
    </div>
  );
};

export default EventProfile;
