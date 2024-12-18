import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ReactNode } from 'react';

export default function ContentExport({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger className='flex text-md bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'>
        Export
      </DialogTrigger>
      <DialogContent className='h-dvh sm:h-max'>
        <DialogHeader className='gap-4'>
          <DialogTitle>Content Export</DialogTitle>
          <DialogDescription>
            Copy the content in markdown or JSON format
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
