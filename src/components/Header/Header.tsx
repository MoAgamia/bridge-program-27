"use client";

import Link from "next/link";

import styles from "./Header.module.css";
import { useCartStore } from "@/stores/cartStore";

export default function Header() {
  const count = useCartStore((state) => state.cart.length);

  return (
    <header className={styles.header}>
      <h1>My Shop</h1>

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/cart">Cart ({count})</Link>
      </nav>
    </header>
  );
}
