import errorAnimation from "@/assets/animation/error.json";
import SEO from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center container mx-auto px-6">
      <SEO title={"Error - 404 | Gear Arena"} />
      <div className="w-[300px] h-[300px] mx-auto col-span-1">
        <Lottie
          width={300}
          height={300}
          animationData={errorAnimation}
          autoplay={true}
          loop={true}
        />
      </div>
      <Link to={"/"}>
        <Button className="mt-6" size="lg">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}

export default Error404;
