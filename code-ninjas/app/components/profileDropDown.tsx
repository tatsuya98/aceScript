import { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import { Menu, Avatar, MenuItem, Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function ProfileDropDown() {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setUser(null);
    router.push("/");
  };
  return (
    <>
      <Avatar
        alt="profile icon"
        src="https://freesvg.org/img/abstract-user-flat-4.png"
        onClick={handleClick}
        className="cursor-pointer"
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <p className="ml-4 mb-2">{user?.username}</p>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Link href="/profile">My Profile</Link>
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}
