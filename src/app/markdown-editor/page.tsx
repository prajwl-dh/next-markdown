'use client';
import CodeBlock from '@/components/content-export/CodeBlock';
import ContentExport from '@/components/content-export/ContentExport';
import MarkdownEditor from '@/components/markdown-editor/MarkdownEditor';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';

export default function MarkdownEditorPlayground() {
  const [value, setValue] = React.useState<string>(
    '# Welcome to Next Markdown Editor!\n\nUnleash your creativity with **Markdown**! This editor lets you write in Markdown syntax and instantly preview how it looks. Whether you\'re writing documents, creating notes, or drafting a blog, Markdown makes it easy and elegant.\n\n---\n\n## Markdown Syntax Guide\n\nExplore the power of Markdown with these examples:\n\n### 1. Headers\n\nHeaders organize your content. Use the `#` symbol followed by a space to define headers of different levels:\n\n# H1 Header (Largest)\n## H2 Header (Second Largest)\n### H3 Header (Medium)\n#### H4 Header (Smaller)\n##### H5 Header (Even Smaller)\n###### H6 Header (Smallest)\n\n---\n\n### 2. Emphasis\n\nAdd style to your text using simple symbols:\n\n- *Italic text* (use `*` or `_` around the text)\n- **Bold text** (use `**` or `__` around the text)\n- ***Bold and italic text*** (combine `***` or `___`)\n- ~~Strikethrough text~~ (use `~~` around the text)\n\n---\n\n### 3. Links\n\nMake your text interactive by adding links:\n\n- Inline link: [Visit Google](https://www.google.com)\n- Reference-style link:\n  ```markdown\n  [Markdown Guide][1]\n\n  [1]: https://www.markdownguide.org\n  ```\n\n---\n\n### 4. Images\n\nEmbed images to enhance your content:\n\n- Inline image: ![Placeholder Image](https://via.placeholder.com/150)\n- Reference-style image:\n  ![img](https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg) \n\n---\n\n### 5. Code Blocks\n\nWrite clean and readable code with syntax highlighting:\n\n#### Inline Code\nUse backticks for inline code: `const x = 10;`\n\n#### Block Code\n```javascript\n// Example JavaScript Code\nfor (let i = 0; i < 5; i++) {\n  console.log(`Iteration ${i}`);\n}\n```\n\n---\n\n### 6. Tables\n\nCreate structured data tables:\n\n| Feature      | Markdown Example        | Description             |\n|--------------|--------------------------|-------------------------|\n| Header       | `| Header | Title |`     | Defines table headers.  |\n| Row          | `| Data   | Entry |`     | Adds a table row.       |\n| Alignment    | `:--` or `--:` or `:-:` | Aligns content left, right, or center. |\n\nExample:\n\n| Syntax      | Description | Example           |\n|-------------|-------------|-------------------|\n| Bold        | `**text**`  | **text**          |\n| Italic      | `*text*`    | *text*            |\n\n---\n\n### 7. Lists\n\nOrganize your content with lists:\n\n#### Unordered Lists\n- Item 1\n  - Subitem 1\n    - Sub-subitem 1\n- Item 2\n\n#### Ordered Lists\n1. First Item\n2. Second Item\n   1. Subitem A\n   2. Subitem B\n\n---\n\n### 8. Blockquotes\n\nHighlight important information:\n\n> "Markdown is a lightweight markup language for creating formatted text using a plain-text editor."\n\n---\n\n### 9. Horizontal Rules\n\nSeparate sections with horizontal lines:\n\nUse three or more dashes `---` or asterisks `***`:\n\n---\n\n### 10. Task Lists\n\nTrack progress with task lists:\n\n- [x] Write Markdown content\n- [ ] Preview the result\n- [ ] Publish your document\n\n---\n\n### 11. Escaping Special Characters\n\nUse a backslash `` to escape special characters:\n\n*Literal asterisks* instead of *italics*.\n\n---\n\nFeel free to experiment, add your own content, and make the most of Markdown!\n'
  );

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
        <MarkdownEditor value={value} setValue={setValue} />
      </div>
    </div>
  );
}
