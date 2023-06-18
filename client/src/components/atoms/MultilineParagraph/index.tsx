import React, { useRef, useEffect, ReactNode } from 'react';

interface MultilineEllipsisProps {
  children: ReactNode;
}

const MultilineEllipsis: React.FC<MultilineEllipsisProps> = ({ children }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      const lineHeight = parseInt(getComputedStyle(textElement).lineHeight as string, 10);
      const maxHeight = lineHeight * 4; // Maximum height for 3 lines
      const textHeight = textElement.clientHeight;

      if (textHeight > maxHeight) {
        const textContent = textElement.textContent as string;
        let truncatedText = textContent;

        while (textElement.clientHeight > maxHeight) {
          truncatedText = truncatedText.slice(0, -1);
          textElement.textContent = truncatedText + '...';
        }
      }
    }
  }, []);

  return (
    <div className="multiline-ellipsis" ref={textRef}>
      {children}
    </div>
  );
};

export default MultilineEllipsis;
