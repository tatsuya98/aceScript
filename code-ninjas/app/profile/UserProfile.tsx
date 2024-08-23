import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProgressCircle from '../components/ProgressCircle';

const UserProfile: React.FC = () => {
  const [avatar, setAvatar] = useState<string>('/default-avatar.webp');  
  const [username, setUsername] = useState<string>('Not Logged-in'); 
  const [problemsSolved, setProblemsSolved] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchUserData(username); // Fetch data for 'Sam' on component mount
  }, []);

  const fetchUserData = async (username: string) => {
    try {
      const response = await fetch(`/api/get-user-data?username=${username}`);
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setAvatar(data.avatar_url || '/default-avatar.webp'); 
      setUsername(data.username);
      setProblemsSolved(data.problems_solved);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };


  
  
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
        src={avatar} 
        alt="User Avatar"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          marginBottom: '20px',
        }}
      />
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px', color: 'white', }}>{username}</h1>
      
      <ProgressCircle/>
      <p style={{color: 'white', paddingBottom: '20px'}}>2/10 completed</p> 

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
        See Dashboard
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
}
export default UserProfile;
