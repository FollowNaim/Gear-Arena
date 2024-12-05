import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function MyProductCard({ product, setProducts, products }) {
  const {
    _id,
    image,
    itemName,
    categoryName,
    description,
    price,
    rating,
    stockStatus,
  } = product;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${_id}`, {
          method: "DELETE",
        }).then((res) => {
          {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            setProducts(products.filter((p) => p._id !== id));
          }
        });
      }
    });
  };
  return (
    <Card className="flex flex-col">
      <CardHeader className="grow">
        <img
          className="h-52 mb-3 rounded-md object-cover w-full"
          src={image}
          alt=""
        />
        <CardTitle className="text-2xl">{itemName}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center">
          <p className="border-r border-border pr-3">
            Category :{" "}
            <span className="text-muted-foreground/90">{categoryName}</span>
          </p>

          {stockStatus.availability === "instock" ? (
            <p className="ml-3 bg-green-100 text-sm text-green-600 px-3">
              In Stock
            </p>
          ) : (
            <p className="ml-3 bg-red-100 text-sm text-red-600 px-3">
              Out of Stock
            </p>
          )}
        </div>
        <div className="flex items-center mt-4">
          <p className="border-r border-border pr-3">
            Price : <span className="text-muted-foreground/90">{price}$</span>
          </p>

          <p className="pl-3">
            Rating : <span className="text-muted-foreground/90">{rating}</span>
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center gap-4">
        <Link to={`/products/update/${_id}`}>
          <Button size="lg" className="">
            Update
          </Button>
        </Link>

        <Button
          onClick={() => handleDelete(_id)}
          size="lg"
          className="border border-red-600 bg-transparent hover:bg-red-300 text-red-700"
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
