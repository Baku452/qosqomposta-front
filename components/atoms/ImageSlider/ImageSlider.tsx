/* eslint-disable @next/next/no-img-element */
import { ImageWeb } from '@/types/mainTypes';
import { useEffect, useRef, useState } from 'react';
import LazyLoad from 'react-lazyload';
import styles from './ImageSlider.module.scss';
import { MdOutlineArrowBackIos } from 'react-icons/md';

// StoryBookComponent
export interface ImageSilderProps {
    images: ImageWeb[];
    width: number;
    height: number;
    arrowColor?: string;
    arrowSize?: number;
    borderRadius?: boolean;
}

const ImageSlider: React.FC<ImageSilderProps> = ({
    images,
    width,
    height,
    arrowColor,
    arrowSize,
    borderRadius,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const sliderContainerRef = useRef(null);
    const sliderRef = useRef(null);
    const boxContainer = useRef(null);

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1,
        );
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
    };
    const handleMouseDown = e => {
        setIsDragging(true);
        setStartX(e.clientX - sliderRef.current.offsetLeft);
    };

    const handleMove = e => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.clientX - sliderRef.current.offsetLeft;

        let translateX = x - startX;

        if (currentIndex === 0 && translateX > 0) {
            translateX = 0;
        }
        sliderContainerRef.current.style.transform = `translateX(-${
            currentIndex * 100
        }%) translateX(${translateX}px)`;

        sliderContainerRef.current.style.cursor = `grabbing`;
    };

    const handleMouseUp = e => {
        setIsDragging(false);
        sliderContainerRef.current.style.cursor = `grab`;
        const sliderWidth = sliderRef.current.offsetWidth;
        const dragThreshold = sliderWidth * 0.05;
        const dragDirection = startX - (e.clientX - sliderRef.current.offsetLeft);

        if (dragDirection > dragThreshold && currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (dragDirection < dragThreshold && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            sliderContainerRef.current.style.transform = `translateX(-${
                currentIndex * 100
            }%)`;
        }
    };

    const handleMouseLeave = e => {
        setIsDragging(false);
        sliderContainerRef.current.style.transform = `translateX(-${
            currentIndex * 100
        }%)`;
    };

    const handleTouchStart = e => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX - sliderRef.current.offsetLeft);
    };

    const handleTouchMove = e => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].clientX - sliderRef.current.offsetLeft;

        let translateX = x - startX;

        if (currentIndex === 0 && translateX > 0) {
            translateX = 0;
        }
        sliderContainerRef.current.style.transform = `translateX(-${
            currentIndex * 100
        }%) translateX(${translateX}px)`;
        sliderContainerRef.current.style.cursor = `grabbing`;
    };

    const handleTouchEnd = e => {
        setIsDragging(false);
        sliderContainerRef.current.style.cursor = `grab`;
        const sliderWidth = sliderRef.current.offsetWidth;
        const dragThreshold = sliderWidth * 0.05;

        const dragDirection =
            startX - (e.changedTouches[0].clientX - sliderRef.current.offsetLeft);

        if (dragDirection > dragThreshold && currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (dragDirection < dragThreshold && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            sliderContainerRef.current.style.transform = `translateX(-${
                currentIndex * 100
            }%)`;
        }
    };

    useEffect(() => {
        sliderRef.current.style.maxWidth = `${width - arrowSize * 3}px`;
        boxContainer.current.style.maxWidth = `${width}px`;
        sliderRef.current.style.height = `${height}px`;
    }, [width, height]);

    useEffect(() => {
        sliderContainerRef.current.style.transform = `translateX(-${
            currentIndex * 100
        }%)`;
    }, [currentIndex]);

    return (
        <div ref={boxContainer} className="m-auto relative">
            <div
                ref={sliderRef}
                className={`${styles.imageSlider} ${borderRadius ? 'rounded-3xl' : ''}`}
            >
                <div
                    className={styles.sliderContainer}
                    ref={sliderContainerRef}
                    onMouseDown={e => handleMouseDown(e)}
                    onMouseMove={e => handleMove(e)}
                    onMouseUp={e => handleMouseUp(e)}
                    onMouseLeave={e => handleMouseLeave(e)}
                    onTouchMove={e => handleTouchMove(e)}
                    onTouchStart={e => handleTouchStart(e)}
                    onTouchEnd={e => handleTouchEnd(e)}
                >
                    {images.map(image => {
                        return (
                            <img
                                key={image.urlImage}
                                src={image.urlImage}
                                alt={`Image ${currentIndex}`}
                            />
                        );
                    })}
                </div>
            </div>
            <div className={styles.controls}>
                <button onClick={handlePrevClick}>
                    <MdOutlineArrowBackIos
                        size={`${arrowSize ? arrowSize : ''}`}
                        color={`${arrowColor ? arrowColor : ''}`}
                    />
                </button>

                <button onClick={handleNextClick}>
                    <MdOutlineArrowBackIos
                        size={`${arrowSize ? arrowSize : ''}`}
                        color={`${arrowColor ? arrowColor : ''} `}
                        className="rotate-180"
                    />
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;
