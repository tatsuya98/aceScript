import Link from "next/link";
import * as React from "react";
import CodeSymbol from "../../icons/CodeSymbol";
import Account from "../../icons/Account";
import { UserContext } from "../../Context/UserProvider";
import LogOut from "../../icons/LogOut";
import { Avatar } from "@mui/material";
import { useRouter } from "next/navigation";
type MobileProps = {
  showSideMenu: boolean;
  handleMenuToggle: () => void;
};
export default function MobileMenu({
  handleMenuToggle,
  showSideMenu,
}: MobileProps): React.JSX.Element {
  const { user, setUser } = React.useContext(UserContext);
  const router = useRouter();
  const handleLogout = () => {
    setUser(null);
    router.push("/");
  };
  return (
    <section
      className={`bg-gray-800 absolute top-0 bottom-0 py-8 px-8 flex flex-col  gap-8 w-[97%] transition-[left,opacity] duration-1000 ${
        !showSideMenu ? "left-[-100%] opacity-0" : "opacity-100 left-0 z-20"
      } sm:hidden`}
    >
      <div className="flex gap-4 mt-8">
        {user?.avatar && (
          <Avatar
            src={user?.avatar}
            alt={user?.username.slice(0, 1)}
            sx={{ width: 24, height: 24 }}
          />
        )}
        <p className="self-center"> {user?.username}</p>
      </div>
      {user?.isLoggedIn && (
        <Link href="/dashboard" className="flex gap-5 items-center">
          <CodeSymbol />
          <p>Dashboard</p>
        </Link>
      )}
      {!user?.isLoggedIn ? (
        <Link href="/login" className="flex gap-5 mt-8 items-center">
          <Account />

          <p
            onClick={() => {
              handleMenuToggle();
            }}
          >
            Sign In / Register
          </p>
        </Link>
      ) : (
        <div className="flex flex-col gap-8">
          <Link
            className="flex gap-5"
            href="/profile"
            onClick={handleMenuToggle}
          >
            <Account />
            My profile
          </Link>
          <div className="flex gap-5">
            <LogOut />
            <p
              onClick={() => {
                handleLogout();
                handleMenuToggle();
              }}
            >
              Log out
            </p>
          </div>
        </div>
      )}
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
  );
}
