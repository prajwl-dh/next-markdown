'use client';

import hljs from 'highlight.js';
import 'highlight.js/styles/night-owl.css';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { LuCheck, LuCopy } from 'react-icons/lu';

export default function CodeBlock({
  children,
  variant,
}: {
  children: ReactNode;
  variant: string;
}) {
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
    <div className='flex flex-col rounded-md bg-[#011627] overflow-hidden'>
      <div className='flex flex-row justify-between border-b-[1px] border-gray-500 p-2'>
        <p className='text-white font-semibold'>{variant}</p>
        <button
          onClick={copyToClipboard}
          className='bg-teal-600 text-white rounded px-2 py-1 text-sm self-end z-50'
        >
          {copySuccess ? <LuCheck /> : <LuCopy />}
        </button>
      </div>
      <pre
        ref={codeRef}
        className={`rounded-md py-2 pl-2 w-auto overflow-x-scroll overflow-y-scroll antialiased z-50 ${
          variant !== 'JSON' ? 'h-[30dvh]' : 'h-[5dvh]'
        }`}
      >
        <code className='antialiased'>{children}</code>
      </pre>
    </div>
  );
}
