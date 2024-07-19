import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "../types";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section>
      {products?.map?.((item: Product) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </section>
  );
};

export default ProductList;
