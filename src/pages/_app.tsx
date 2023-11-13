import Announcement from '@/components/Announcement/announcement';
import Layout from '@/components/Layout/Layout';
import { CartProvider } from '@/context/CartContext';
import { UserProvider } from '@/context/UserContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import Transition from '@/components/Transition/transition';


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <UserProvider>
      <CartProvider>
        <Announcement />
        <Layout>
          <AnimatePresence mode='wait'>
            <motion.div key={router.route} className='h-full'>
              <Transition />
              <Component {...pageProps} />

            </motion.div>
          </AnimatePresence>
        </Layout>
      </CartProvider>
    </UserProvider>
  );
}
