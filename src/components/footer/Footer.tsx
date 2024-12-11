'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='w-[100dvw] h-[70px] px-1 md:px-14 justify-center items-center flex flex-row bg-background/80 backdrop-blur-md bg-opacity-50 dark:bg-opacity-50 border-t-[1px] border-slate-200 dark:border-stone-700 overflow-x-hidden'
    >
      <div className='flex flex-row gap-0.5 justify-center items-center font-mono'>
        <p className='text text-sm m text-light-text-primary dark:text-dark-text-primary'>
          A Fun Project By - @
        </p>
        <a
          className='text text-sm font-bold underline underline-offset-4 text-light-text-primary dark:text-dark-text-primary'
          href='https://prajwalonline.com'
          target='_blank'
        >
          prajwl-dh
        </a>
      </div>
    </motion.div>
  );
}
