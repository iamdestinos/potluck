import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/user.context';

const Events = ({ event, view }) => {
  const { currentUser } = useContext(UserContext);
  const { foods } = event;
  let userFoods;
  if (currentUser) {
    userFoods = foods.filter((food) => food.userId === currentUser._id);
  }

  const renderView = () => {
    if (view === 'profile') {
      return (
        <>
          <p>You are bringing:</p>
          <ul>
            {userFoods.map((food) => <li key={`${food}${food.userId}${Math.random()}`}><i>{food.name}</i></li>)}
          </ul>
        </>
      );
    }
    return [];
  };

  return (
    <>
      <h4>{event.eventName}</h4>
      <span className="text-muted">
        { new Date(event.eventDate).toLocaleString("default", { month: "short" })}
        {new Date(event.eventDate).getDate()}
      </span>
      {renderView()}
    </>
  );
};

export default Events;
