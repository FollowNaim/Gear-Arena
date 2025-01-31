import Footer from "@/components/navigation/Footer";
import Nav from "@/components/navigation/Nav";
import { Toaster } from "react-hot-toast";
import { Outlet, ScrollRestoration } from "react-router-dom";

function RootLayout() {
  return (
    <div className="font-lato">
      <ScrollRestoration />
      <Toaster />
      <nav>
        <Nav />
      </nav>
      <div className="">
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
