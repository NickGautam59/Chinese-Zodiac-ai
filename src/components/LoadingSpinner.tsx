import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
  );
};

export default LoadingSpinner;