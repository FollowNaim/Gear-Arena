import { Button } from "../ui/button";
import bgleft from "@/assets/bg-left.jpg";
export default function Slider({ heading, bold, description, image }) {
  return (
    <div className=" px-4">
      <div
        className="container grid grid-cols-2 justify-between items-center bg-black/80 bg-blend-overlay text-white rounded-xl"
        style={{ backgroundImage: `url(${bgleft})` }}
      >
        <div className="py-20 pl-10">
          <h4 className="font-semibold text-5xl leading-tight ">
            {heading} <br /> <span className="text-[#3B82F6]">{bold}</span>
          </h4>
          <p className="pt-2 text-muted/60">{description}</p>
          <div className="mt-5">
            <Button className="bg-white text-black" size="lg">
              Buy Now
            </Button>
          </div>
        </div>
        <div
          className="z-50 rounded-r-xl w-full h-full bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* <img className="ml-auto" src={slide1} alt="" /> */}
        </div>
      </div>
    </div>
  );
}
