'use client';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import useScreenWidth from '@/hooks/useScreenWidth';

export default function MDXPlayground() {
  const width = useScreenWidth();

  if (width === 0) return null;

  return (
    <ResizablePanelGroup direction={width < 992 ? 'vertical' : 'horizontal'}>
      <ResizablePanel defaultSize={width < 992 ? 60 : 50}>
        Editor
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={width < 992 ? 40 : 50}>
        Preview
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
