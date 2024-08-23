"use client";

import * as React from "react";
type User = null | {
  username: string;
  avatar: string;
  problems_solved: string[];
  isLoggedIn: boolean;
};
type UserContextType = {
  user: User;
  setUser(user: User): void;
};
const UserContextDefualtValues: UserContextType = {
  user: {
    username: "bob",
    avatar:
      "https://www.iconpacks.net/icons/2/free-user-profile-icon-4255-thumb.png",
    problems_solved: [],
    isLoggedIn: false,
  },
  setUser(user: User) {},
};
export const UserContext = React.createContext<UserContextType>(
  UserContextDefualtValues
);
type Props = {
  children: React.ReactNode;
};
export default function UserContextProvider({ children }: Props) {
  const [user, setUser] = React.useState<User | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
