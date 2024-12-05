import aboutus from "@/assets/about-us.png";
import five from "@/assets/why-choose/five.png";
import four from "@/assets/why-choose/four.png";
import one from "@/assets/why-choose/one.png";
import peep from "@/assets/why-choose/peep1.png";
import six from "@/assets/why-choose/six.png";
import three from "@/assets/why-choose/three.png";
import two from "@/assets/why-choose/two.png";
import { Button } from "../ui/button";
function WhyChoose() {
  return (
    <div className="py-10">
      <div
        className="container bg-contain bg-right-top px-4 py-10"
        style={{ backgroundImage: `url('${aboutus}')` }}
      >
        <div className=" flex justify-between flex-col-reverse md:flex-row items-center px-4">
          <div className="max-w-md">
            <h3 className="text-3xl font-bold">
              Why <span className="text-destructive">Choose Us ?</span>
            </h3>
            <p className="text-muted-foreground/90 mt-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate ea sed ex sit commodi ut itaque! Animi aperiam vero
              molestiae dolorem, numquam, temporibus rerum esse labore minus
              ullam natus eveniet.
            </p>
          </div>
          <div>
            <img className="w-40 mb-8 md:mb-0" src={peep} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-14">
          <div className="flex pb-8 flex-col md:border-r border-black border-b p-4">
            <img className="w-8 mb-2" src={one} alt="" />{" "}
            <h3 className="mt-4 text-2xl font-semibold">
              Superior <span className="text-destructive">Quality</span>{" "}
              Products
            </h3>
            <p className="text-muted-foreground/90 mt-2">
              Our sports gear is designed using premium-grade materials and
              advanced manufacturing techniques, ensuring you get durable,
              long-lasting products that enhance your performance in every game.
            </p>
          </div>
          <div className="flex flex-col md:border-r border-black border-b p-4">
            <img className="w-8 mb-2" src={two} alt="" />
            <h3 className="mt-4 text-2xl font-semibold">
              <span className="text-destructive">Wide Range</span> of Choices
            </h3>
            <p className="text-muted-foreground/90 mt-2">
              Explore a comprehensive collection of sports equipment tailored
              for athletes at every level, from beginners taking their first
              steps to seasoned professionals aiming for peak performance.
            </p>
          </div>
          <div className="flex flex-col border-black border-b p-4">
            <img className="w-8 mb-2" src={three} alt="" />
            <h3 className="mt-4 text-2xl font-semibold">
              <span className="text-destructive">Competitive</span> Pricing
            </h3>
            <p className="text-muted-foreground/90 mt-2">
              We believe top-notch sports gear should be accessible to all,
              which is why we offer high-performance products at competitive
              prices, giving you the best value for your money.
            </p>
          </div>
          <div className="flex flex-col md:border-r border-b md:border-b-0  border-black  p-4">
            <img className="w-8 mb-2 mt-6" src={four} alt="" />
            <h3 className="mt-4 text-2xl  font-semibold">
              <span className="text-destructive">Fast & Reliable</span> Shipping
            </h3>
            <p className="text-muted-foreground/90 mt-2">
              Enjoy fast, secure, and hassle-free shipping that ensures your
              gear reaches you in pristine condition, so you can focus on your
              game without unnecessary delays.
            </p>
          </div>
          <div className="flex flex-col md:border-r border-b md:border-b-0  border-black  p-4">
            <img className="w-8 mb-2 mt-6" src={five} alt="" />
            <h3 className="mt-4 text-2xl font-semibold">
              <span className="text-destructive">Trusted</span> by Athletes
            </h3>
            <p className="text-muted-foreground/90 mt-2">
              Join thousands of satisfied athletes who rely on us for their
              sports essentials. Our reputation for quality and trust has made
              us a preferred partner for athletes worldwide.
            </p>
          </div>
          <div className="flex flex-col  p-4 ">
            <img className="w-8 mb-2 mt-6" src={six} alt="" />
            <h3 className="mt-4 text-2xl font-semibold">
              <span className="text-destructive">Exceptional</span> Customer
              Support
            </h3>
            <p className="text-muted-foreground/90 mt-2">
              Our dedicated customer support team is always ready to assist you
              with product inquiries, orders, or any concerns, ensuring a
              seamless shopping experience every step of the way.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-5">
          <Button>Explore Our Collection</Button>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
