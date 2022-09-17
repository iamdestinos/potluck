import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import axios from 'axios';

const Dish = (props) => {
  const [food, setFood] = useState(props.food);
  const { currentUser } = useContext(UserContext);
  const bool = currentUser ? currentUser._id : null;
  const style = bool === food.userId ? { fontWeight: 'bold' } : { fontWeight: 'normal' };
  
  const clickDelHandler = () => {
    if (bool === food.userId) {
      axios.delete(`/event/${props.eventId}`, { data: { food: food } })
        .then(result => {
        })
        .catch(err => {
          console.error(err);
        });
    }
  };

  const clickEditHandler = () => {
    console.log('edit button clicked!');
    const newName = prompt('Enter new food:');
    console.log('new food:', newName);
    const newFood = {
      name: newName,
      course: food.course,
      userId: food.userId,
    };
    axios.put(`/event/update/${props.eventId}`, { food: food, newFood: newFood})
      .then(result => {
        console.log(`item ${food.name} updated!`);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return <li style={ style }>
      {food.name}
      { bool === food.userId ?
        <span className='float-right justify-content-between'>
          <button onClick={clickEditHandler}>Edit</button>
          <button onClick={clickDelHandler}>Del</button>
        </span>
        : ''
      }
    </li>;
}

export default Dish;
