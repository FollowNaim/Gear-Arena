import Tables from "@/components/product-table/Tables";
import { useLoaderData } from "react-router-dom";

function AllSports() {
  const products = useLoaderData();
  return (
    <div>
      <Tables products={products} />
    </div>
  );
}

export default AllSports;
