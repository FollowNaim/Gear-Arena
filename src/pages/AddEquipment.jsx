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

export default function AddEquipment() {
  return (
    <div className="flex items-center justify-center mt-10 px-4 md:px-6">
      <form className="w-full">
        <Card className="w-full max-w-lg mx-auto">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">Add Equipment</CardTitle>
            <CardDescription>
              Add a new user to the admin dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
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
                  name="image"
                  id="image"
                  type="url"
                  placeholder="Enter the item's photo URL"
                />
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="description">Description</Label>
                <Input
                  name="description"
                  id="description"
                  type="text"
                  placeholder="Enter the description."
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="grid gap-2 w-full">
                <Label htmlFor="price">Price</Label>
                <Input
                  name="price"
                  id="price"
                  type="text"
                  placeholder="Enter the item's price"
                />
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="rating">Rating</Label>
                <Input
                  name="rating"
                  id="rating"
                  type="text"
                  placeholder="Enter the Rating."
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="grid gap-2 w-full">
                <Label htmlFor="customization">Customization</Label>
                <Input
                  name="customization"
                  id="customization"
                  type="text"
                  placeholder="Enter the item's customization."
                />
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="processing">Processing Time</Label>
                <Input
                  name="processing"
                  id="processing"
                  type="text"
                  placeholder="Enter the processing time."
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="grid gap-2 w-full">
                <Label htmlFor="role">Stock Status</Label>
                <Select
                  id="status"
                  //   onValueChange={(val) => setRole(val)}
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
                <Label htmlFor="gender">Available Quantity</Label>

                <Input
                  name="available"
                  id="available"
                  type="text"
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
    </div>
  );
}
