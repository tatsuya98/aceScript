"use client";
import React, { useContext } from "react";
import UserProfile from "./UserProfile";
import UserSolutions from "./AcceptedSolutions";
import { UserContext } from "../Context/UserProvider";

const ProfilePage: React.FC = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-center items-start mt-12 gap-5 flex-wrap px-12 mb-16">
      <UserProfile />
      <UserSolutions />
    </div>
  );
};

export default ProfilePage;
