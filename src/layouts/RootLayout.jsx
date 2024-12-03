import Footer from "@/components/navigation/Footer";
import Nav from "@/components/navigation/Nav";
import { Outlet, ScrollRestoration } from "react-router-dom";

function RootLayout() {
  return (
    <div className="font-lato">
      <ScrollRestoration />
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
