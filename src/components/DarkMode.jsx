import React, { useEffect, useState } from 'react'

const DarkMode = () => {

    const [darkMode, setDarkMode] = useState(true)

    const darkModeHandler = () => {
        setDarkMode(prev => !prev)
    }

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove("dark")
        }
    }, [darkMode])

    return (
        <button onClick={darkModeHandler} className='cursor-pointer'>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className={`${darkMode ? 'text-[#D4D4D4]' : 'text-[#1c1c1c]'}`} height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path></svg>
        </button>
    )
}

export default DarkMode