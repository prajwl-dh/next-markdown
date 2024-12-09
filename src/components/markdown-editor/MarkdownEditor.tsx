'use client';
import MDEditor from '@uiw/react-md-editor';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import rehypeSanitize from 'rehype-sanitize';

export default function MarkdownEditor() {
  const [value, setValue] = React.useState('**Hello world!!!**');
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until the component is mounted to access the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Resolve the effective theme
  const effectiveTheme = theme === 'system' ? systemTheme : theme;

  // Ensure the theme is either "dark" or "light"
  const validTheme =
    effectiveTheme === 'dark' || effectiveTheme === 'light'
      ? effectiveTheme
      : undefined;

  // Prevent rendering until the theme is determined
  if (!mounted) {
    return null;
  }

  return (
    <MDEditor
      data-color-mode={validTheme}
      className='h-full min-h-full w-full'
      value={value}
      onChange={(value) => {
        setValue(value || ''); // Ensure value is a string
      }}
      previewOptions={{
        rehypePlugins: [[rehypeSanitize]],
      }}
    />
  );
}
