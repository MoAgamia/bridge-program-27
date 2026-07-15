# My Shop - Creating Reusable Components

In the previous lesson, everything lived inside a single `page.tsx` file. While this works for small examples, larger applications become difficult to maintain.

In this lesson, we'll refactor our application by moving reusable pieces into their own components.

By the end, our project structure will look like this:

```text
src/
├── app/
│   ├── page.tsx
│   └── page.module.css
│
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.css
│   │
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   │
│   ├── ProductCard/
│   │   ├── ProductCard.tsx
│   │   └── ProductCard.module.css
│   │
│   └── ProductList/
│       ├── ProductList.tsx
│       └── ProductList.module.css
│
└── lib/
    └── products.ts
```

---

# Step 1: Move Product Data

The first thing we'll do is move our product data into a separate file.

## Why?

Keeping data outside of our page makes it easier to:

- Reuse it in multiple pages
- Replace it later with an API
- Keep components focused on rendering

### Create

```text
src/lib/products.ts
```

Move the products array into this file.

``` tsx
export interface Product {
  id: number;
  title: string;
  price: string;
}

export const products: Array<Product> = [
  {
    id: 1,
    title: "Laptop",
    price: "$899",
  },
  {
    id: 2,
    title: "Headphones",
    price: "$99",
  },
  {
    id: 3,
    title: "Keyboard",
    price: "$49",
  },
  {
    id: 4,
    title: "Mouse",
    price: "$29",
  },
];
```

---

# Step 2: Create the Header Component

Our header is reusable.

Instead of writing it directly inside `page.tsx`, we'll create a dedicated component.

### Create

```text
src/components/Header/
├── Header.tsx
└── Header.module.css
```

Move the header JSX into `Header.tsx`.

``` tsx
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>My Shop</h1>
    </header>
  );
}
```

Move the header styles into `Header.module.css`.

``` tsx
.header {
  background-color: #2563eb;
  color: white;
  padding: 20px;
  text-align: center;
}
```

---

# Step 3: Create the Footer Component

Just like the header, the footer can be reused throughout the application.

### Create

```text
src/components/Footer/
├── Footer.tsx
└── Footer.module.css
```

Move the footer JSX and styles into these files.

``` tsx
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 My Shop. All rights reserved.</p>
    </footer>
  );
}
```

``` tsx
.footer {
  background-color: #f3f4f6;
  text-align: center;
  padding: 20px;
  margin-top: auto;
  border-top: 1px solid #ddd;
}
```

---

# Step 4: Create the Product Card Component

Each product currently contains duplicated markup inside the `map()` function.

Instead, we'll create a reusable card component.

### Create

```text
src/components/ProductCard/
├── ProductCard.tsx
└── ProductCard.module.css
```

The component should receive a product as a prop and display:

- Product name
- Product price
- Buy Now button

Move the card logic into `ProductCard.tsx`.

``` tsx
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  title: string;
  price: number;
};

export default function ProductCard({ title, price }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{price}</p>
      <button>Buy Now</button>
    </div>
  );
}

```

Move the card styles into `ProductCard.module.css`.

``` tsx
.card {
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background: white;
  text-align: center;
}

.card h3 {
  margin-bottom: 10px;
}

.card p {
  margin-bottom: 15px;
  font-size: 18px;
}

.card button {
  padding: 8px 16px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.card button:hover {
  background: #1d4ed8;
}
```

---

# Step 5: Create the Product List Component

Now we'll move the entire product list into its own component.

This component will be responsible for:

- Receiving the products
- Rendering each Product Card
- Managing the grid layout

### Create

```text
src/components/ProductList/
├── ProductList.tsx
└── ProductList.module.css
```

Move the products logic into `ProductList.css`.

``` tsx
"use client";

import { useState } from "react";
import styles from "./ProductList.module.css";

import ProductCard from "../ProductCard/ProductCard";
import { products } from "@/lib/products";

export default function ProductList() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

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
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}

```

Move the products container styles into `ProductList.module.css`.

``` tsx
.search {
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 30px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  justify-content: center;
  gap: 20px;
}
```

---

# Step 6: Update the Home Page

Now that everything has been separated into reusable components, we can simplify our home page.

Update:

```text
src/app/page.tsx
src/app/page.module.tsx
```

Your page should now:

- Import the Header component
- Import the Product List component
- Import the Footer component
- Import the products from `lib/products`

The page should only be responsible for assembling the layout.

``` tsx
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
```

``` tsx
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
```

---

# What You'll Learn

- Why reusable components are important
- Separating data from UI
- Passing data using props
- Organizing a scalable project structure
- Using CSS Modules for each component

---

# Benefits of This Structure

- Easier to read
- Easier to maintain
- Easier to reuse components
- Cleaner project organization
- Better preparation for larger applications
