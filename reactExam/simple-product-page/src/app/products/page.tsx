import Link from "next/link";
import ProductList from "../../components/ProductListComponent";
import FilterBar from "@/components/FilterBar";
import { fecher } from "../../api/useApi";

export default async function Page() {
  let products = [];
  try {
    products = await fecher("https://fakestoreapi.com/products");
  } catch (error) {
    console.error("error: ", error);
  }

  return (
    <>
      <header>
        <h1>Product List Page</h1>
        <Link href="/">{"<-"} Back to home</Link>
        <FilterBar />
      </header>
      <main>
        <ProductList products={products} />
      </main>
      <footer>code challenge</footer>
    </>
  );
}
