
"use client"
import React from 'react';
import UserProfile from './UserProfile';
import UserSolutions from './AcceptedSolutions'; 





const ProfilePage: React.FC = () => {
  return (
    <div className="flex justify-center items-start mt-12 gap-5 flex-wrap px-12">
      <UserProfile />
      <UserSolutions
        problemsSolved={[
          { title: 'Make Counter', status: 'Easy' },
          { title: 'Mean', status: 'Easy' },
        ]}
      />
    </div>
  );
};

export default ProfilePage;