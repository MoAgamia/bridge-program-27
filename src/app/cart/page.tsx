"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import styles from "./page.module.css";

import { useCartStore } from "@/stores/cartStore";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <h2>Shopping Cart</h2>

        <div className={styles.actions}>
          <p>Total Items: {cart.length}</p>

          <button className={styles.clearButton} onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className={styles.cartItems}>
            {cart.map((product) => (
              <div key={product.id} className={styles.card}>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
