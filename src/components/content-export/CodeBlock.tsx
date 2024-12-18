'use client';

import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // Choose your theme
import { ReactNode, useEffect, useRef, useState } from 'react';
import { LuCheck, LuCopy } from 'react-icons/lu';

export default function CodeBlock({ children }: { children: ReactNode }) {
  const codeRef = useRef<HTMLPreElement>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [children]);

  const copyToClipboard = async () => {
    if (codeRef.current) {
      const code = codeRef.current.innerText;
      try {
        await navigator.clipboard.writeText(code);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 5000); // Reset notification after 5 seconds
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };

  return (
    <div className='flex flex-col rounded-md w-full bg-[#282c34]'>
      <button
        onClick={copyToClipboard}
        className='bg-teal-600 text-white rounded px-2 py-1 text-sm self-end z-50'
      >
        {copySuccess ? <LuCheck /> : <LuCopy />}
      </button>
      <pre
        ref={codeRef}
        className='rounded-md p-4 w-full max-w-lg max-h-[50dvh] overflow-auto bg-white text-black'
      >
        <code>{children}</code>
      </pre>
    </div>
  );
}
