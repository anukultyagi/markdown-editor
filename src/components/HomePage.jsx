import React from 'react'
import Header from './Header'
import { motion } from 'framer-motion'

const HomePage = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Header />
        </motion.main>
    )
}

export default HomePage
