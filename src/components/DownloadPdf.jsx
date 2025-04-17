import React from 'react';
import html2pdf from 'html2pdf.js';

const DownloadPdf = ({ targetId }) => {
    const handleDownload = () => {
        const element = document.getElementById(targetId);
        if (element) {
            html2pdf().from(element).set({
                margin: 1,
                filename: `markdown-${Date.now()}.pdf`,
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
            }).save();
        }
    };

    return (
        <button onClick={handleDownload} aria-label='download' title='Download as PDF'>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15v2a3 3 0 003 3h10a3 3 0 003-3v-2m-8 1V4m0 12-4-4m4 4 4-4" />
            </svg>
        </button>
    );
};

export default DownloadPdf;
