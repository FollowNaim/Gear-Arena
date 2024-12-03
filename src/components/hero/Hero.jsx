import slide1 from "@/assets/slide-1.png";
import { Button } from "../ui/button";
function Hero() {
  return (
    <div className="bg-[#F6F6F6] ">
      <div className="container pl-4 grid grid-cols-2 justify-between items-center">
        <div>
          <h4 className="font-semibold text-6xl leading-tight">
            Never Low Your <br /> Standard
          </h4>
          <p className="pt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo optio{" "}
            <br />
            distinctio laboriosam hic cupiditate dicta voluptates omnis{" "}
          </p>
          <div className="mt-5">
            <Button>Buy Now</Button>
          </div>
        </div>
        <div className="z-50 bg-[#E9EDD5]">
          <img className="ml-auto" src={slide1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
