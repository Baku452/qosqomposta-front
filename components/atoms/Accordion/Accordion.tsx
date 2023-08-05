// Accordion.tsx
import React, { useState, useRef } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import styles from './Accordion.module.scss';

// StoryBookComponent
interface Props {
  defaultOpen?: boolean;
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<Props> = ({ defaultOpen = false, title, children }) => {
  const [show, setShow] = useState(defaultOpen);
  const contentEl = useRef<HTMLDivElement>(null);
  return (
    <div className={styles.accordion}>
      <button
        className={`font-medium py-2 px-4 rounded-t transition-all duration-150 ${
          show ? 'bg-greenQ text-white' : 'bg-white text-greenQ'
        }`}
        onClick={() => setShow(!show)}
      >
        <MdArrowForwardIos
          className={`${show ? styles.arrowOpen : styles.arrowClosed}`}
        />
        <h4>{title}</h4>
      </button>
      <div
        className={`${styles.notShow} ${show && styles.contentShow}`}
        ref={contentEl}
        style={
          show && contentEl.current
            ? { height: contentEl.current && contentEl.current.scrollHeight }
            : { height: '0px' }
        }
      >
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
