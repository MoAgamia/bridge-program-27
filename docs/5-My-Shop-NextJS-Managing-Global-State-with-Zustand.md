# My Shop - Managing Global State with Zustand

In this lesson, you'll learn how to manage a shopping cart using **Zustand**, a lightweight state management library for React.

Instead of passing data through multiple components using props, we'll create a **global store** that any component can access.

By the end of this lesson, users will be able to:

- Add products to the shopping cart
- View the number of items in the cart from any page
- Display all cart items
- Clear the shopping cart

---

# What is Global State?

There are two common types of state in React:

### Local State

Local state belongs to a single component.

Example:

```tsx
const [search, setSearch] = useState("");
```

Only that component can use or update the value.

---

### Global State

Global state can be shared between multiple components.

For example:

- Product Card adds an item to the cart.
- Header displays the cart count.
- Cart page displays every item.

Instead of passing the cart through props, every component reads from the same store.

This is exactly what Zustand helps us do.

---

# Step 1: Install Zustand

Open your terminal and install Zustand:

```bash
npm install zustand
```

---

# Step 2: Create the Cart Store

Create a new file:

```text
src/stores/cartStore.ts
```

Add the following code:

```tsx
import { create } from "zustand";
import { Product } from "@/types/product";

interface CartStore {
  cart: Product[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),

  clearCart: () =>
    set({
      cart: [],
    }),
}));
```

---

# Step 3: Understanding the Store

Let's break the code down.

First we import Zustand:

```tsx
import { create } from "zustand";
```

`create()` creates a global store.

---

Next we define our store interface:

```tsx
interface CartStore {
  cart: Product[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
}
```

Our store contains:

- `cart` → array of products
- `addToCart()` → adds a product
- `clearCart()` → removes every product

---

The store starts with an empty cart:

```tsx
cart: [],
```

---

To add a product:

```tsx
addToCart: (product) =>
  set((state) => ({
    cart: [...state.cart, product],
  })),
```

This creates a **new array** containing:

- all previous products
- the new product

---

To clear the cart:

```tsx
clearCart: () =>
  set({
    cart: [],
  }),
```

The cart simply becomes an empty array.

---

# Step 4: Update the Product Card

Open:

```text
src/components/ProductCard/ProductCard.tsx
```

Update the component:

```tsx
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

      <button onClick={() => addToCart(product)}>
        Buy Now
      </button>
    </div>
  );
}
```

---

# Step 5: Understanding ProductCard

Import the store:

```tsx
import { useCartStore } from "@/stores/cartStore";
```

Retrieve the `addToCart` function:

```tsx
const addToCart = useCartStore((state) => state.addToCart);
```

This subscribes only to the `addToCart` action.

When the button is clicked:

```tsx
<button onClick={() => addToCart(product)}>
```

The selected product is added to the global cart.

No props are required.

---

# Step 6: Update ProductList

Open:

```text
src/components/ProductList/ProductList.tsx
```

Render the product cards like this:

```tsx
<div className={styles.grid}>
  {filteredProducts.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ))}
</div>
```

Each `ProductCard` now has access to the global store.

---

# Step 7: Update the Header

Open:

```text
src/components/Header/Header.tsx
```

Replace the component with:

```tsx
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
        <Link href="/cart">
          Cart ({count})
        </Link>
      </nav>
    </header>
  );
}
```

---

# Step 8: Understanding the Header

Read the number of products:

```tsx
const count = useCartStore((state) => state.cart.length);
```

Whenever the cart changes, the header automatically updates.

For example:

```text
Cart (0)
```

↓

```text
Cart (1)
```

↓

```text
Cart (5)
```

No refresh is needed.

---

# Step 9: Update the Header Styles

Open:

```text
src/components/Header/Header.module.css
```

Replace its contents with:

```css
.header {
  background-color: #2563eb;
  color: white;
  padding: 20px 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  margin: 0;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav a:hover {
  text-decoration: underline;
}
```

---

# Step 10: Create the Cart Page

Create a new file:

```text
src/app/cart/page.tsx
```

Add:

```tsx
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

          <button
            className={styles.clearButton}
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className={styles.cartItems}>
            {cart.map((product) => (
              <div
                key={product.id}
                className={styles.card}
              >
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
```

---

# Step 11: Understanding the Cart Page

Read every product from the store:

```tsx
const cart = useCartStore((state) => state.cart);
```

Read the clear function:

```tsx
const clearCart = useCartStore((state) => state.clearCart);
```

If the cart is empty:

```tsx
{cart.length === 0 ? (
  <p>Your cart is empty.</p>
) : (
  ...
)}
```

Otherwise every product is displayed.

---

# Step 12: Add Cart Page Styles

Create:

```text
src/app/cart/page.module.css
```

Add:

```css
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
}

.main {
  flex: 1;
  padding: 30px;
}

.main h2 {
  text-align: center;
  margin-bottom: 20px;
}

.main > p {
  text-align: center;
  margin-bottom: 30px;
}

.cartItems {
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  justify-content: center;
  gap: 20px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background: white;
}

.card h3 {
  margin-bottom: 10px;
}

.card p {
  margin: 0;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.actions p {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.clearButton {
  padding: 12px 24px;
  background-color: #dc2626;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.clearButton:hover {
  background-color: #b91c1c;
}
```

---

# Step 13: Run the Application

Start the development server:

```bash
npm run dev
```

Try the following:

1. Open the home page.
2. Click **Buy Now** on several products.
3. Notice the cart count updates instantly.
4. Open the Cart page.
5. View all added products.
6. Click **Clear Cart**.
7. The cart becomes empty and the header count returns to zero.

---

# What You Learned

In this lesson you learned:

- What global state is
- Why global state is useful
- How to install Zustand
- How to create a Zustand store
- How to read state using `useCartStore`
- How to update state using store actions
- How multiple components can share the same data
- How to build a simple shopping cart using global state
