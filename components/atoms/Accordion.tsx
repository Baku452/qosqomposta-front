// Accordion.tsx
import React, { useState, useRef } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import styles from './Accordion.module.scss';

interface Props {
    title: string;
    children: React.ReactNode;
}

const Accordion: React.FC<Props> = ({ title, children }) => {
    const [show, setShow] = useState(false);
    const contentEl = useRef<HTMLDivElement>();
    return (
        <div className={styles.accordion}>
            <button
                className="bg-white text-gray-800 font-medium py-2 px-4 rounded-t"
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
                    show
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
