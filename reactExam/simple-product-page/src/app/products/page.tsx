import { fetchProducts } from "../../api/useApi";
import { Product } from "../../types";

export default async function Page() {
  const products = await fetchProducts();
  return (
    <main>
      <section>
        {products?.map?.((item: Product, index: number) => (
          <h2 key={item.id}>
            {index + 1} - {item.title}
          </h2>
        ))}
      </section>
    </main>
  );
}
