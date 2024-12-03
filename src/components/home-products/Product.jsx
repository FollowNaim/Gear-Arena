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
  const { _id, image, itemName, categoryName, description, price, rating } =
    product;
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
      <CardFooter>
        <Link to={`/products/${_id}`}>
          <Button className="">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default Product;
