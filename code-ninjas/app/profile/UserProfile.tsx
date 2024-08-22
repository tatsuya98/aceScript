import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import ProgressCircle from '../components/ProgressCircle'

const UserProfile: React.FC = () => {
  const [avatar, setAvatar] = useState<string>('/default-avatar.webp');
  const username = "JohnDoe"; 
  const router = useRouter(); 

  
  
   const handleUpdateImage = async () => {

    // possible logic to update the profile image--still working on this
    alert('Update Image clicked');
    // 
    //     const file = await selectImageFile(); // Open file picker (not shown)
    //     const formData = new FormData();
    //     formData.append('file', file);
      
    //     try {
    //       const response = await fetch('/api/upload-avatar', {
    //         method: 'POST',
    //         body: formData,
    //       });
    //       const data = await response.json();
    //       setAvatar(data.imageUrl); 
    //     } catch (error) {
    //       console.error('Error updating image:', error);
    //     }
    //   };
      

   
  };

  const handleDeleteProfile = () => {
    // Logic to delete the profile // async () => {
    //     try {
    //       const response = await fetch('/api/delete-profile', {
    //         method: 'DELETE',
    //       });
    //       if (response.ok) {
    //         alert('Profile deleted');
    //         router.push('/'); // home page after delete
    //       } else {
    //         console.error('Failed to delete profile');
    //       }
    //     } catch (error) {
    //       console.error('Error deleting profile:', error);
    //     }
    //   };
    alert('Delete Profile clicked');
  };

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
      margin: '0 auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <img 
        src={avatar} 
        alt="User Avatar"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          marginBottom: '20px',
        }}
      />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'black', }}>{username}</h1>
      
      <ProgressCircle/>
      <p style={{color: 'black', paddingBottom: '20px'}}>2/10 completed</p> 

      <button
        onClick={handleUpdateImage}
        style={{
          padding: '15px 30px',
          fontSize: '1rem',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '10px',
          width: '100%',
        }}
      >
        Update Image
      </button>

      
      {
  
      
       <button
        onClick={handleSeeProgress}
        style={{
          padding: '15px 30px',
          fontSize: '1rem',
          backgroundColor: '#28a745', 
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '10px',
          width: '100%',
        }}
      >
        See Progress
      </button> }

      <button
        onClick={handleDeleteProfile}
        style={{
          padding: '15px 30px',
          fontSize: '1rem',
          backgroundColor: '#FF0000',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        Delete Profile
      </button>
    </div>
  );
};

export default UserProfile;
