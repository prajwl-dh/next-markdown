'use client';
import '@blocknote/core/fonts/inter.css';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/mantine/style.css';
import { useCreateBlockNote } from '@blocknote/react';
import { useTheme } from 'next-themes';
import React from 'react';

export default function Editor() {
  const { theme, systemTheme } = useTheme();
  const [markdown, setMarkdown] = React.useState<string>();

  const resolvedTheme = theme === 'system' ? systemTheme : theme;
  const blockNoteTheme =
    resolvedTheme === 'dark' || resolvedTheme === 'light'
      ? resolvedTheme
      : 'light';

  const editor = useCreateBlockNote();

  const onChange = async () => {
    const markdown = await editor.blocksToMarkdownLossy(editor.document);
    setMarkdown(markdown);
  };

  return (
    <BlockNoteView
      className='h-full py-2 bg-white dark:bg-[#1f1f1f] overflow-y-auto'
      editor={editor}
      theme={blockNoteTheme}
      onChange={onChange}
    />
  );
}
