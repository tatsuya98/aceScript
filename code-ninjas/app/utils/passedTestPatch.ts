import axios from "axios";

export default async function patchUser(slug: string, username: string) {
  try {
    const { data } = await axios.get(`/api/users/${username}`);
    
    
    if (!data.problems_solved.includes(slug)) {
      
      const { _id, ...rest } = data;
      rest.problems_solved.push(slug);
      
      
      const response = await axios.patch(`/api/users/${username}`, { ...data });
      
    
      return response.data;
    } else {
      return data;  
    }
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error;  
  }
}
