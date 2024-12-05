import Product from "./Product";

function Products({ products }) {
  return (
    <div className="grid container grid-cols-3 gap-4 mt-8 px-4">
      {products.map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </div>
  );
}

export default Products;
