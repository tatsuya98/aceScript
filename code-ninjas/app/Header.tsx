"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Hamburger from "./icons/Hamburger";
import CodeSymbol from "./icons/CodeSymbol";
import Account from "./icons/Account";
import { UserContext } from "./Context/UserProvider";
import ProfileDropDown from "./components/profileDropDown";
import Image from "next/image";
import MobileMenu from "./HomeComponents/MobileMenu";


export default function Header() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [burgerIcon, setBurgerIcon] = useState(false);
  const [mobileWidth, setMobileWidth] = useState(window.innerWidth);
  const { user } = useContext(UserContext);
  const handleMenuToggle = () => {
    setShowSideMenu(!showSideMenu);
  };
  const handleResize = () => {
    if (window.innerWidth <= 640) {
      setBurgerIcon(true);
    } else {
      setBurgerIcon(false);
    }
    setMobileWidth(window.innerWidth);
  };
  useEffect(() => {
    if (user?.isLoggedIn) {
      setShowProfile(true);
    } else {
      setShowProfile(false);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [user?.isLoggedIn, mobileWidth]);


  return (
    <>
      <header className="flex justify-between h-20 items-center px-6 max-w-7xl m-auto fixed top-0 right-0 left-0 bg-[#070815] z-10">
      	<Link href="/" className="w-[150px]">
					<Image src='/logo.png' alt="Code Ninjas Logo" width={70} height={70} />
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
          mobileWidth > 640 && <ProfileDropDown />
        )}
      </header>
      {mobileWidth <= 640 && (
        <MobileMenu
          handleMenuToggle={handleMenuToggle}
          showSideMenu={showSideMenu}
        />
      )}
    </>
  );
}
