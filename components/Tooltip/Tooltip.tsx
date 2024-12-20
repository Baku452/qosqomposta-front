import React, { ReactNode, useState } from 'react';
import { useFloating, offset, flip, shift, Middleware } from '@floating-ui/react-dom';

interface TooltipProps {
  text: string;
  children: ReactNode;
  className?: string;
  tooltipClassName?: string;
  duration?: number;
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  className = '',
  tooltipClassName = '',
  duration = 200, // Default animation duration in ms
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y, refs, strategy } = useFloating<HTMLDivElement>({
    middleware: [offset(8), flip(), shift()] as Middleware[],
  });

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <div
        ref={refs.setReference}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
      <div
        ref={refs.setFloating}
        className={`absolute z-[1000] whitespace-nowrap rounded-[4px] bg-black px-[10px] py-[6px] text-xs text-white transition-all ease-in-out ${isHovered ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'} ${tooltipClassName} `}
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
          transitionDuration: `${duration}ms`,
          pointerEvents: 'none',
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
