'use client';
import Footer from '@/components/footer/Footer';
import Home from '@/components/home/Home';
import Navbar from '@/components/navbar/Navbar';

export default function App() {
  return (
    <>
      <div className='h-dvh w-dvw fixed pattern-wavy pattern-blue-500 pattern-bg-white pattern-size-6 pattern-opacity-5 z-0' />
      <div className='flex flex-col justify-between mt-[70px]'>
        <Navbar
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: 'spring' }}
        />
        <div className='w-screen h-[calc(100dvh-70px-60px)] px-1 md:px-14 flex flex-col items-center'>
          <Home />
        </div>
        <Footer />
      </div>
    </>
  );
}
