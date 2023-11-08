
import { Inter } from 'next/font/google'
import NavBar from '@/components/navBar'
import ProductList from '@/components/Productos'
import CategoryButton from '@/components/CategoryButton'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('electronics');

  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
  };
  return (
    <main

    >
      <NavBar />
      <section className={`flex min-h-screen flex-col items-center justify-between p-10 ${inter.className}`}>
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="bg-gradient-to-r br-gradient-to-r from-black via-slate-600 to-slate-900 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            TIENDA SHOPIX
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">Descubre Tu Estilo!</p>
        <CategoryButton
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <ProductList />
      </section>
    </main>
  )
}

