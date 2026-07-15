# My Shop - Build a Next.js App from Scratch

This guide helps you create a clean Next.js project ready for an
e-commerce application.

## Prerequisites

-   Install Node.js (LTS)
-   Install Visual Studio Code
-   (Optional) Install Git

Verify Node.js:

``` bash
node -v
npm -v
```

------------------------------------------------------------------------

## Step 1: Learn About Next.js

Read the official guide:

https://nextjs.org/docs/app/getting-started/installation

------------------------------------------------------------------------

## Step 2: Create a New Project

``` bash
npx create-next-app@latest my-shop
```

Choose:

``` text
Use recommended defaults?          No
TypeScript?                        Yes
Linter?                            ESLint
React Compiler?                    No
Tailwind CSS?                      No
Use src/ directory?                Yes
Use App Router?                    Yes
Customize import alias?            No
Include AGENTS.md?                 No (or Yes if using AI coding agents)
```

------------------------------------------------------------------------

## Step 3: Open the Project

``` bash
cd my-shop
code .
```

------------------------------------------------------------------------

## Step 4: Install Dependencies

``` bash
npm install
```

------------------------------------------------------------------------

## Step 5: Install Third-Party Libraries

As your application grows, you'll use additional libraries to simplify
common tasks.

For this project, install the following packages:

## Axios

Axios is used to make HTTP requests to APIs.

Install it with:

``` bash
npm install axios
```

Example:

``` ts
import axios from "axios";
```

------------------------------------------------------------------------

## Zustand

Zustand is a lightweight state management library for React.

Install it with:

``` bash
npm install zustand
```

Example:

``` ts
import { create } from "zustand";
```

------------------------------------------------------------------------

## Install Both at Once

You can install both libraries with a single command:

``` bash
npm install axios zustand
```

------------------------------------------------------------------------

## Step 6: Run the App

``` bash
npm run dev
```

Open:

    http://localhost:3000

------------------------------------------------------------------------

# Project Cleanup

## 1. Replace `src/app/page.tsx` & Clear `src\app\page.module.css`

``` tsx
export default function HomePage() {
  return (
    <main>
      <h1>My Store</h1>
    </main>
  );
}
```

## 2. Clean `src/app/globals.css`

Remove the dark mode media queries.

``` tsx
:root {
  --background: #ffffff;
  --foreground: #171717;
}

html {
  height: 100%;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
```

## 3. Simplify `src/app/layout.tsx`

``` tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Store",
  description: "E-commerce built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## 4. Delete Unused Assets

Delete the default files from `public/`:

    next.svg
    vercel.svg
    globe.svg
    file.svg
    window.svg
    ...

------------------------------------------------------------------------
# Tips

## Sample Project Structure

``` text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── products/
│   ├── cart/
│   ├── checkout/
│   └── account/
│
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── ProductCard/
│   ├── Button/
│   └── Layout/
│
├── lib/
│   ├── api.ts
│   ├── helpers.ts
│   └── constants.ts
│
├── styles/
│   ├── variables.css
│   ├── utilities.css
│   └── animations.css
│
└── public/
    ├── images/
    └── icons/
```

------------------------------------------------------------------------

## Use CSS Modules

    components/
    └── Button/
        ├── Button.tsx
        └── Button.module.css

``` tsx
import styles from "./Button.module.css";

export function Button() {
  return <button className={styles.button}>Buy Now</button>;
}
```

CSS Modules prevent global class name conflicts.

------------------------------------------------------------------------

## Next Steps

-   Link to your github account
-   Create pages and routes
-   Build reusable components
-   Deploy your application
