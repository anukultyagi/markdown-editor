import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { motion } from 'framer-motion'

const Layout = () => {
    return (
        <motion.div
            className='min-h-screen dark:bg-zinc-900 bg-[#ededed] dark:text-zinc-300 text-zinc-800'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.6,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 60
            }}
        >
            <Navbar />
            <Outlet />
            <Footer />
        </motion.div>
    )
}

export default Layout
