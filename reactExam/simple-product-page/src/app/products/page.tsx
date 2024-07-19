import { fetchProducts } from "../../api/useApi";

export default async function Page() {
  const products = await fetchProducts();
  return (
    <main>
      <section>
        {products?.map?.((item, index) => (
          <h2 key={item.id}>
            {index + 1} - {item.title}
          </h2>
        ))}
      </section>
    </main>
  );
}
