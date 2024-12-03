import Product from "./Product";

function Products() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8 px-4">
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default Products;
