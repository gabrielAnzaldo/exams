import { fetchProducts } from "../../api/useApi";
import ProductList from "../../components/ProductListComponent";

export default async function Page() {
  const products = await fetchProducts();
  return (
    <main>
      <header>
        <h1>Product List Page</h1>
      </header>
      <ProductList products={products} />
      <footer>code challenge</footer>
    </main>
  );
}
