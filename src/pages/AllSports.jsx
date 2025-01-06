import AllProducts from "@/components/product-table/AllProducts";
import SEO from "@/components/seo/SEO";
import Spinner from "@/components/spinner/Spinner";
import { useEffect, useState } from "react";

function AllSports() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return <Spinner />;
  console.log(products);
  return (
    <div>
      <SEO title={"All-Sports | Gear Arena"} />
      <AllProducts products={products} setProducts={setProducts} />
    </div>
  );
}

export default AllSports;
