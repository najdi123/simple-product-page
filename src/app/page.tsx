'use client';

import PriceRangeFilter from "@/components/PriceRangeFilter";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

export type ProductsType = { id: number, name: string, price: number };

export const Products: ProductsType[] = [
  { id: 1, name: "phone", price: 500 },
  { id: 2, name: "laptop", price: 1000 },
  { id: 3, name: "headphones", price: 100 },
  { id: 4, name: "mouse", price: 50 },
];

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState<ProductsType[]>(Products);

  return (
    <div className="container mx-auto p-4">
      <p className="text-3xl font-bold mb-4">Products</p>
      <PriceRangeFilter products={Products} onFilterChange={setFilteredProducts} />
      <div className="flex flex-wrap gap-4">
        {filteredProducts.map((product: ProductsType) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}