import React from 'react';
import { DownloadIcon } from 'lucide-react';

// IMPORTANT: This path assumes your PDF file is located in the public directory 
// at /public/assets/MyResume.pdf. You may need to adjust the filename.
const PDF_PATH = './assets/fidhaanportfolio.pdf'; 

/**
 * A standalone component that renders a button to trigger a resume download.
 * It uses the HTML 'download' attribute to force the browser to save the file.
 */
const ResumeDownload = () => (
    <div style={{marginTop: '200px'}}><a 
        href='https://drive.google.com/drive/folders/1eOwoL4I5KwJgOi38oPA05ey22ISAyAu2?usp=sharing' style={{marginLeft: '650px', backgroundColor: 'green', color: 'white', textDecoration: 'none', padding: '10px'}}
        // The 'download' attribute forces a download and suggests a filename.
        download="MuhammadFidhaanFMResume.pdf" 
        className="inline-flex items-center justify-center space-x-2 px-6 py-3 border border-transparent 
                   text-base font-medium rounded-xl shadow-sm text-white bg-green-600 
                   hover:bg-green-700 transition duration-150 ease-in-out transform hover:scale-[1.02]
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 display-block"
        aria-label="Download Fidhaan's Resume as PDF"
    >
        <DownloadIcon className="w-5 h-5" /> 
        <span style={{marginLeft: '10px', textDecoration: 'none'}}>Download My Resume (PDF)</span>
    </a></div>
);

export default ResumeDownload;