
"use client"
import React from 'react';
import UserProfile from './UserProfile';
import UserSolutions from './AcceptedSolutions'; 





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
      <UserProfile/>
      <UserSolutions
        problemsSolved={[ 
          { title: 'Make Counter', difficulty: 'Easy'},
          { title: 'Mean', difficulty: 'Easy' }
        ]}
      />
    </div>
  );
};

export default ProfilePage;
