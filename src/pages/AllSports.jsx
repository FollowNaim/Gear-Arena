import Tables from "@/components/product-table/Tables";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function AllSports() {
  const data = useLoaderData();
  const [products, setProducts] = useState(data || []);
  return (
    <div>
      <Tables products={products} setProducts={setProducts} />
    </div>
  );
}

export default AllSports;
