export interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
}

export interface ProductCardProps {
    product: Product;
}

export interface CategoryButtonProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}