
import { Inter } from 'next/font/google'
import NavBar from '@/components/Nav/navBar'
import ProductList from '@/components/Products/Productos'
import CategoryButton from '@/components/Category/CategoryButton'
import { useState } from 'react'
import Header from '@/components/Header/Header'

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
        <Header />
      </section>
    </main>
  )
}

