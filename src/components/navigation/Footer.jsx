import footer1 from "@/assets/footer1.jpg";
import footer2 from "@/assets/footer2.jpg";
import footer3 from "@/assets/footer3.jpg";
import footer4 from "@/assets/footer4.jpg";
import footer5 from "@/assets/footer5.jpg";
import footer6 from "@/assets/footer6.jpg";
import payPhoto from "@/assets/payment.png";
import { Linkedin } from "lucide-react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="border-t border-dashed border-black/30">
      <div className="container px-4 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 pt-14 pb-8">
        <div className="md:col-span-3 md:pr-20 flex flex-col">
          <h4 className="text-2xl font-bold">
            Gear <span className="text-destructive">Arena</span>
          </h4>
          <p className="text-muted-foreground mt-3">
            span Delivering premium sports gear to elevate your game and inspire
            greatness.
          </p>
          <div className="mt-4">
            <p className="flex items-center gap-3">
              <MdOutlineDateRange />{" "}
              <span className="text-muted-foreground/90">
                Mon - Fri: 9AM - 10PM
              </span>
            </p>
            <p className="flex items-center gap-3 mt-2">
              <MdOutlineDateRange />{" "}
              <span className="text-muted-foreground/90">
                Sat-Sun: 10AM-8PM
              </span>
            </p>
          </div>
          <img className="mt-4" src={payPhoto} alt="" />
        </div>
        <div className="md:col-span-2">
          <h4>Quick Links</h4>
          <div className="mt-4 text-muted-foreground/70">
            <ul className="flex flex-col gap-2">
              <Link to={"/"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Home
                </li>
              </Link>

              <Link to={"/all-equipments"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Equipments
                </li>
              </Link>
              <Link to={"/about"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  About Us
                </li>
              </Link>
              <Link to={"/contact"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="md:col-span-2">
          <h4>Essential Links</h4>
          <div className="mt-4 text-muted-foreground/70">
            <ul className="flex flex-col gap-2">
              <Link to={"/auth/signin"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Signin
                </li>
              </Link>
              <Link to={"/auth/signup"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Register
                </li>
              </Link>
              <Link to={"/my-equipments"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  My Equipments
                </li>
              </Link>
              <Link to={"/add-equipment"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Add Equipment
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="md:col-span-2">
          <h4>Follow us on</h4>
          <div className="mt-4 text-muted-foreground/70">
            <ul className="flex flex-col gap-2">
              <Link to={"https://facebook.com"} target="_blank">
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Facebook
                </li>
              </Link>
              <Link to={"https://youtube.com"} target="_blank">
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Youtube
                </li>
              </Link>
              <Link to={"https://instagram.com"} target="_blank">
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Instagram
                </li>
              </Link>
              <Link to={"https://linkedin.com"} target="_blank">
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Linkedin
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="md:col-span-3">
          <h4>Our Instagram</h4>
          <div className="grid grid-cols-3 gap-3 mt-6">
            <img className="rounded-xl" src={footer1} alt="" />
            <img className="rounded-xl" src={footer2} alt="" />
            <img className="rounded-xl" src={footer3} alt="" />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-3">
            <img className="rounded-xl" src={footer4} alt="" />
            <img className="rounded-xl" src={footer5} alt="" />
            <img className="rounded-xl" src={footer6} alt="" />
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row gap-5 md:gap-0 justify-between items-center">
          <p>Gear Arena © 2024 Developed by Naim</p>
          <div className="flex items-center gap-4">
            <a target="_blank" href="https://github.com/follownaim">
              <FaGithub
                className="hover:text-black text-black dark:text-white"
                size={22}
              />
            </a>
            <a target="_blank" href="https://linkedin.com/in/ataurrahmannaim">
              <Linkedin className="hover:text-black" size={22} color="blue" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
