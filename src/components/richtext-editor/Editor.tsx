'use client';
import { Block, BlockNoteEditor, PartialBlock } from '@blocknote/core';
import '@blocknote/core/fonts/inter.css';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/mantine/style.css';
import { useTheme } from 'next-themes';
import { useEffect, useMemo, useState } from 'react';
import { initialValue } from './initialContent';

async function saveToStorage(jsonBlocks: Block[]) {
  localStorage.setItem('editorContent', JSON.stringify(jsonBlocks));
}

async function loadFromStorage(): Promise<PartialBlock[] | undefined> {
  const storageString = localStorage.getItem('editorContent');
  if (storageString) {
    try {
      const parsedData = JSON.parse(storageString) as PartialBlock[];
      if (
        Array.isArray(parsedData) &&
        parsedData.some(
          (block) => Array.isArray(block.content) && block.content.length > 0
        )
      ) {
        return parsedData;
      }
    } catch (e) {
      console.error('Failed to parse storage content:', e);
    }
  }
  return undefined;
}

export default function Editor({
  value,
  setValue,
}: {
  value?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { theme, systemTheme } = useTheme();
  const resolvedTheme = theme === 'system' ? systemTheme : theme;
  const blockNoteTheme =
    resolvedTheme === 'dark' || resolvedTheme === 'light'
      ? resolvedTheme
      : 'light';

  const [initialContent, setInitialContent] = useState<
    PartialBlock[] | undefined | ''
  >(initialValue);

  // Load initial blocks from localStorage
  useEffect(() => {
    loadFromStorage().then((content) => {
      if (content !== undefined) {
        setInitialContent(content);
      }
    });
  }, []);

  // Create editor only after initial content is loaded
  const editor = useMemo(() => {
    if (initialContent === '') return undefined;
    return BlockNoteEditor.create({ initialContent });
  }, [initialContent]);

  useEffect(() => {
    if (editor && initialContent) {
      (async () => {
        const editorContent = await editor.blocksToMarkdownLossy(
          editor.document
        );
        if (editorContent) {
          setValue(editorContent);
        }
      })();
    }
  }, [editor, initialContent, setValue]);

  // Display loading state until editor is ready
  if (!editor) {
    return null;
  }

  async function convertToMarkdown() {
    const editorContent = await editor?.blocksToMarkdownLossy(editor.document);
    if (editorContent) {
      setValue(editorContent);
    }
  }

  return (
    <BlockNoteView
      className='h-full min-h-full py-2 px-4 md:px-14 bg-white dark:bg-[#1f1f1f] overflow-y-auto'
      editor={editor}
      theme={blockNoteTheme}
      onChange={() => {
        saveToStorage(editor.document);
        convertToMarkdown();
      }}
    />
  );
}
