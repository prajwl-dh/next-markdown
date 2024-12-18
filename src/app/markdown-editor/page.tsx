import ContentExport from '@/components/content-export/ContentExport';
import MarkdownEditor from '@/components/markdown-editor/MarkdownEditor';
import Navbar from '@/components/navbar/Navbar';

export default function MarkdownEditorPlayground() {
  return (
    <div className='flex flex-col justify-between mt-[70px]'>
      <Navbar>
        <ContentExport />
      </Navbar>
      <div className='w-screen h-[calc(100dvh-70px)]'>
        <MarkdownEditor />
      </div>
    </div>
  );
}
