import Image from 'next/image';
import React from 'react';

export interface CardProps {
    content: React.ReactNode | string;
    image?: string;
    altImage?: string;
    imageWidth?: number;
    imageHeight?: number;
}
export const Card: React.FC<CardProps> = ({
    content,
    image,
    altImage,
    imageHeight = 430,
    imageWidth = 600,
}) => {
    return (
        <div className="flex mb-5 bg-white flex-col mx-5 rounded-t-2xl overflow-hidden border-greenQ border-4">
            {image && (
                <Image
                    alt={altImage}
                    src={image}
                    width={imageWidth}
                    height={imageHeight}
                />
            )}
            <div className="p-5">{content}</div>
        </div>
    );
};

export default Card;
