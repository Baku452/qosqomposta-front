import Spinner from '@/components/atoms/Spinner/Spinner';
import React from 'react';

const LoadingOverlay: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
};

export default LoadingOverlay;
