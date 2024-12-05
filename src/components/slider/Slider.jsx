import bgleft from "@/assets/bg-left.jpg";
import { Button } from "../ui/button";
export default function Slider({ heading, bold, description, image }) {
  return (
    <div className=" px-4">
      <div
        className="container grid grid-cols-1 md:grid-cols-2 justify-between items-center bg-black/80 bg-blend-overlay text-white rounded-xl"
        style={{ backgroundImage: `url(${bgleft})` }}
      >
        <div className="col-span-1 py-20 pl-10">
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
        <div className="w-full h-full order-first md:order-none">
          <img
            className="ml-auto z-50 col-span-1 rounded-t-xl md:rounded-t-none object-cover h-72  md:rounded-r-xl w-full md:h-full bg-cover bg-no-repeat order-first md:order-none"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
