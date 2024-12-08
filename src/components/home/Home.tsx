'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { GitHubIcon } from './GitHubIcon';

export default function Home() {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, type: 'spring' }}
      className='w-full 2xl:w-10/12 px-1 xl:px-40 flex flex-col justify-center items-start md:items-center gap-10 min-h-[75vh] z-10'
    >
      <p className='text-3xl text-start md:text-center font-bold leading-tight text-light-text-primary dark:text-dark-text-primary sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight mt-5 lg:mt-10'>
        Create, Preview, and Export Contents Easily with the Next Rich Text
        Editor
      </p>
      <p className='text-start md:text-center !leading-relaxed sm:text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary'>
        A lightweight, free-to-use rich text editor that allows you to write and
        preview blogs and other content instantly. It also enables you to export
        your work as markdown, facilitating seamless integration with your web
        applications. Perfect for developers and creators seeking a responsive
        and feature-rich tool to enhance their workflow.
      </p>
      <div className='flex gap-2'>
        <Button
          className='h-12 min-w-32 flex gap-2 items-center text-md shadow-sm'
          onMouseEnter={() => router.prefetch('/playground')}
          onClick={() => router.push('/playground')}
        >
          Playground <ArrowRight />
        </Button>
        <Link
          href={'https://github.com/prajwl-dh/next-markdown'}
          target='_blank'
        >
          <Button
            variant={'outline'}
            className='h-12 min-w-32 flex gap-2 items-center text-md border-neutral-300 shadow-sm'
          >
            <p>Contribute</p>
            <GitHubIcon />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
