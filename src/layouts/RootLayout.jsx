import Footer from "@/components/navigation/Footer";
import Nav from "@/components/navigation/Nav";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="font-lato">
      <nav>
        <Nav />
      </nav>
      <div className="my-10">
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
