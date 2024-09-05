"use client";
import * as React from "react";
import UserProfile from "./UserProfile";
import UserSolutions from "./AcceptedSolutions";
import { UserContext } from "../Context/UserProvider";
import { useRouter } from "next/navigation";
const ProfilePage = (): React.JSX.Element => {
  const router = useRouter();
  const { user } = React.useContext(UserContext);
  React.useEffect(() => {
    if (!user?.isLoggedIn) {
      alert("Please login first");
      router.push("/login");
    }
  }, []);
  return (
    <>
      {user?.isLoggedIn && (
        <div className="flex justify-center items-start mt-12 gap-5 flex-wrap px-12 mb-16">
          <UserProfile />
          <UserSolutions />
        </div>
      )}
    </>
  );
};

export default ProfilePage;
