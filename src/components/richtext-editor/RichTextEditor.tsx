'use client';

import { Editor } from './DynamicEditor';

export default function RichTextEditor({
  value,
  setValue,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className='h-full'>
      <Editor value={value} setValue={setValue} />
    </div>
  );
}
