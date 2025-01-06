import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import Product from "../home-products/Product";

export default function AllProducts({ products, setProducts }) {
  const [selectVal, setSelectVal] = useState("");
  console.log(products);
  useEffect(() => {
    fetch(`https://geararena-server.vercel.app/products?sort=${selectVal}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [selectVal]);
  return (
    <div className="container px-4 mb-10 mt-20 ">
      <div className="w-[180px] ml-auto pb-1">
        <Select onValueChange={(v) => setSelectVal(v)}>
          <SelectTrigger>
            <SelectValue
              className="w-[180px]"
              placeholder="Select a sort method"
            ></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sorting</SelectLabel>
              <SelectItem value="ascending">Ascending</SelectItem>
              <SelectItem value="descending">Descending</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {products?.map((product) => {
          return <Product product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
}
