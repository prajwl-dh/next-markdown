'use client';
import { Block, BlockNoteEditor, PartialBlock } from '@blocknote/core';
import '@blocknote/core/fonts/inter.css';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/mantine/style.css';
import { useTheme } from 'next-themes';
import { useEffect, useMemo, useState } from 'react';

async function saveToStorage(jsonBlocks: Block[]) {
  localStorage.setItem('editorContent', JSON.stringify(jsonBlocks));
}

async function loadFromStorage(): Promise<PartialBlock[] | undefined> {
  const storageString = localStorage.getItem('editorContent');
  return storageString
    ? (JSON.parse(storageString) as PartialBlock[])
    : undefined;
}

export default function Editor() {
  const { theme, systemTheme } = useTheme();
  const resolvedTheme = theme === 'system' ? systemTheme : theme;
  const blockNoteTheme =
    resolvedTheme === 'dark' || resolvedTheme === 'light'
      ? resolvedTheme
      : 'light';

  const [initialContent, setInitialContent] = useState<
    PartialBlock[] | undefined | ''
  >('');

  // Load initial blocks from localStorage
  useEffect(() => {
    loadFromStorage().then((content) => setInitialContent(content));
  }, []);

  // Create editor only after initial content is loaded
  const editor = useMemo(() => {
    if (initialContent === '') return undefined;
    return BlockNoteEditor.create({ initialContent });
  }, [initialContent]);

  // Display loading state until editor is ready
  if (!editor) {
    return null;
  }

  async function convertToMarkdown() {
    const editorContent = await editor?.blocksToMarkdownLossy(editor.document);
  }

  return (
    <BlockNoteView
      className='h-full py-2 px-4 md:px-14 bg-white dark:bg-[#1f1f1f] overflow-y-auto'
      editor={editor}
      theme={blockNoteTheme}
      onChange={() => {
        saveToStorage(editor.document);
        convertToMarkdown();
      }}
    />
  );
}
