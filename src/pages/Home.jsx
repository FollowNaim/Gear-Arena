import Products from "@/components/home-products/Products";
import Sliders from "@/components/slider/Sliders";
import WhyChoose from "@/components/why-choose/WhyChoose";
import { useLoaderData } from "react-router-dom";

function Home() {
  const products = useLoaderData();
  return (
    <div className="mb-16 mt-10">
      {/* <Hero /> */}
      <Sliders />
      <Products products={products} />
      <WhyChoose />
    </div>
  );
}

export default Home;
