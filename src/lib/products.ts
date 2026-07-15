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
