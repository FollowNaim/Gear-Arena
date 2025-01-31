import SectionTitle from "../animation/SectionTitle";
import Product from "./Product";

function Products({ products }) {
  return (
    <div>
      <div className="text-center">
        <h3 className="text-3xl font-bold">
          <SectionTitle>
            Gear for <span className="text-destructive">Greatness</span>
          </SectionTitle>
        </h3>
        <p className="mt-3 text-primary/80">
          Where performance meets precision – <br /> elevate your game with our
          carefully curated selection of sports essentials.
        </p>
      </div>
      <div className="grid container grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 px-4">
        {products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}

export default Products;
