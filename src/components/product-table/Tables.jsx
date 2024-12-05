import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function Tables({ products, setProducts }) {
  const [selectVal, setSelectVal] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/products-sorted?sort=${selectVal}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, [selectVal]);
  return (
    <div className="container px-4 mt-4 mb-10">
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
      <Table>
        <TableCaption>A list of all products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Rating</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Stock Status</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map(
            (
              {
                _id,
                image,
                itemName,
                categoryName,
                description,
                price,
                rating,
                stockStatus,
                processingTime,
              },
              id
            ) => (
              <TableRow key={_id}>
                <TableCell className="font-medium">{id + 1}</TableCell>
                <TableCell>{itemName}</TableCell>
                <TableCell>{categoryName}</TableCell>
                <TableCell className="text-right">{rating}</TableCell>
                <TableCell className="text-right">${price}</TableCell>
                <TableCell className="text-right">
                  {stockStatus.availability}
                </TableCell>
                <TableCell className="text-right">
                  {stockStatus.quantity}
                </TableCell>
                <TableCell className="text-right">
                  <Link to={`/products/${_id}`}>
                    <Button>View Details</Button>
                  </Link>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
}
