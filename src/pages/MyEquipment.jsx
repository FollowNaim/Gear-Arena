import MyProductCard from "@/components/my-products/MyProductCard";

function MyEquipment() {
  return (
    <div>
      <div className="container px-4">
        <div className="grid grid-cols-3 gap-4">
          <MyProductCard />
          <MyProductCard />
          <MyProductCard />
        </div>
      </div>
    </div>
  );
}

export default MyEquipment;
