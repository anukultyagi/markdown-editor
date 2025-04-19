import React from 'react'

const Header = () => {
    return (
        <header className=' p-3 py-1 border-b border-zinc-200 font-mono'>
            <div className='container mx-auto flex justify-between items-start py-1'>
                <div className='flex flex-col gap-3'>
                    <label className='text-zinc-400 font-medium uppercase tracking-widest text-xs'>Document Name</label>
                    <h1 className='text-base tracking-wider'>Untitled Document.md</h1>
                </div>
                <div className='flex flex-col items-end gap-1'>
                    <div className='flex gap-5'>
                        <p >
                            <label className='text-zinc-400 font-medium uppercase tracking-widest text-xs '>reading Time : </label>
                            <span >3 min read</span>
                        </p>
                        <p>
                            <label className='text-zinc-400 font-medium uppercase tracking-widest text-xs '>Words : </label> <span >549</span>
                        </p>
                    </div>
                    <p>
                        <label className='text-zinc-400 font-medium uppercase tracking-widest text-xs '>Characters: </label>
                        <span>3734</span>
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header