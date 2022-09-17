import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import axios from 'axios';

const Dish = (props) => {
  const [food, setFood] = useState(props.food);
  const { currentUser } = useContext(UserContext);
  const bool = currentUser ? currentUser._id : null;
  const [style, setStyle] = useState(bool === food.userId ? { fontWeight: 'bold' } : { fontWeight: 'normal' });
  const [loading, setLoad] = useState(false);

  const clickDelHandler = () => {
    if (bool === food.userId) {
      setLoad(true);
      axios.delete(`/event/${props.eventId}`, { data: { food: food } })
        .then(result => {
          setStyle({textDecoration: "line-through", fontWeight: 'bold'});
        })
        .catch(err => {
          console.error(err);
          setLoad(false);
        });
    }
  };

  const clickEditHandler = () => {
    const newName = prompt('Enter new food:');
    const newFood = {
      name: newName,
      course: food.course,
      userId: food.userId,
    };

    setLoad(true);
    axios.put(`/event/update/${props.eventId}`, { food: food, newFood: newFood})
      .then(result => {
        setFood(newFood);
        setLoad(false);
      })
      .catch(err => {
        console.error(err);
        setLoad(false);
      });
  };

  return <li style={ style }>
      {food.name}
      { bool === food.userId ?
        <span className='float-right justify-content-between'>
          <button onClick={clickEditHandler} disabled={loading}>Edit</button>
          <button onClick={clickDelHandler} disabled={loading}>Del</button>
        </span>
        : ''
      }
    </li>;
}

export default Dish;
