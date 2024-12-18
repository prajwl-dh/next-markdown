'use client';
import CodeBlock from '@/components/content-export/CodeBlock';
import ContentExport from '@/components/content-export/ContentExport';
import Navbar from '@/components/navbar/Navbar';
import RichTextEditor from '@/components/richtext-editor/RichTextEditor';
import React from 'react';

export default function RichTextEditorPlayground() {
  const [value, setValue] = React.useState<string>('');

  return (
    <div className='flex flex-col justify-between mt-[70px]'>
      <Navbar>
        <ContentExport>
          <CodeBlock variant='Markdown'>{value}</CodeBlock>
          <CodeBlock variant='JSON'>
            {JSON.stringify({ markdown: value })}
          </CodeBlock>
        </ContentExport>
      </Navbar>
      <div className='w-screen h-[calc(100dvh-70px)]'>
        <RichTextEditor value={value} setValue={setValue} />
      </div>
    </div>
  );
}
