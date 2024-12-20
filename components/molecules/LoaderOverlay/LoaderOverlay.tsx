import Spinner from '@/components/atoms/Spinner/Spinner';
import React from 'react';

const LoadingOverlay: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
      <Spinner size="lg" />
    </div>
  );
};

export default LoadingOverlay;
