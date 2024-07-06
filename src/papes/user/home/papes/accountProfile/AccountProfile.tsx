import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './accountProfile.scss';

const AccountProfile = () => {

  const [user, setUser] = useState<any>(null);

  const User = useSelector((store: any) => store.user);

  useEffect(() => {
    setUser(User);
  }, [User]);

  if (!user) return null;

  return (
    <div className="container">
      <h1>User Profile</h1>
      <img src="data:image/png;base64,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" alt="Avatar" className="avatar" />
      <div className="info">
        <p><strong>Username:</strong> {User.data.userName}</p>
        <p><strong>Email:</strong> {User.data.email}</p>
        <p><strong>Phone:</strong> {User.data.phone}</p>
        <p><strong>Address:</strong> {User.data.address}</p>
      </div>
    </div>
  );
};

export default AccountProfile;