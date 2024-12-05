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
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function UpdateEquipment() {
  const { user } = useContext(AuthContext);
  const [inStock, setInStock] = useState("instock");
  const navigate = useNavigate();
  const {
    _id,
    itemName,
    categoryName,
    image,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    userEmail,
    userName,
  } = useLoaderData();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const image = form.image.value;
    const description = form.description.value;
    const price = parseFloat(form.price.value);
    console.log(price);
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
    };

    toast
      .promise(
        fetch(`http://localhost:5000/products/${_id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(product),
        }),
        {
          loading: "Equipment updating...",
          success: <b>Equipment Updated!</b>,
          error: (err) => <b>{err.message || "Could not update!"}</b>,
        }
      )
      .then((res) => navigate("/all-sports"));
  };
  return (
    <div className="flex items-center justify-center mt-10 mb-14 px-4 md:px-6">
      <form className="w-full " onSubmit={handleSubmit}>
        <Card className="w-full max-w-lg mx-auto">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">Update Equipment</CardTitle>
            <CardDescription>
              Add a new user to the admin dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="grid gap-2 w-full">
                <Label htmlFor="name">Item Name</Label>
                <Input
                  required
                  name="name"
                  id="name"
                  defaultValue={itemName}
                  placeholder="Enter the item's name"
                />
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="category">Category Name</Label>
                <Input
                  required
                  defaultValue={categoryName}
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
                  defaultValue={image}
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
                  defaultValue={description}
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
                  defaultValue={price}
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
                  defaultValue={rating}
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
                  defaultValue={customization}
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
                  defaultValue={processingTime}
                  id="processing"
                  step="0.01"
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
                  defaultValue={stockStatus.availability || "instock"}
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
                  defaultValue={stockStatus.quantity}
                  type="number"
                  placeholder="Enter the available quantity."
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Update Equipment</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
