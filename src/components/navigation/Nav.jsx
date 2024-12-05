import { AuthContext } from "@/provider/AuthProvider";
import { themeContext } from "@/provider/ThemeProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";

function Nav() {
  const { user, handleSignOut } = useContext(AuthContext);
  const { theme, setTheme } = useContext(themeContext);
  const handleLogout = () => {
    toast.promise(handleSignOut(), {
      loading: "Signing Out...",
      success: <b>Signout Succeessfull!</b>,
      error: <b>Could not signout.</b>,
    });
  };
  return (
    <div>
      <div className="container flex justify-between items-center py-2 px-4 border-b border-border">
        <div>
          <Link to={"/"}>
            <h1 className="font-semibold text-2xl">GearArena</h1>
          </Link>
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center gap-6" id="navlinks">
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/all-sports"}>
              <li>All Sports</li>
            </NavLink>
            <NavLink to={"/add-equipment"}>
              <li>Add Equiement</li>
            </NavLink>
            <NavLink to={"/my-equipment"}>
              <li>My Equipement</li>
            </NavLink>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div className="mr-2 cursor-pointer" onClick={() => setTheme(!theme)}>
            {theme ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
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
          {user && (
            <div className="flex gap-4 items-center">
              <p title={user.displayName || "N/A"}>
                <img
                  className="w-10 rounded-full"
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
      </div>
    </div>
  );
}

export default Nav;
