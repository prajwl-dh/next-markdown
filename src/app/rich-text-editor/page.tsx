import ContentExport from '@/components/content-export/ContentExport';
import Navbar from '@/components/navbar/Navbar';
import RichTextEditor from '@/components/richtext-editor/RichTextEditor';

export default function RichTextEditorPlayground() {
  return (
    <div className='flex flex-col justify-between mt-[70px]'>
      <Navbar>
        <ContentExport />
      </Navbar>
      <div className='w-screen h-[calc(100dvh-70px)]'>
        <RichTextEditor />
      </div>
    </div>
  );
}
