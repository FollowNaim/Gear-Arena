import map from "@/assets/about-us/map.jpeg";
import { Link } from "react-router-dom";
import SectionTitle from "../animation/SectionTitle";
import { Button } from "../ui/button";
import SmallCards from "./SmallCards";
function WorldWide() {
  return (
    <div className="px-4 container">
      <div>
        <h3 className="text-3xl font-bold">
          <SectionTitle>
            {" "}
            Your Trusted Sports Partner <br />
            <span className="text-destructive mt-3 block">
              Across the Globe
            </span>
          </SectionTitle>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <SmallCards head={"90%"} text={"Repeated Clients"} />
          <SmallCards head={"40+"} text={"Countries"} />
          <SmallCards head={"8+"} text={"Sectors"} />
          <SmallCards head={"200+"} text={"Regular Seller"} />
        </div>
      </div>
      <div className="grid md:grid-cols-12 items-center mt-14">
        <div className="col-span-5 mt-5 md:mt-0 pr-6">
          <p>
            {" "}
            From the energetic streets of bustling cities to the tranquil beauty
            of serene landscapes, our commitment knows no borders. Our reach
            extends across continents, delivering not just world-class sports
            gear but also the promise of quality, unmatched reliability, and
            exceptional performance to athletes in every corner of the planet,
            empowering their journey to greatness.
          </p>
          <p className="mt-8 mb-2">
            Gear Up,{" "}
            <span className="text-destructive">No Matter Where You Are –</span>{" "}
          </p>
          <Link to={"/all-equipments"}>
            <Button className="mt-4">Explore Our Collection Now!</Button>
          </Link>
        </div>
        <div className="col-span-7 order-first md:order-none">
          <img className="ml-auto" src={map} alt="" />
        </div>
      </div>
    </div>
  );
}

export default WorldWide;
