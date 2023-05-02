import React from 'react';

const LoadingOverlay: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="animate-spin  border-gray-200 border-4 rounded-full w-12 h-12"></div>
        </div>
    );
};

export default LoadingOverlay;
