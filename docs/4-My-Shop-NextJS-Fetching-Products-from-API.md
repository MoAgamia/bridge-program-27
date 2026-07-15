# My Shop - Fetching Products from an API

In this lesson, you'll update the **ProductList** component to load products from an API instead of using the local `products.ts` file.

---

# Step 1: Make ProductList a Client Component

Since we'll use React Hooks (`useState` and `useEffect`), add the following line at the top of the file:

```tsx
"use client";
```

---

# Step 2: Update the Imports

Add the React Hooks import:

```tsx
import { useEffect, useState } from "react";
```

Remove this import because we'll no longer use the local product list:

```tsx
import { products } from "@/lib/products";
```

---

# Step 3: Add a Product Interface

Above your component, add the following interface:

```tsx
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}
```

This describes the data returned from the API.

---

# Step 4: Update the Component State

Replace your existing state with:

```tsx
const [products, setProducts] = useState<Product[]>([]);
const [search, setSearch] = useState("");
const [loading, setLoading] = useState(true);
```

Now:

- `products` stores the products from the API.
- `search` stores the search text.
- `loading` tracks whether the products are still loading.

---

# Step 5: Fetch Products

Inside the component, add the following `useEffect()`:

```tsx
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
```

This code:

- Sends a request to the API.
- Converts the response to JSON.
- Saves the products into state.
- Stops the loading indicator.

---

# Step 6: Show a Loading Message

Before rendering the products, add:

```tsx
if (loading) {
  return <p>Loading products...</p>;
}
```

Now the user will see a loading message while the products are being downloaded.

---

# Step 7: Run Your Application

Start the development server:

```bash
npm run dev
```

Open your browser.

Your products should now be loaded from:

```text
https://dummyjson.com/products
```

instead of the local `products.ts` file.

---

# What You Learned

- How to create a Client Component
- How to use `useState`
- How to use `useEffect`
- How to fetch data from an API
- How to display a loading message