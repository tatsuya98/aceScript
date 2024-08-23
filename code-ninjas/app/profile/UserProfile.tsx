import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import ProgressCircle from '../components/ProgressCircle';
import { UserContext } from '../Context/UserProvider'; // Adjust this import path as necessary

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  
  
   const handleUpdateImage = async () => {



      const filePicker = document.createElement('input');
      filePicker.type = 'file';
      filePicker.accept = 'image/*';
      filePicker.onchange = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
    
        try {
          const response = await fetch('/api/upload-avatar', {
            method: 'POST',
            body: formData,
          });
          const data = await response.json();
          setAvatar(data.imageUrl); 
        } catch (error) {
          console.error('Error updating image:', error);
        }
      };
      filePicker.click();
   }
    
    

   
  

  const handleDeleteProfile = async () => {
        try {
          const response = await fetch('/api/delete-profile', {
            method: 'DELETE',
          });
          if (response.ok) {
            alert('Profile deleted');
            router.push('/'); // home page after delete
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
        src={user?.avatar_url || '/default-avatar.webp'} 
        alt="User Avatar"
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