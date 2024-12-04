import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Nav() {
  const { user, handleSignOut } = useContext(AuthContext);
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
        <div>
          <ul className="flex items-center gap-4">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/all-sports"}>
              <li>All Sports</li>
            </Link>
            <Link to={"/add-equipment"}>
              <li>Add Equiement</li>
            </Link>
            <Link to={"/my-equipment"}>
              <li>My Equipement</li>
            </Link>
          </ul>
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
  );
}

export default Nav;
