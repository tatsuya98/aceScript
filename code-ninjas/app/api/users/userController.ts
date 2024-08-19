import usersModel from "./model";

export default async function usersController() {
  const response = await usersModel();
  return response;
}
