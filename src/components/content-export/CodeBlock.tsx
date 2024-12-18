'use client';

import { ReactNode, useRef, useState } from 'react';
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
    <div className='flex flex-col rounded-md overflow-hidden bg-amber-50/50 dark:bg-[#24292e] border border-solid border-slate-600 dark:border-stone-600'>
      <div className='flex flex-row justify-between border-b border-solid border-slate-600 dark:border-stone-600 p-2 antialiased'>
        <p className='text-primaryText font-semibold'>{variant}</p>
        <button
          onClick={copyToClipboard}
          className='bg-teal-600 text-white rounded px-2 py-1 text-sm self-end z-50'
        >
          {copySuccess ? <LuCheck /> : <LuCopy />}
        </button>
      </div>
      <pre
        ref={codeRef}
        className={`rounded-md py-2 pl-2 w-full overflow-scroll text-secondaryText ${
          variant !== 'JSON' ? 'h-[30dvh]' : 'h-[5dvh]'
        }`}
      >
        <code>{children}</code>
      </pre>
    </div>
  );
}
