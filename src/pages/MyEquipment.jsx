import sorryAnimation from "@/assets/animation/sorry.json";
import SEO from "@/components/seo/SEO";
import Spinner from "@/components/spinner/Spinner";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AuthContext } from "@/provider/AuthProvider";
import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function MyEquipment() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("https://geararena-server.vercel.app/my-equipment", {
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
        fetch(`https://geararena-server.vercel.app/products/${id}`, {
          method: "DELETE",
        }).then(() => {
          {
            Swal.fire({
              title: "Deleted!",
              text: "Your Equipmenthas been deleted.",
              icon: "success",
            });
            setProducts(products.filter((p) => p._id !== id));
          }
        });
      }
    });
  };

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
          <div className="">
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="flex justify-end text-black">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product, i) => (
                  <TableRow key={product._id}>
                    <TableCell className="font-medium">{i + 1}</TableCell>
                    <TableCell>
                      <img
                        className="size-10 rounded-full object-cover"
                        src={product.image}
                        alt=""
                      />
                    </TableCell>
                    <TableCell>
                      <h4>{product.itemName}</h4>
                    </TableCell>
                    <TableCell>{product.categoryName}</TableCell>
                    <TableCell>{product.rating}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu modal={false}>
                        <DropdownMenuTrigger>
                          <IoEllipsisHorizontal />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mr-4">
                          <DropdownMenuLabel>My Equipment</DropdownMenuLabel>
                          <DropdownMenuSeparator></DropdownMenuSeparator>
                          <Link to={`/products/${product._id}`}>
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                          </Link>
                          <Link to={`/products/update/${product._id}`}>
                            <DropdownMenuItem>
                              Update Equipment
                            </DropdownMenuItem>
                          </Link>
                          <DropdownMenuItem
                            onClick={() => handleDelete(product._id)}
                          >
                            Delete Equipement
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyEquipment;
