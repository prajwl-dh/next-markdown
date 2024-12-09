'use client';
import '@blocknote/core/fonts/inter.css';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/mantine/style.css';
import { useCreateBlockNote } from '@blocknote/react';
import { useTheme } from 'next-themes';
import { useCallback, useEffect } from 'react';

export default function Editor() {
  const { theme, systemTheme } = useTheme();
  const resolvedTheme = theme === 'system' ? systemTheme : theme;
  const blockNoteTheme =
    resolvedTheme === 'dark' || resolvedTheme === 'light'
      ? resolvedTheme
      : 'light';

  const editor = useCreateBlockNote();

  // Load initial Markdown from localStorage
  useEffect(() => {
    const loadMarkdownFromStorage = async () => {
      const savedMarkdown = localStorage.getItem('savedMarkdown');
      if (savedMarkdown) {
        const blocks = await editor.tryParseMarkdownToBlocks(savedMarkdown);
        editor.replaceBlocks(editor.document, blocks);
      }
    };
    loadMarkdownFromStorage();
  }, [editor]);

  // Save Markdown to localStorage on editor change
  const onChange = useCallback(async () => {
    const markdown = await editor.blocksToMarkdownLossy(editor.document);
    localStorage.setItem('savedMarkdown', markdown);
  }, [editor]);

  return (
    <BlockNoteView
      className='h-full py-2 bg-white dark:bg-[#1f1f1f] overflow-y-auto'
      editor={editor}
      theme={blockNoteTheme}
      onChange={onChange}
    />
  );
}
