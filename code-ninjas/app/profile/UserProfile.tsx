import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProgressCircle from '../components/ProgressCircle';
import { UserContext } from '../Context/UserProvider'; 

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const [avatarUrl, setAvatarUrl] = useState(user?.avatar || '/default-avatar.webp');
  const router = useRouter();
  
  useEffect(() => {
    setAvatarUrl(user?.avatar || '/default-avatar.webp');
 
  }, [user?.avatar]);

  const handleUpdateImage = async () => {
    const newAvatarUrl = window.prompt("Please enter the new image URL:", avatarUrl);
    
    if (newAvatarUrl && newAvatarUrl !== avatarUrl) {
      try {
        const response = await fetch(`/api/users/${user?.username}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ avatar_url: newAvatarUrl }),
        });
  
        const data = await response.json();
        
        if (response.ok) {
          setUser(prevUser => ({ ...prevUser, avatar: newAvatarUrl }));
          alert('Avatar updated successfully!');
        } else {
          throw new Error(data.message || "Failed to update avatar");
        }
      } catch (error) {
        console.error('Error updating avatar:', error);
      }
    } else {
      alert('Avatar update canceled or invalid URL provided.');
    }
  };
  
  
  
  

  const handleDeleteProfile = async () => {
    try {
        const response = await fetch(`/api/users/${user?.username}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            
            setUser(null);

           
           

            alert('Profile deleted');
            router.push('/');
        } else {
            alert('Error: Failed to delete profile');
        }
    } catch (error) {
        console.error('Error deleting profile:', error);
    }
};

 
 

  const handleSeeProgress = () => {
    router.push('/dashboard'); 
  }


  return (
    <div className="flex flex-col items-center p-12 w-[500px]  bg-opacity-10 bg-blue-200 rounded-lg shadow-lg border border-white">
      <img 
        src={user?.avatar || '/default-avatar.webp'} 
        alt="User Avatar"
        className="w-48 h-48 rounded-full mb-5"
      />
      <h1 className="text-4xl font-bold mb-2.5 text-white">
        {user ? user.username : 'Not Logged-in'}
      </h1>
      <ProgressCircle completed={user?.problems_solved.length || 0} total={10} />
      <button onClick={handleUpdateImage} className={buttonStyle}>Update Image</button>
      <button onClick={() => router.push('/dashboard')} className={buttonStyleGreen}>See Dashboard</button>
      <button onClick={handleDeleteProfile} className={buttonStyleRed}>Delete Profile</button>
    </div>
  );
};

const buttonStyle = "py-3 px-6 text-lg bg-blue-500 text-white rounded cursor-pointer mb-2.5 w-full";
const buttonStyleGreen = `${buttonStyle} bg-green-500`;
const buttonStyleRed = `${buttonStyle} bg-red-500`;

export default UserProfile;