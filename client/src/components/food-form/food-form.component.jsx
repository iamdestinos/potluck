import React, { useState, useContext } from 'react';

import Dishes from './dishes.component.jsx';
import { UserContext } from '../../contexts/user.context';

const FoodForm = (props) => {
  const [foods, setFoods] = useState(props.foods);
  const [selectOpt, setOpt] = useState('none');
  const [inputVal, setInputVal] = useState('');
  const { currentUser } = useContext(UserContext);

  const selectHandler = (e) => {
    setOpt(e.target.value);
  }

  const inputHandler = (e) => {
    setInputVal(e.target.value);
  }

  const clickHandler = () => {
    console.log('activated clickHandler!', inputVal);
  }

  return (
    <div id="FoodFormContainer">
      <h2 className="text-center">Food</h2>
      <div id="RefactoredFoodInput" className="row float-center">
        <p className="col-md-1"></p>
        <input className="col-md-5" placeholder="Add a Dish..." value={inputVal} onChange={inputHandler} onKeyPress={(e) => { if(e.key === "Enter" && inputVal && currentUser && selectOpt !== 'none') {clickHandler()}}} ></input>
        <select name="Meal Category" className="col-md-4" onChange={selectHandler} value={selectOpt}>
          Select Meal Category
          <option value="none">None</option>
          <option value="main">Main Dish</option>
          <option value="side">Side Dish</option>
          <option value="bread">Bread</option>
          <option value="salad">Salad</option>
          <option value="dessert">Dessert</option>
          <option value="other">Other</option>
        </select>
        <button className="col-md-1" disabled={!inputVal || !currentUser || selectOpt === 'none'} onClick={clickHandler} >+</button>
      </div>

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
    </div>
  );
};

export default FoodForm;
