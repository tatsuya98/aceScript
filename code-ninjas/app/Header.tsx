"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Hamburger from "./icons/Hamburger";
import CodeSymbol from "./icons/CodeSymbol";
import Account from "./icons/Account";
import { UserContext } from "./Context/UserProvider";
import ProfileDropDown from "./components/profileDropDown";

export default function Header() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user?.isLoggedIn) {
      setShowProfile(true);
    } else {
      setShowProfile(false);
    }
  }, [user?.isLoggedIn]);
  const handleMenuToggle = () => {
    setShowSideMenu(!showSideMenu);
  };
  return (
    <>
      <header className="flex justify-between h-20 items-center px-6 max-w-7xl m-auto fixed top-0 right-0 left-0 bg-[#070815] z-10">
        <Link href="/" className="w-[150px]">
          Logo
        </Link>
        <button onClick={handleMenuToggle} className="sm:hidden">
          <Hamburger />
        </button>
        <Link
          href="/dashboard"
          className="hidden sm:flex gap-2 items-center w-[150px]"
        >
          <CodeSymbol />
          <p>Dashboard</p>
        </Link>
        {!showProfile ? (
          <Link
            href="/login"
            className="hidden sm:flex gap-2 items-center w-[150px]"
          >
            <Account />
            <p>Sign In / Register</p>
          </Link>
        ) : (
          <ProfileDropDown />
        )}
      </header>
      <section
        className={`bg-blue-300 absolute top-0 bottom-0 py-8 px-8 flex flex-col gap-8 w-[97%] transition-[left,opacity] duration-1000 ${
          !showSideMenu ? "left-[-100%] opacity-0" : "opacity-100 left-0"
        } sm:hidden`}
      >
        <Link href="/">Logo Inserted Here</Link>
        <Link href="/dashboard" className="flex gap-5 items-center">
          <CodeSymbol />
          <p>Dashboard</p>
        </Link>
        <Link href="/login" className="flex gap-5 items-center">
          <Account />

          <p>Sign In / Register</p>
        </Link>
        <button className="absolute top-8 right-10" onClick={handleMenuToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </section>
    </>
  );
}
