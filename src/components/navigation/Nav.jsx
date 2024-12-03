import { Button } from "../ui/button";

function Nav() {
  return (
    <div>
      <div className="container flex justify-between items-center py-2 px-4 border-b border-border">
        <div>
          <h1 className="font-semibold text-2xl">GearArena</h1>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <li>Home</li>
            <li>All Sports</li>
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
