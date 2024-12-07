import Navbar from '@/components/navbar/Navbar';
import MDXPlayground from '@/components/playground/MDXPlayground';
import { Button } from '@/components/ui/button';

export default function Playground() {
  return (
    <div className='flex flex-col justify-between mt-[70px]'>
      <Navbar>
        <Button variant={'default'} className='flex text-md'>
          Export
        </Button>
      </Navbar>
      <div className='w-screen h-[calc(100dvh-70px)]'>
        <MDXPlayground />
      </div>
    </div>
  );
}
