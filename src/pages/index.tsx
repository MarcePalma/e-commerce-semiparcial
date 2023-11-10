
import { Inter } from 'next/font/google'
import NavBar from '@/components/Nav/navBar'
import Header from '@/components/Header/Header'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
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

