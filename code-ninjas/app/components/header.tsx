"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import profilePic from "../../public/profile-user-svgrepo-com.svg";
import Link from "next/link";
import { UserContext } from "../Context/UserProvider";
type Props = {
  title: string;
  children?: React.ReactNode;
};
export default function Header({ title, children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  return (
    <header>
      <div className="flex  justify-around gap-4 p-8 ">
        <a href="/" id="logo">
          <h1 className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            {title}
          </h1>
        </a>

        <a
          href="/dashboard"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          id="dashboard"
        >
          dashboard
        </a>
        {!isLoggedIn ? (
          <div className="flex gap-12">
            <Link href={"/login"}>
              <button className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                Login
              </button>
            </Link>

            <Link href={"/register"}>
              <button className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                Register
              </button>
            </Link>
          </div>
        ) : (
          <a href="/profile">
            <Image src={profilePic} alt="profile icon" width={50} height={50} />
          </a>
        )}
        {children}
      </div>
    </header>
  );
}
