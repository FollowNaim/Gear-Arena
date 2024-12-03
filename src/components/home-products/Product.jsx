import photo from "@/assets/p1.jpg";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

function Product() {
  return (
    <Card>
      <CardHeader>
        <img
          className="h-52 rounded-md object-cover w-full"
          src={photo}
          alt=""
        />
        <CardTitle className="text-2xl">Soccer Ball</CardTitle>
        <CardDescription>
          Premium quality soccer ball for professional games.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center">
          <p className="border-r border-border pr-3">Category : Football</p>

          <p className="ml-3 bg-green-100 text-sm text-green-600 px-3">
            In Stock
          </p>
        </div>
        <div className="flex items-center mt-4">
          <p className="border-r border-border pr-3">Price : 40$</p>

          <p className="pl-3">Rating : 4.5</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="">View Details</Button>
      </CardFooter>
    </Card>
  );
}

export default Product;
