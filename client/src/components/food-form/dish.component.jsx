import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import axios from 'axios';

const Dish = (props) => {
  const [food, setFood] = useState(props.food);
  const { currentUser } = useContext(UserContext);
  const style = currentUser ? currentUser._id : null === food.userId ? { fontWeight: 'bold' } : { fontWeight: 'normal' };
  
  const clickHandler = () => {
    axios.delete(`/event/${props.eventId}`, { food: food })
      .then(result => {
        console.log(`${food.name} deleted!`);
      })
      .catch(err => {
        console.log(`failed to delete ${food.name}`);
      });
  };

  return <li style={ style }>
      {food.name}
      <button className='float-right' onClick={clickHandler}>Del</button>
    </li>;
}

export default Dish;
