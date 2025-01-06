import sorryAnimation from "@/assets/animation/sorry.json";
import MyProductCard from "@/components/my-products/MyProductCard";
import SEO from "@/components/seo/SEO";
import Spinner from "@/components/spinner/Spinner";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/provider/AuthProvider";
import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyEquipment() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/my-equipment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="mt-20 mb-10">
      <SEO title={"My Equipment | Gear Arena"} />
      <div className="container px-4">
        {!products.length ? (
          <div className="flex h-[60vh] flex-col justify-center items-center">
            <div className="w-[300px] mx-auto">
              <Lottie
                width={300}
                height={300}
                animationData={sorryAnimation}
                autoplay={true}
                loop={true}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4
                className="text-center text-3xl font-bold mt-6
                "
              >
                Sorry! You have nothing yet!
              </h4>
              <p className="dark:text-white/70 text-center text-black/70 mt-3">
                You can always start by adding some equipment.
              </p>

              <div className="flex items-center justify-center mt-6">
                <Link to={"/add-equipment"}>
                  <Button className="">Add Equipment</Button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <MyProductCard
                key={product._id}
                roductCard
                product={product}
                setProducts={setProducts}
                products={products}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyEquipment;
