import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProductList from "@/components/ProductList/ProductList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <h2>Our Products</h2>

        <ProductList />
      </main>

      <Footer />
    </div>
  );
}
