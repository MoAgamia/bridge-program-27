import styles from "./ProductCard.module.css";

import { Product } from "@/types/product";
import { useCartStore } from "@/stores/cartStore";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className={styles.card}>
      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>Buy Now</button>
    </div>
  );
}
