import React from 'react';

const ProgressBar = ({ progress, height = 4, className = "" }) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-${height} ${className}`}>
      <div 
        className="progress-bar-fill"
        style={{width: `${progress}%`}}
      />
    </div>
  );
};

export default ProgressBar; 