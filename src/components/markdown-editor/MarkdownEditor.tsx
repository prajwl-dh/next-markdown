'use client';
import MDEditor from '@uiw/react-md-editor';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import rehypeSanitize from 'rehype-sanitize';

const LOCAL_STORAGE_KEY = 'markdownEditorHistory';

export default function MarkdownEditor({
  value,
  setValue,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until the component is mounted to access the theme
  useEffect(() => {
    setMounted(true);

    // Load value from local storage on initial render
    const storedValue = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedValue?.trim()) {
      setValue(storedValue);
    }
  }, []);

  // Save the value to local storage whenever it changes
  const handleValueChange = (newValue: string | undefined) => {
    const updatedValue = newValue || '';
    setValue(updatedValue);
    localStorage.setItem(LOCAL_STORAGE_KEY, updatedValue);
  };

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
      className='h-full min-h-full w-full md:px-14 scroll-smooth'
      value={value}
      onChange={handleValueChange}
      previewOptions={{
        rehypePlugins: [[rehypeSanitize]],
      }}
    />
  );
}
