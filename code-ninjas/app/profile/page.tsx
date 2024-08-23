
"use client"
import React from 'react';
import UserProfile from './UserProfile';
import UserSolutions from './AcceptedSolutions'; 


//placeholder for userssData--->
const dummyData = {
  avatar_url: '', //  <-----if empty string defaults to default avatar.
  username: 'sam',
  problems_solved: [ 
    { title: 'Make Counter', difficulty: 'Easy'},
    { title: 'Mean', difficulty: 'Easy' }
  ]
};

const ProfilePage: React.FC = () => {
  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'flex-start',
      marginTop: '50px',
      gap: '20px',
      flexWrap: 'wrap', 
      padding: '0 50px',
    }}>
      <UserProfile
        avatarUrl={dummyData.avatar_url}
        username={dummyData.username}
      />
      <UserSolutions
        problemsSolved={dummyData.problems_solved}
      />
    </div>
  );
};

export default ProfilePage;
