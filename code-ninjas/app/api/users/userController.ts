import {usersModel, createUser} from "./model";

export interface userDetails {username: string, password: string, avatar_url: string, kataCompletions: number[]}


export  async function usersController() {
  const response = await usersModel();
  return response;
}

export async function postUser(userDetails : userDetails){
  try{
    
    const response = await createUser(userDetails)
    return response
  }catch(error){
    throw error
  }

  
}