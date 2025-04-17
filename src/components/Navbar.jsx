import React from 'react'
import DarkMode from './DarkMode'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <motion.nav
            className='dark:bg-zinc-900'
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className='max-w-7xl mx-auto py-1 flex justify-between items-center'>
                <button className='dark:hover:text-white cursor-pointer font-medium tracking-wider font-mono text-xl'>
                    <Link to='/'>Markdown Editor</Link>
                </button>
                <DarkMode />
                <ul className='flex gap-4 items-center'>
                    <li className='dark:hover:text-white hover:text-black cursor-pointer font-medium tracking-wider font-mono flex gap-2 items-center'>
                        Preview
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="18px" height="18px" viewBox="0 0 24 24"><path d="M15.5 2.25a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V4.06l-6.22 6.22a.75.75 0 11-1.06-1.06L19.94 3h-3.69a.75.75 0 01-.75-.75z" /><path d="M2.5 4.25c0-.966.784-1.75 1.75-1.75h8.5a.75.75 0 010 1.5h-8.5a.25.25 0 00-.25.25v15.5c0 .138.112.25.25.25h15.5a.25.25 0 00.25-.25v-8.5a.75.75 0 011.5 0v8.5a1.75 1.75 0 01-1.75 1.75H4.25a1.75 1.75 0 01-1.75-1.75V4.25z" /></svg>
                    </li>
                    <li className='dark:hover:text-white hover:text-black cursor-pointer font-medium tracking-wider font-mono flex gap-2 items-center'>
                        <Link to='/guide'>Markdown-guide</Link>
                    </li>
                </ul>
            </div>
        </motion.nav>
    )
}

export default Navbar
