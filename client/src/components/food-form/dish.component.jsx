import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

const Dish = (props) => {
  const [food, setFood] = useState(props.food);
  const { currentUser } = useContext(UserContext);
  const style = currentUser._id === food.userId ? { fontWeight: 'bold' } : { fontWeight: 'normal' };
  
  return <li style={ style }>{food.name}</li>;
}

export default Dish;
