import React, { useContext, useRef } from 'react';
import { mdContext } from '../contexts/MdContext';
import Markdown from 'react-markdown';
import DownloadPdf from './DownloadPdf';


const Header = () => {
    const { inputText, setInputText } = useContext(mdContext);
    const outputref = useRef(null)

    return (
        <header className='flex gap-5 justify-between max-w-7xl mx-auto mt-8'>
            <div className='border border-zinc-400 rounded basis-1/2'>
                <div className='inset-shadow-2xs text-center font-mono bg-zinc-400 p-1 px-4 text-xl flex justify-between '>
                    <h1 >Input</h1>
                </div>
                <div className='min-h-screen'>
                    <textarea
                        className='h-[90vh] w-full p-4 resize-none outline-none'
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                </div>
            </div>
            <div className='border border-zinc-400 rounded basis-1/2'>
                <div className='inset-shadow-2xs text-center font-mono bg-zinc-400 p-1 px-4 text-xl flex justify-between items-center'>
                    <h1>Preview</h1>
                    <DownloadPdf targetId="markdown-preview" />


                </div>
                <div id="markdown-preview" className='min-h-[90vh] overflow-auto p-4 prose'>
                    <Markdown>{inputText}</Markdown>
                </div>
            </div>
        </header>
    );
};

export default Header;
