import about2 from "@/assets/about-page/about-2.jpg";
import about3 from "@/assets/about-page/about-3.png";
import about4 from "@/assets/about-page/about-4.jpg";
import MeetTeam from "@/components/about-us/meet-team";
import AvatarGroupMaxAvatarDemo from "@/components/ui/avatar-group";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="mt-20 mb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <div className="mb-6">
              <h4 className="text-3xl font-bold">
                <p className="text-base font-normal pb-3">
                  At Gear Arena, we are more than just an equipment store—
                </p>{" "}
                we are your{" "}
                <span className="text-destructive">trusted partner</span> in
                achieving your project goals with top-quality tools and
                machinery.
              </h4>
            </div>
            <div>
              <img
                className="w-full h-80 object-cover rounded-md"
                src={about2}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grow">
              <div className="flex items-center gap-4">
                <img
                  className="w-1/2 h-40 object-cover rounded-md"
                  src={about3}
                  alt=""
                />
                <img
                  className="w-1/2 h-40 object-cover rounded-md"
                  src={about4}
                  alt=""
                />
              </div>
              <div className="mt-6 pr-6 ">
                <p>
                  At Gear Arena, we specialize in delivering high-quality tools
                  and equipment designed to meet your needs. With a focus on
                  reliability and innovation, we are dedicated to empowering
                  individuals and businesses to achieve their goals with
                  confidence.
                </p>
              </div>
              <div className="flex items-center justify-between mt-4 pr-6 ">
                <div>
                  <p className="font-bold text-xl">10K+</p>
                  <p>Equipment Sold</p>
                </div>
                <div>
                  <p className="font-semibold text-xl">4+</p>
                  <p>Global Store</p>
                </div>
                <div>
                  <p className="font-semibold text-xl">300+</p>
                  <p>Global Seller</p>
                </div>
                <div>
                  <p className="font-semibold text-xl">4.5+</p>
                  <p>Total Ratings</p>
                </div>
              </div>
              <div className="flex justify-start items-center mt-6">
                <p className="font-medium text-lg mr-4">Our Specialist - </p>
                <AvatarGroupMaxAvatarDemo />
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <Link to={"/contact"}>
                <Button size="lg">connect with us</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <MeetTeam />
        </div>
      </div>
    </div>
  );
}

export default About;
