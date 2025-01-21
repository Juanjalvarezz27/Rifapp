import React from 'react';

const GridComponent = () => {
  return (
    <div className="flex justify-center items-center mt-6 px-5 " >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl ">
        
        <div className="bg-blue-500 h-64 flex items-center justify-center text-white rounded-lg">
          SLIDER
        </div>

        <div className="bg-red-500 h-32 flex items-center justify-center text-white rounded-lg">
          LOGIN
        </div>
      </div>
    </div>
  );
};

export default GridComponent;