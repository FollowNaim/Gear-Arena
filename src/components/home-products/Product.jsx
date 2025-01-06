import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

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
    <div className="border border-border rounded-md flex flex-col">
      <div>
        <img
          src={image}
          className="h-40 w-full object-cover rounded-t-md"
          alt=""
        />
      </div>
      <div className="p-4 flex flex-col grow">
        <div className="grow">
          <h2 className="text-xl font-semibold">{itemName}</h2>
          <p className="text-muted-foreground pt-2 line-clamp-2 overflow-hidden text-ellipsis">
            {description}
          </p>
          <p className="pt-2 flex items-center gap-2">
            <CiBadgeDollar /> {price}
          </p>
        </div>
        <div className="mt-4">
          <Link to={`/products/${_id}`}>
            <Button>See More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
