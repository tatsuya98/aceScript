import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import ProgressCircle from '../components/ProgressCircle';
import { UserContext } from '../Context/UserProvider'; 

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
    <div className="flex flex-col items-center p-12 w-[500px]  bg-opacity-10 bg-blue-200 rounded-lg shadow-lg">
      <img 
        src={user?.avatar_url || '/default-avatar.webp'} 
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