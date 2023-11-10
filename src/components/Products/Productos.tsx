
"use client"
import React from 'react';
import { Product } from '../../types/component.types';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Productos() {
    const [products, setProducts] = useState<Product[]>([]);

    const loadProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('No se pudieron obtener los productos.');
            }
            const data: Product[] = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error al obtener productos:', error);
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map((product) => (
                <Link key={product.id} href="#" className="block group">
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <Image
                            width={384}
                            height={549}
                            src={product.image}
                            alt={product.title}
                            className="object-cover w-full h-30"
                        />

                        <div className="p-4">
                            <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                {product.title}
                            </h3>

                            <p className="mt-1 text-sm text-gray-700">${product.price}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}


