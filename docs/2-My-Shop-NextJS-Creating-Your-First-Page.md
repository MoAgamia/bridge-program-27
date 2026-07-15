# My Shop - Creating Your First Page

See the included example for page.tsx and page.module.css.

## page.tsx

``` tsx
import styles from "./page.module.css";

interface Product {
  id: number;
  name: string;
  price: string;
}

const products: Array<Product> = [
  {
    id: 1,
    name: "Laptop",
    price: "$899",
  },
  {
    id: 2,
    name: "Headphones",
    price: "$99",
  },
  {
    id: 3,
    name: "Keyboard",
    price: "$49",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>My Shop</h1>
      </header>

      <main className={styles.main}>
        <h2>Our Products</h2>

        <div className={styles.products}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button>Buy Now</button>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2026 My Shop</p>
      </footer>
    </div>
  );
}
```

## page.module.css

``` css
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
}

.header {
  background-color: #2563eb;
  color: white;
  padding: 20px;
  text-align: center;
}

.main {
  flex: 1;
  padding: 30px;
}

.main h2 {
  text-align: center;
  margin-bottom: 20px;
}

.products {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  width: 200px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
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
  border: none;
  background-color: #2563eb;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.card button:hover {
  background-color: #1d4ed8;
}

.footer {
  background-color: #f3f4f6;
  text-align: center;
  padding: 20px;
}
```

## What You'll Learn

-   CSS Modules
-   Rendering lists with map()
-   Basic page layout (Header, Main, Footer)
-   Displaying simple product cards

## Next Steps

- Move the Header into its own component
- Move the Footer into its own component
- Create a reusable Product Card component
- Organize your project into reusable folders