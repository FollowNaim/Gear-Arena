import slide1 from "@/assets/yoga.png";
import { Button } from "../ui/button";
function Hero() {
  return (
    <div className=" px-4">
      <div className="container border grid grid-cols-2 justify-between items-center bg-slate-950 text-white rounded-xl">
        <div className="py-20 md:pl-10">
          <h4 className="font-semibold text-2xl lg:text-6xl leading-tight ">
            Never Low Your <br /> Standard
          </h4>
          <p className="pt-2 text-muted/60">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo optio
            <br />
            distinctio laboriosam hic cupiditate dicta voluptates omnis
          </p>
          <div className="mt-5">
            <Button className="bg-white text-black" size="lg">
              Buy Now
            </Button>
          </div>
        </div>
        <div
          className="z-50 rounded-r-xl w-full h-full bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${slide1})` }}
        >
          {/* <img className="ml-auto" src={slide1} alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
