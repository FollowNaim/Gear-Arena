import check from "@/assets/check.png";
import photo from "@/assets/p1.jpg";
import { useLoaderData } from "react-router-dom";
function ProductDetails() {
  const {
    _id,
    image,
    itemName,
    categoryName,
    description,
    price,
    rating,
    stockStatus,
    processingTime,
  } = useLoaderData();
  return (
    <div>
      <div className="container pr-4 grid grid-cols-2 justify-center items-center gap-4 bg-muted">
        <div
          className={`h-full w-ful bg-cover bg-no-repeat`}
          style={{ backgroundImage: `url('${image}')` }}
        >
          {/* <img src={photo} alt="" /> */}
        </div>
        <div className="max-w-sm ml-10 py-10">
          <h3 className="text-4xl font-bold">{itemName}</h3>
          <p className="text-muted-foreground pt-3">{description}</p>
          <div className=" rounded-md mt-5">
            <div className="flex items-center border border-accent rounded-t-md">
              <p className="border-r border-accent p-3 w-44">
                Category : {categoryName}
              </p>
              <p className="pl-6 border-accent">Price : {price}$</p>
            </div>
            <div className="flex items-center border-x border-b border-accent rounded-b-md">
              <p className="border-r border-accent p-3 w-44">
                Rating : {rating}
              </p>
              <p className="pl-6 border-accent">Price : {price}$</p>
            </div>
          </div>
          <div className="mt-6">
            <div className="border-y py-2 border-dashed border-accent/50 flex items-center gap-4">
              <h3 className="text-accent">Customization : </h3>
              <div className="flex items-center gap-2">
                <p> Team Colors</p>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-8">
            <p>Processing Time : </p> <p>{processingTime}</p>
          </div>
          <div className="mt-6 flex items-center gap-8">
            <p className=" w-fit rounded-3xl flex items-center gap-2">
              <img className="w-6" src={check} alt="" /> In Stock
            </p>
            <p>
              <h4>
                only{" "}
                <span className="text-accent">
                  {stockStatus.quantity} items
                </span>{" "}
                left!
              </h4>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
