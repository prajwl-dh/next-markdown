'use client';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import useScreenWidth from '@/hooks/useScreenWidth';
import MarkdownEditor from '../markdown-editor/MarkdownEditor';

export default function MDXPlayground() {
  const width = useScreenWidth();

  if (width === 0) return null;

  return (
    <ResizablePanelGroup direction={width < 992 ? 'vertical' : 'horizontal'}>
      <ResizablePanel className='h-full' defaultSize={width < 992 ? 60 : 50}>
        <MarkdownEditor />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className='h-full' defaultSize={width < 992 ? 40 : 50}>
        Preview
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
