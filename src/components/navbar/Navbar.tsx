'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ThemeToggle } from '../theme-toggle/ThemeToggle';
import { Logo } from './Logo';

type NavbarType = {
  children?: React.ReactNode;
  initial?: { opacity: number; y: number };
  animate?: { opacity: number; y: number };
  transition?: { delay: number; type: string };
};

export default function Navbar({
  children,
  initial,
  animate,
  transition,
}: NavbarType) {
  const router = useRouter();

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={`w-full h-[70px] px-4 md:px-14 flex flex-row justify-between shadow-sm items-center fixed left-0 top-0 z-50 bg-transparent dark:bg-foreground backdrop-blur-md bg-opacity-50 dark:bg-opacity-50 border-b-[1px] border-slate-200 dark:border-stone-700`}
    >
      <div
        onClick={() => router.push('/')}
        className='flex flex-row items-center cursor-pointer -space-x-2'
      >
        <Logo
          src={'/logo.png'}
          alt='logo'
          height={800}
          width={800}
          quality={100}
          className='h-10 w-10 rounded-sm border-secondaryText border-[3px]'
          priority
        />
        <div className='flex flex-col items-center space-x-4 -space-y-1'>
          <p className='text text-xl font-bold text-light-text-primary dark:text-dark-text-primary -ml-[1.2rem]'>
            Next
          </p>
          <p className='text text-md text-light-text-primary dark:text-dark-text-primary -ml-8'>
            Markdown
          </p>
        </div>
      </div>
      <div className='flex flex-row gap-4 items-center mr-3 md:mr-0'>
        {children}
        <ThemeToggle />
      </div>
    </motion.div>
  );
}
