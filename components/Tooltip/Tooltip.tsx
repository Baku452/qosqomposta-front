import React, { ReactNode, useState } from 'react';
import { useFloating, offset, flip, shift } from '@floating-ui/react-dom';

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
  duration = 200,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y, refs, strategy } = useFloating({
    placement: 'top',
    middleware: [offset(8), flip(), shift({ padding: 8 })],
  });

  return (
    <div className={`inline-block ${className}`}>
      <div
        ref={refs.setReference}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
      {isHovered && (
        <div
          ref={refs.setFloating}
          className={`fixed z-[1000] whitespace-normal break-words rounded-md bg-black px-3 py-2 text-xs text-white shadow-lg transition-transform duration-${duration} ease-out ${tooltipClassName}`}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            transform: 'translate(0, -8px)',
            opacity: isHovered ? 1 : 0,
            pointerEvents: 'none',
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
