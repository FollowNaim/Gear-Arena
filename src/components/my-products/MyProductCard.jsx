import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function MyProductCard({ product }) {
  const { _id, image, itemName, categoryName, description, price, rating } =
    product;
  const handleDelete = () => {
    const check = confirm("are your sure? you want to delete?");
    if (check) {
      toast.promise(
        fetch(`http://localhost:5000/products/${_id}`, {
          method: "DELETE",
        })
      ),
        {
          loading: "Equipment Deleting...",
          success: <b>Equipment Deleted!</b>,
          error: (err) => <b>{err.message || "Could not delete!"}</b>,
        };
    }
  };
  return (
    <Card className="flex flex-col">
      <CardHeader className="grow">
        <img
          className="h-52 rounded-md object-cover w-full"
          src={image}
          alt=""
        />
        <CardTitle className="text-2xl">{itemName}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center">
          <p className="border-r border-border pr-3">
            Category : {categoryName}
          </p>

          <p className="ml-3 bg-green-100 text-sm text-green-600 px-3">
            In Stock
          </p>
        </div>
        <div className="flex items-center mt-4">
          <p className="border-r border-border pr-3">Price : {price}$</p>

          <p className="pl-3">Rating : {rating}</p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center gap-4">
        <Link to={`/products/update/${_id}`}>
          <Button size="lg" className="">
            Update
          </Button>
        </Link>

        <Button
          onClick={handleDelete}
          size="lg"
          className="bg-red-100 text-red-700"
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
