import React from 'react'
import { motion } from 'framer-motion'

const transitionVariants = {
    initial: {
        x: '100%',
        width: '100%',
    },
    animate: {
        x: '0%',
        width: '0%',
    },
    exit: {
        x: '100%',
        width:'100%'
    }
}

export default function () {

    return (
        <>
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#1c2533]'
                variants={transitionVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
            >
            </motion.div>
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#152036]'
                variants={transitionVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
            >
            </motion.div>
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#fff]'
                variants={transitionVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
            >
            </motion.div>
        </>

    )
}
