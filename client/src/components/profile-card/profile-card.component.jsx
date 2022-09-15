import React, { useContext } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import { UserContext } from '../../contexts/user.context';

const ProfileCard = () => {
  const { currentUser } = useContext(UserContext);
  console.log('This is currentUser within ProfileCard: ', currentUser);
  return (
    <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
      <img className="card-img-top" src={currentUser.picture} alt={currentUser.name} />
      <div className="card-body text-center">
        <h2>{currentUser.name}</h2>
        <p>{currentUser.email}</p>
        <p>clout: 🍲🍲🍲🍲🍲🍲</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Event Entry</li>
        <li className="list-group-item">Event Entry</li>
        <li className="list-group-item">Event Entry</li>
        <li className="list-group-item">Event Entry</li>
        <li className="list-group-item">Event Entry</li>
      </ul>
    </div>
  );
};

export default ProfileCard;
