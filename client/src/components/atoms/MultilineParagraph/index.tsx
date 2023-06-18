import React, { useRef, useEffect } from 'react';

const MultilineEllipsis: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      const lineHeight = parseInt(getComputedStyle(textElement).lineHeight as string, 10);
      const maxHeight = lineHeight * 3; // Maximum height for 3 lines
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget felis vel
      ante convallis posuere. Nullam at pellentesque lectus, vitae ultricies nulla.
      Maecenas at tempor libero.
    </div>
  );
};

export default MultilineEllipsis;
