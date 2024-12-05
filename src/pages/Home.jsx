import Products from "@/components/home-products/Products";
import Sliders from "@/components/slider/Sliders";
import WhyChoose from "@/components/why-choose/WhyChoose";
import WorldWide from "@/components/world-wide/WorldWide";
import { useLoaderData } from "react-router-dom";
import AboutUs from "../components/about-us/AboutUs";

function Home() {
  const products = useLoaderData();
  return (
    <div className="mb-16 mt-10">
      {/* <Hero /> */}
      <Sliders />
      <AboutUs />
      <Products products={products} />
      <WhyChoose />
      <WorldWide />
    </div>
  );
}

export default Home;
