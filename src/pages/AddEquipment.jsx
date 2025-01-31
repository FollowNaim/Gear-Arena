import fillAnimation from "@/assets/animation/fill.json";
import SEO from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AuthContext } from "@/provider/AuthProvider";
import Lottie from "lottie-react";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddEquipment() {
  const { user } = useContext(AuthContext);
  const [inStock, setInStock] = useState("instock");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const image = form.image.value;
    const description = form.description.value;
    const price = parseFloat(form.price.value);
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing = form.processing.value;
    const available = form.available.value;
    const product = {
      itemName: name,
      categoryName: category,
      image,
      description,
      price,
      rating,
      customization,
      processingTime: processing,
      stockStatus: { availability: inStock, quantity: available },
      userEmail: user.email,
      userName: user.displayName || "N/A",
    };
    toast
      .promise(
        fetch("https://geararena-server.vercel.app/products", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(product),
        }),
        {
          loading: "Equipment adding...",
          success: <b>Equipment added!</b>,
          error: (err) => <b>{err.message || "Could not add!"}</b>,
        }
      )
      .then((res) => navigate("/all-equipments"));
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto items-center justify-center mt-20 mb-14 px-4 md:px-6">
      <SEO title={"Add Equipment | Gear Arena"} />
      <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
        <Card className="w-full max-w-lg mx-auto">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">Add Equipment</CardTitle>
            <CardDescription>
              Expand your collection with the latest gear additions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="grid gap-2 w-full">
                <Label>User Name</Label>
                <Input disabled value={user?.displayName} />
              </div>
              <div className="grid gap-2 w-full">
                <Label>User Email</Label>
                <Input disabled value={user?.email} />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="grid gap-2 w-full">
                <Label htmlFor="name">Item Name</Label>
                <Input
                  name="name"
                  id="name"
                  placeholder="Enter the item's name"
                />
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="category">Category Name</Label>
                <Input
                  required
                  name="category"
                  id="category"
                  type="text"
                  placeholder="Enter the category name."
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="grid gap-2 w-full">
                <Label htmlFor="image">Image</Label>
                <Input
                  required
                  name="image"
                  id="image"
                  type="url"
                  placeholder="Enter the item's photo URL"
                />
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="description">Description</Label>
                <Input
                  required
                  name="description"
                  id="description"
                  type="text"
                  placeholder="Enter the description."
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="grid gap-2 w-full">
                <Label htmlFor="price">Price (in dollar)</Label>
                <Input
                  required
                  name="price"
                  step="0.01"
                  id="price"
                  type="number"
                  placeholder="Enter the item's price"
                />
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="rating">Rating</Label>
                <Input
                  required
                  step="0.01"
                  name="rating"
                  id="rating"
                  type="number"
                  placeholder="Enter the Rating."
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="grid gap-2 w-full">
                <Label htmlFor="customization">Customization</Label>
                <Input
                  required
                  name="customization"
                  id="customization"
                  type="text"
                  placeholder="Enter the item's customization."
                />
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="processing">Processing Time (in day)</Label>
                <Input
                  required
                  name="processing"
                  id="processing"
                  type="number"
                  placeholder="Enter the processing time."
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="grid gap-2 w-full">
                <Label htmlFor="role">Stock Status</Label>
                <Select
                  id="status"
                  onValueChange={(val) => setInStock(val)}
                  defaultValue="instock"
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="instock">In Stock</SelectItem>
                    <SelectItem value="outstock">Out Stock</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="available">Available Quantity</Label>

                <Input
                  required
                  name="available"
                  id="available"
                  type="number"
                  placeholder="Enter the available quantity."
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Add Equipment</Button>
          </CardFooter>
        </Card>
      </form>
      <div className="w-[300px] h-[300px] mx-auto col-span-1 hidden md:block">
        <Lottie
          width={300}
          height={300}
          animationData={fillAnimation}
          autoplay={true}
          loop={true}
        />
      </div>
    </div>
  );
}
