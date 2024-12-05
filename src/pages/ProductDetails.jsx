import check from "@/assets/check.png";
import remove from "@/assets/remove.png";
import { BiCategory } from "react-icons/bi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuBadgeDollarSign } from "react-icons/lu";
import { MdOutlineStarBorder } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
function ProductDetails() {
  const {
    _id,
    image,
    itemName,
    categoryName,
    customization,
    description,
    price,
    rating,
    stockStatus,
    processingTime,
  } = useLoaderData();
  return (
    <div>
      <div className="container md:pr-4 grid md:grid-cols-2 justify-center items-center gap-4 bg-muted my-10">
        <div className="h-full w-full">
          <img className="w-full h-full" src={image} alt="" />
        </div>
        <div className="max-w-sm ml-10 py-10">
          <h3 className="text-4xl font-bold">{itemName}</h3>
          <p className="text-muted-foreground pt-3">{description}</p>
          <div className=" rounded-md mt-5">
            <div className="flex items-center border border-destructive rounded-t-md">
              <p className="border-r flex items-center flex-wrap gap-2 border-destructive p-3 w-44">
                <BiCategory /> :{" "}
                <span className="text-primary/90">{categoryName}</span>
              </p>
              <p className="pl-6 flex items-center gap-2 border-destructive">
                <LuBadgeDollarSign /> :{" "}
                <span className="text-primary/90">{price}$</span>
              </p>
            </div>
            <div className="flex items-center border-x border-b border-destructive rounded-b-md">
              <p className="border-r flex items-center gap-2 border-destructive p-3 w-44">
                <MdOutlineStarBorder /> :{" "}
                <span className="text-primary/90">{rating}</span>
              </p>
              <p className="pl-6 flex items-center gap-2 border-destructive">
                <LiaShippingFastSolid /> :{" "}
                <span className="text-primary/90">{processingTime} days</span>{" "}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <div className="border-y py-2 border-dashed border-destructive/50 flex items-center gap-4">
              <h3 className="text-destructive">Customization : </h3>
              <div className="flex items-center gap-2 text-primary/90">
                <p> {customization}</p>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-8">
            <p>Processing Time : </p>{" "}
            <p>
              <span className="text-primary/90">{processingTime} days</span>
            </p>
          </div>
          <div className="mt-6 flex items-center gap-8">
            <p className=" w-fit rounded-3xl flex items-center gap-2">
              {stockStatus.availability === "instock" ? (
                <>
                  {" "}
                  <img className="w-6" src={check} alt="" /> In Stock
                </>
              ) : (
                <>
                  {" "}
                  <img className="w-6" src={remove} alt="" /> Out of Stock
                </>
              )}
            </p>
            <p>
              <h4>
                only{" "}
                <span className="text-destructive">
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
