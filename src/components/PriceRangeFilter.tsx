'use client';

import * as React from 'react';
import { ProductsType } from '@/app/page';
import DualRangeSlider from './DualRangeSlider';

interface PriceRangeFilterProps {
  products: ProductsType[];
  onFilterChange: (filteredProducts: ProductsType[]) => void;
}

const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({ products, onFilterChange }) => {
  const minPrice = Math.min(...products.map((p) => p.price));
  const maxPrice = Math.max(...products.map((p) => p.price));
  const [priceRange, setPriceRange] = React.useState<[number, number]>([minPrice, maxPrice]);

  React.useEffect(() => {
    const filtered = products.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    onFilterChange(filtered);
  }, [priceRange, products, onFilterChange]);

  const handlePriceChange = (newRange: number[]) => {
    setPriceRange([newRange[0], newRange[1]]);
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-6">
        <span className="text-sm font-medium">Price Range: ${priceRange[0]} - ${priceRange[1]}</span>
      </div>
      <DualRangeSlider
        min={minPrice}
        max={maxPrice}
        step={10}
        value={priceRange}
        onValueChange={handlePriceChange}
        label={(value) => `$${value}`}
        labelPosition="top"
        className="w-full"
      />
    </div>
  );
};

export default PriceRangeFilter;