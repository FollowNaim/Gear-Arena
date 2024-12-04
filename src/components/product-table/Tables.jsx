import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function Tables({ products }) {
  return (
    <div className="container px-4">
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
