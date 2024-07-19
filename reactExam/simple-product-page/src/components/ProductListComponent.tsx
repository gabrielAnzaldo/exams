import React from "react";
import { Product } from "../types";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section>
      {products?.map?.((item: Product, index: number) => (
        <h2 key={item.id}>
          {index + 1} - {item.title}
        </h2>
      ))}
    </section>
  );
};

export default ProductList;
