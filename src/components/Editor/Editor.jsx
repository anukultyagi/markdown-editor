import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { defaultMarkdown } from '../../data';

const Editor = () => {
    const [markdown, setMarkdown] = useState(defaultMarkdown);

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <section className=''>
            <div className="grid grid-cols-2">
                {/* markdown column  */}
                <div className='border-r border-zinc-200 flex flex-col h-[calc(100vh-141px)] overflow-auto'>
                    <div className='py-3 px-4 border-b border-zinc-200'>
                        <h1 className='text-zinc-400 font-medium uppercase tracking-widest text-xs'>Markdown</h1>
                    </div>
                    <div className=' bg-zinc-200 flex-grow flex'>
                        <textarea
                            className='w-full h-full p-4 text-sm focus:outline-none resize-none'
                            value={markdown}
                            onChange={handleChange}
                            placeholder='Start writing your markdown here...'
                        />
                    </div>
                </div>
                {/* Preview column  */}
                <div className='flex flex-col h-[calc(100vh-141px)] '>
                    <div className='py-3 px-4 border-b border-zinc-200'>
                        <h1 className='text-zinc-400 font-medium uppercase tracking-widest text-xs'>Preview</h1>
                    </div>
                    <div className='flex-grow p-4 prose prose-sm max-w-none overflow-auto'> {/* Take remaining height */}
                        <ReactMarkdown>{markdown}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Editor;