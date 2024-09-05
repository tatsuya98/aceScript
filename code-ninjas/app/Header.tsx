"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Hamburger from "./icons/Hamburger";
import CodeSymbol from "./icons/CodeSymbol";
import Account from "./icons/Account";
import { UserContext } from "./Context/UserProvider";
import ProfileDropDown from "./components/profileDropDown";
import Image from "next/image";
import MobileMenu from "./components/HomeComponents/MobileMenu";
export default function Header() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { user } = useContext(UserContext);
  const handleMenuToggle = () => {
    setShowSideMenu(!showSideMenu);
  };
  useEffect(() => {
    if (user?.isLoggedIn) {
      setShowProfile(true);
    } else {
      setShowProfile(false);
    }
  }, [user?.isLoggedIn]);

  return (
    <>
      <header className="flex justify-between h-30 items-center px-6 py-6 max-w-7xl m-auto fixed top-0 right-0 left-0 bg-[#070815] z-20">
        <div className=" flex justify-center relative h-full">
          <Link href="/">
            <Image
              src="/ace3.png"
              alt="Code Ninjas Logo"
              width={120}
              height={120}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>

        <button onClick={handleMenuToggle} className="sm:hidden">
          <Hamburger />
        </button>
        <Link
          href="/dashboard"
          className="hidden sm:flex gap-2 items-center  justify-center"
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
      <div className="hidden sm:flex">
        <MobileMenu
          handleMenuToggle={handleMenuToggle}
          showSideMenu={showSideMenu}
        />
      </div>
    </>
  );
}
