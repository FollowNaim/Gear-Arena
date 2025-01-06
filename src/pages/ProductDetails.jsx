import check from "@/assets/check.png";
import remove from "@/assets/remove.png";
import SectionTitle from "@/components/animation/SectionTitle";
import SEO from "@/components/seo/SEO";
import Spinner from "@/components/spinner/Spinner";
import { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuBadgeDollarSign } from "react-icons/lu";
import { MdOutlineStarBorder } from "react-icons/md";
import { useParams } from "react-router-dom";
function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://geararena-server.vercel.app/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return <Spinner />;
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
  } = product;
  const cust = customization.split(",");
  console.log(customization, cust);
  return (
    <div>
      <div className="container md:pr-4 grid md:grid-cols-2 justify-center items-center gap-4 bg-muted dark:bg-[#141414] mt-20 mb-10">
        <SEO title={itemName + " " + "| Gear Arena"} />
        <div className="h-full w-full">
          <img className="w-full h-full object-cover" src={image} alt="" />
        </div>
        <div className="max-w-sm md:ml-10 px-4 md:px-0 py-10">
          <h3 className="text-4xl font-bold">
            <SectionTitle>{itemName}</SectionTitle>
          </h3>
          <p className="text-muted-foreground pt-3">{description}</p>
          <div className="rounded-md mt-5">
            <div className="flex items-center border border-destructive w-full rounded-t-md">
              <p className="border-r flex items-center flex-wrap gap-2 border-destructive p-3 max-w-44 w-1/2">
                <BiCategory /> :{" "}
                <span className="text-primary/90">{categoryName}</span>
              </p>
              <p className="pl-6 flex items-center gap-2 border-destructive">
                <LuBadgeDollarSign /> :{" "}
                <span className="text-primary/90">{price}$</span>
              </p>
            </div>
            <div className="flex items-center border-x border-b border-destructive rounded-b-md">
              <p className="border-r flex items-center gap-2 border-destructive p-3 max-w-44  w-1/2">
                <MdOutlineStarBorder /> :{" "}
                <span className="text-primary/90">{rating}</span>
              </p>
              <p className="flex pl-6 items-center gap-2 border-destructive">
                <LiaShippingFastSolid /> :{" "}
                <span className="text-primary/90">{processingTime} days</span>{" "}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <div className="border-y py-2 border-dashed border-destructive/50 flex flex-col gap-4">
              <h3 className="text-destructive">Customization : </h3>
              <div
                className="flex flex-col
                gap-2 text-primary/90 mb-4"
              >
                {cust.map((c, i) => (
                  <p key={i}>
                    <span className="text-destructive">({i + 1})</span>{" "}
                    <span className="ml-2">{c}</span>
                  </p>
                ))}
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
              {stockStatus?.availability === "instock" ? (
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
                  {stockStatus?.quantity} items
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
