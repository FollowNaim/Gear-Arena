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

function Product({ product }) {
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
      <CardFooter>
        <Link to={`/products/${_id}`}>
          <Button className="">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default Product;
