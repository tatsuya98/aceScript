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
    console.log("Avatar URL Updated:", avatarUrl); // Log the current avatar URL
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

  //  alert('Delete Profile clicked');
 

  const handleSeeProgress = () => {
    router.push('/dashboard'); 
  }


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '50px',
      width: '500px',
      margin: '10px',
      backgroundColor: '#BFDBFE1A',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <img 
        src={user?.avatar || '/default-avatar.webp'} 
        alt="User Avatar"
        onError={(e) => { e.target.src = '/default-avatar.webp'; }}
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          marginBottom: '20px',
        }}
      />
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px', color: 'white' }}>
        {user ? user.username : 'Not Logged-in'}
      </h1>
      <ProgressCircle completed={user?.problems_solved.length || 0} total={10} />
      <button onClick={handleUpdateImage} style={buttonStyle}>Update Image</button>
      <button onClick={() => router.push('/dashboard')} style={buttonStyleGreen}>See Dashboard</button>
      <button onClick={handleDeleteProfile} style={buttonStyleRed}>Delete Profile</button>
    </div>
  );
};

const buttonStyle = {
  padding: '15px 30px',
  fontSize: '1rem',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginBottom: '10px',
  width: '100%',
};

const buttonStyleGreen = { ...buttonStyle, backgroundColor: '#28a745' };
const buttonStyleRed = { ...buttonStyle, backgroundColor: '#FF0000' };

export default UserProfile;