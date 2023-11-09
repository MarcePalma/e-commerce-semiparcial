import React from 'react';
import { CategoryButtonProps } from '@/types/component.types';

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
          className="group inline-block rounded-full bg-gradient-to-r from-black via-gray-600 to-slate-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
          key={category}
          onClick={() => onCategoryChange(category)}
        >
          <span
            className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
          >
            {category}
          </span>
        </button>
      ))}
    </div>
  );
}

export default CategoryButton;
