import React from 'react'
import { Link } from 'react-router-dom'
import { navMenu } from '../../data'

const Navbar = () => {
    return (
        <nav className='bg-[#373d49] p-3 py-1 font-mono'>
            <div className='container mx-auto flex justify-between items-center py-1'>
                <div className='text-zinc-100 font-medium hover:text-cyan-400 uppercase text-base tracking-widest'>
                    <Link to="/">Markdown-Editor</Link>
                </div>
                <div>
                    <ul className='flex items-center gap-3'>
                        {navMenu && navMenu.map((item) => (
                            <li key={item.id} className='text-zinc-300 hover:text-cyan-400 text-base'><Link to={item.path}>{item.title}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar