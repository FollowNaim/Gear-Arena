import Products from "@/components/home-products/Products";
import BoostCreativity from "@/components/home/Boost-Creativity";
import SEO from "@/components/seo/SEO";
import Sliders from "@/components/slider/Sliders";
import Spinner from "@/components/spinner/Spinner";
import WhyChoose from "@/components/why-choose/WhyChoose";
import WorldWide from "@/components/world-wide/WorldWide";
import { useEffect, useState } from "react";
import AboutUs from "../components/about-us/AboutUs";

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://geararena-server.vercel.app/products?limit=8")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return <Spinner />;
  return (
    <div className="mb-16 mt-20">
      <SEO title={"Home | Gear Arena"} />
      {/* <Hero /> */}
      <Sliders />
      <AboutUs />
      <Products products={products} />
      <BoostCreativity />
      <WhyChoose />
      <WorldWide />
    </div>
  );
}

export default Home;
