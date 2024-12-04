import footer1 from "@/assets/footer1.jpg";
import footer2 from "@/assets/footer2.jpg";
import footer3 from "@/assets/footer3.jpg";
import footer4 from "@/assets/footer4.jpg";
import footer5 from "@/assets/footer5.jpg";
import footer6 from "@/assets/footer6.jpg";
import payPhoto from "@/assets/payment.png";
import { MdOutlineDateRange } from "react-icons/md";
function Footer() {
  return (
    <div className="border-t border-dashed border-border">
      <div className="container px-4 grid grid-cols-12 pt-14 pb-8">
        <div className="col-span-3 pr-20 flex flex-col">
          <h4 className="text-2xl font-bold">Gear Arena</h4>
          <p className="text-muted-foreground mt-3">
            Sentiments two occasional affronting <br /> solicitude travelling
            and one contrasted fortune day
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
        <div className="col-span-2">
          <h4>Links</h4>
          <div className="mt-4 text-muted-foreground/70">
            <ul className="flex flex-col gap-2">
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="col-span-2">
          <h4>Links</h4>
          <div className="mt-4 text-muted-foreground/70">
            <ul className="flex flex-col gap-2">
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="col-span-2">
          <h4>Links</h4>
          <div className="mt-4 text-muted-foreground/70">
            <ul className="flex flex-col gap-2">
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="col-span-3">
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
        Gear Arena © 2024 Developed by Naim
      </div>
    </div>
  );
}

export default Footer;
