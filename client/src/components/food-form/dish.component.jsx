import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import axios from 'axios';

const Dish = (props) => {
  const [food, setFood] = useState(props.food);
  const { currentUser } = useContext(UserContext);
  const bool = currentUser ? currentUser._id : null;
  const style = bool === food.userId ? { fontWeight: 'bold' } : { fontWeight: 'normal' };
  
  const clickHandler = () => {
    if (bool === food.userId) {
      axios.delete(`/event/${props.eventId}`, { data: { food: food } })
        .then(result => {
        })
        .catch(err => {
          console.error(err);
        });
    }
  };

  return <li style={ style }>
      {food.name}
      { bool === food.userId ? <button className='float-right' onClick={clickHandler}>Del</button> : '' }
    </li>;
}

export default Dish;
