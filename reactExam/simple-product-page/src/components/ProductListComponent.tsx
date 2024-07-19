import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "../types";
import styles from "./productlist.module.css";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section className={styles.products}>
      {products?.map?.((item: Product) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </section>
  );
};

export default ProductList;
