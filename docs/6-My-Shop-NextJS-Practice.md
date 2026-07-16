# My Shop - Practice Tasks

Congratulations! 🎉

You now have a simple e-commerce application that can:

- Display products from an API
- Add products to a shopping cart
- Share data between pages using Zustand
- Clear the shopping cart

The best way to improve your React and Next.js skills is by building features yourself.

Below are several beginner-friendly tasks. Each task includes a goal, a hint, and what you'll learn.

---

# Task 1: Display Product Images

## Goal

Currently, each product only shows its title and price.

Update the `ProductCard` component to also display the product image.

---

## Hint

The API already returns a field named:

```tsx
thumbnail
```

Use Next.js' `Image` component instead of a normal `<img>` tag.

Import it:

```tsx
import Image from "next/image";
```

---

## Things to Learn

- Using the `Image` component
- Image optimization
- Component layout

---

# Task 2: Show More Product Information

## Goal

Improve each product card by displaying more details.

---

## Hint

Look at the API response from:

```text
https://dummyjson.com/products
```

You'll discover many additional properties such as:

- description
- rating
- stock
- brand
- category
- discountPercentage

Choose several and display them nicely.

---

## Things to Learn

- Reading API data
- Updating TypeScript interfaces
- Displaying dynamic information

---

# Task 3: Improve the Product Card Design

## Goal

Make each product card look more like a real online store.

---

## Ideas

Try adding:

- Rounded corners
- Better spacing
- Product image at the top
- Better button styling
- Hover animation
- Shadows

---

## Things to Learn

- CSS Modules
- Flexbox
- Hover effects
- Visual hierarchy

---

# Task 4: Show the Product Description

## Goal

Display a short description instead of the full text.

---

## Hint

JavaScript strings have useful methods.

For example:

```tsx
description.slice(0, 80)
```

You can also add:

```text
...
```

to indicate there is more text.

---

## Things to Learn

- String manipulation
- UI design

---

# Task 5: Prevent Duplicate Products

## Goal

Currently, clicking "Buy Now" multiple times adds duplicate products.

Update the store so the same product cannot be added twice.

---

## Hint

Inside the store, check whether a product already exists before adding it.

Look into JavaScript methods such as:

```tsx
some()
```

or

```tsx
find()
```

---

## Things to Learn

- Array methods
- Updating Zustand state
- Preventing duplicate data

---

# Task 6: Remove Individual Products

## Goal

Users can clear the entire cart.

Add a button to remove only one product.

---

## Hint

Create a new store action:

```tsx
removeFromCart(id)
```

Use:

```tsx
filter()
```

to remove the selected product.

---

## Things to Learn

- Array filtering
- Zustand actions
- Updating UI

---

# Task 7: Display the Total Price

## Goal

Show the total cost of everything inside the cart.

Example:

```text
Total: $420
```

---

## Hint

JavaScript arrays include:

```tsx
reduce()
```

Use it to add together every product's price.

---

## Things to Learn

- Array reduction
- Calculations
- Derived state

---

# Task 8: Show an Empty Cart Illustration

## Goal

When the cart is empty, improve the page.

Instead of only showing:

```text
Your cart is empty.
```

Display:

- an image
- an icon
- a friendly message

---

## Things to Learn

- Conditional rendering
- Better user experience

---

# Task 9: Create a Product Details Page

## Goal

Create a page that displays information for one product.

Example URL:

```text
/products/1
```

---

## Hint

Read about:

- Dynamic Routes
- Route Parameters

Use the product ID from the URL to fetch only one product.

API example:

```text
https://dummyjson.com/products/1
```

---

## Things to Learn

- Dynamic routing
- Fetching data
- Next.js App Router

---

# Task 10: Navigate to Product Details

## Goal

Clicking a product card should open the details page.

---

## Hint

Use:

```tsx
<Link>
```

from Next.js.

The URL should include the product ID.

---

## Things to Learn

- Navigation
- Dynamic URLs

---

# Task 11: Create an About Page

## Goal

Create another page for your application.

Example:

```text
/about
```

Add information about your fictional store.

---

## Things to Learn

- Creating routes
- Layout consistency
- Reusing components

---

# Task 12: Create a Contact Page

## Goal

Add a contact page.

Include:

- Store email
- Phone number
- Address
- Opening hours

---

## Things to Learn

- Creating pages
- Page layouts

---

# Task 13: Improve the Header Navigation

## Goal

Update the header with links to your new pages.

Example:

- Home
- About
- Contact
- Cart

---

## Things to Learn

- Navigation
- Reusable layouts

---

# Task 14: Persist the Shopping Cart

## Goal

Currently, refreshing the browser clears the cart.

Update your Zustand store so the cart is saved.

---

## Hint

Research Zustand's:

```text
persist middleware
```

After implementing it:

- Add products
- Refresh the page
- Verify the cart remains

---

## Things to Learn

- Browser storage
- Persistence
- Zustand middleware

---

# Task 15: Display the Number of Unique Products

## Goal

Show how many different products are in the cart.

Example:

```text
Unique Products: 5
```

---

## Hint

Think about whether your cart allows duplicates.

If duplicates are removed, this value is simply:

```tsx
cart.length
```

If duplicates are allowed, you'll need another approach.

---

## Things to Learn

- Understanding application state
- Thinking about data models

---

# Bonus Challenge

Try transforming your project into something that looks like a real online store.

Ideas include:

- Product categories
- Search by category
- Product ratings
- Sale badges
- Featured products
- Sorting by price
- Sorting by rating
- Loading skeletons
- Dark mode
- Responsive mobile design
- Checkout page
- Quantity selector (+ / -)
- Favorite products (Wishlist)

---

# Final Advice

Don't worry about making everything perfect the first time.

Every feature you build will teach you something new about:

- React
- Next.js
- TypeScript
- Zustand
- CSS
- API integration
- Component design

The more you practice by building features yourself, the more confident you'll become as a developer.