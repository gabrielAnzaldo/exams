import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <Link href="/products">Go to products page</Link>
      </section>
    </main>
  );
}
