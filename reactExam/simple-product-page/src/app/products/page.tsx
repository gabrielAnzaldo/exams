import { fetchProducts } from "../../api/useApi";
import ProductList from "../../components/ProductListComponent";

export default async function Page() {
  const products = await fetchProducts();
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
}
