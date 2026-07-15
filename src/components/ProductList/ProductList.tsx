"use client";

import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";

import ProductCard from "../ProductCard/ProductCard";
import { Product } from "@/types/product";

export default function ProductList() {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <>
      <input
        className={styles.search}
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
