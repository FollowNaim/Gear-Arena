import MyProductCard from "@/components/my-products/MyProductCard";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext, useEffect, useState } from "react";

function MyEquipment() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
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
      });
  }, []);

  return (
    <div>
      <div className="container px-4">
        <div className="grid grid-cols-3 gap-4">
          {!products.length
            ? "No Data Available"
            : products.map((product) => (
                <MyProductCard
                  roductCard
                  key={product._id}
                  product={product}
                  setProducts={setProducts}
                  products={products}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default MyEquipment;
