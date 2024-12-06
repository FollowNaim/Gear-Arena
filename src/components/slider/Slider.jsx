import bgleft from "@/assets/bg-left.jpg";
import SectionTitle from "../animation/SectionTitle";
import { Button } from "../ui/button";
export default function Slider({ heading, bold, description, image }) {
  return (
    <div className=" px-4">
      <div
        className="container border grid grid-cols-1 md:grid-cols-2 justify-between items-center bg-black/80 bg-blend-overlay text-white rounded-xl"
        style={{ backgroundImage: `url(${bgleft})` }}
      >
        <div className="col-span-1 py-20 md:pl-10 px-4 md:px-0">
          <h4 className="font-semibold text-3xl md:text-5xl leading-tight ">
            <SectionTitle>
              {heading} <br /> <span className="text-[#3B82F6]">{bold}</span>
            </SectionTitle>
          </h4>
          <p
            className="pt-3 md:pt-5
           text-muted/60 dark:text-white/70 md:pr-6 "
          >
            {description}
          </p>
          <div className="mt-6 md:mt-8">
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
