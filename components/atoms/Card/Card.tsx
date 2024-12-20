import Image from 'next/legacy/image';
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
    <div className="mx-5 mb-5 flex flex-col overflow-hidden rounded-t-2xl border-4 border-greenQ bg-white">
      {image && (
        <Image alt={altImage} src={image} width={imageWidth} height={imageHeight} />
      )}
      <div className="p-5">{content}</div>
    </div>
  );
};

export default Card;
