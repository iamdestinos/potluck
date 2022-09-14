import React, { useState } from 'react';

const Events = (event) => {
  const [mainDish, setMainDish] = useState('chicken');

  const changeMain = (e) => {
    const mainDish = e.target.value;
    setMainDish({mainDish});
    console.log('mainDish: ', mainDish);
  };

  return (
    <>
      <div className="event">{event}</div>
      <div className="main-dish"
      onChange={changeMain}
      >{mainDish}</div>
      <div className="side-dish">sideDish</div>
      <div className="attending">attending</div>
    </>
  );
};

export default Events;
