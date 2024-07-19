import Image from "next/image";
import { Product } from "../types";
import styles from "./product.module.css";

const ProductCard: React.FC<Product> = ({ title, price, image }) => {
  return (
    <article className={styles.product}>
      <Image src={image} alt="Image description" width="240" height={"358"} />
      <span>{title}</span>
      <span>
        <b>
          {price}
          {" USD"}
        </b>
      </span>
    </article>
  );
};

export default ProductCard;
