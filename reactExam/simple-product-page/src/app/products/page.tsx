import Link from "next/link";
import { fetchProducts } from "../../api/useApi";
import ProductList from "../../components/ProductListComponent";

export default async function Page() {
  let products = [];
  try {
    products = await fetchProducts();
  } catch (error) {
    console.error("error: ", error);
  }

  return (
    <>
      <header>
        <h1>Product List Page</h1>
        <Link href="/">{"<-"} Back to home</Link>
      </header>
      <main>
        <ProductList products={products} />
      </main>
      <footer>code challenge</footer>
    </>
  );
}
