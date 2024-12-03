import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Nav() {
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
            <li>My Equipement</li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <Button className="" variant="ghost">
            Login
          </Button>
          <Button>Register</Button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
