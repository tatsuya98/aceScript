"use client"
import React from 'react';
import UserProfile from './UserProfile';

const dummyData = {
  avatarUrl: '', //  <-----if empty string defaults to default avatar.
  username: 'JohnDoe',

};

const ProfilePage: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <UserProfile
        avatarUrl={dummyData.avatarUrl}
        username={dummyData.username}
    
      />
    </div>
  );
};

export default ProfilePage;
