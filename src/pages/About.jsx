import about2 from "@/assets/about-page/about-2.jpg";
import about4 from "@/assets/about-page/about-4.jpg";
import about3 from "@/assets/about-page/about-3.png";
import AvatarGroupMaxAvatarDemo from "@/components/ui/avatar-group";
import { Button } from "@/components/ui/button";
function About() {
  return (
    <div className="mt-20 mb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8">
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
          <div className="pr-6 flex flex-col">
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
              <div className="mt-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quia nostrum eaque error hic dicta iste, quas tenetur ullam
                  tempora voluptates iure ex repellat, maiores unde animi
                  delectus sint. Perspiciatis.
                </p>
              </div>
              <div className="flex items-center justify-between mt-8">
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
            <div className="mt-auto">
              <Button size="lg">Connect with us</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
