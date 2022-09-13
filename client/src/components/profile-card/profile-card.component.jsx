import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ProfileCard = () => {
  const { user } = useAuth0();

  return (
    <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
      <img className="card-img-top" src={user.picture} alt={user.name} />
      <div className="card-body text-center">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
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
