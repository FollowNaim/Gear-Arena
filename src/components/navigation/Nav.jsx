import Moon from "@/lib/Moon";
import Sun from "@/lib/Sun";
import { AuthContext } from "@/provider/AuthProvider";
import { themeContext } from "@/provider/ThemeProvider";
import { Squash as Hamburger } from "hamburger-react";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { IconButton } from "../icon-btn/IconBtn";
import { Button } from "../ui/button";

function Nav() {
  const { user, handleSignOut } = useContext(AuthContext);
  const { theme, setTheme } = useContext(themeContext);
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const handleLogout = () => {
    toast.promise(handleSignOut(), {
      loading: "Signing Out...",
      success: <b>Signout Succeessfull!</b>,
      error: <b>Could not signout.</b>,
    });
  };
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <div>
      <div className="container flex justify-between items-center py-2 px-4 border-b border-border">
        <div>
          <Link to={"/"}>
            <h1 className="font-semibold text-2xl">GearArena</h1>
          </Link>
        </div>

        <div
          className={`absolute md:static w-full bg-black/30 backdrop-blur-lg py-10 md:py-0  ${
            isOpen ? "translate-y-52" : "-translate-y-full"
          } duration-300 ease-in-out md:w-fit transition-transform md:bg-transparent md:translate-y-0  z-40 left-0`}
        >
          <ul
            className="flex flex-col md:flex-row items-center gap-6"
            id="navlinks"
          >
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/all-equipments"}>
              <li>All Equipment</li>
            </NavLink>
            <NavLink to={"/add-equipment"}>
              <li>Add Equiement</li>
            </NavLink>
            <NavLink to={"/my-equipments"}>
              <li>My Equipement</li>
            </NavLink>
            {user && (
              <Button className="block md:hidden" onClick={handleLogout}>
                Log Out
              </Button>
            )}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className={`cursor-pointer`} onClick={() => setTheme(!theme)}>
            {theme ? (
              <IconButton>
                <Moon />
              </IconButton>
            ) : (
              <IconButton>
                <Sun />
              </IconButton>
            )}
          </div>
          {!user && (
            <div className="flex gap-4 items-center">
              <Link to={"/auth/signin"}>
                <Button className="" variant="ghost">
                  Login
                </Button>
              </Link>
              <Link to={"/auth/signup"}>
                <Button>Register</Button>
              </Link>
            </div>
          )}
          <Tooltip id="name-tooltip" />
          {user && (
            <div className="flex gap-4 items-center">
              <p
                data-tooltip-id="name-tooltip"
                data-tooltip-content={user.displayName || "N/A"}
              >
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  referrerPolicy="no-referrer"
                  src={
                    user.photoURL ||
                    "https://i.ibb.co.com/6H3SMRm/user-profile-icon-vector-avatar-600nw-2247726673-removebg-preview.png"
                  }
                  alt=""
                />
              </p>

              <Button onClick={handleLogout}>Log Out</Button>
            </div>
          )}
        </div>

        <div className="flex items-center md:hidden">
          <div className="flex md:hidden items-center gap-4">
            <div className={`cursor-pointer`} onClick={() => setTheme(!theme)}>
              {theme ? (
                <IconButton>
                  <Moon />
                </IconButton>
              ) : (
                <IconButton>
                  <Sun />
                </IconButton>
              )}
            </div>
            {!user && (
              <div className="flex gap-4 items-center">
                <Link to={"/auth/signin"}>
                  <Button className="" variant="ghost">
                    Login
                  </Button>
                </Link>
              </div>
            )}
            {user && (
              <div className="flex gap-4 items-center">
                <p title={user.displayName || "N/A"}>
                  <img
                    className="w-8 h-8 object-cover  rounded-full"
                    referrerPolicy="no-referrer"
                    src={
                      user.photoURL ||
                      "https://i.ibb.co.com/6H3SMRm/user-profile-icon-vector-avatar-600nw-2247726673-removebg-preview.png"
                    }
                    alt=""
                  />
                </p>
              </div>
            )}
          </div>
          <Hamburger size={22} toggle={setIsOpen} toggled={isOpen} />
        </div>
      </div>
    </div>
  );
}

export default Nav;
