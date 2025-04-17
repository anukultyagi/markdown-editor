import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <motion.footer
            className='py-2 mt-2 flex justify-center items-center'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <p className='text-sm'>Made by ♥ | 2025 &copy; All Rights Reserved</p>
        </motion.footer>
    )
}

export default Footer
