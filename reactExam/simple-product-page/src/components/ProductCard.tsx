import { Product } from "../types";

const ProductCard: React.FC<Product> = ({ title, price }) => {
  return (
    <h2>
      {title} - {price}
    </h2>
  );
};

export default ProductCard;
