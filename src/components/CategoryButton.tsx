import React from 'react';
import { CategoryButtonProps } from '@/utils/types';

function CategoryButton({ selectedCategory, onCategoryChange }: CategoryButtonProps) {
  const categories = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`category-button ${
            selectedCategory === category ? 'selected' : ''
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryButton;
