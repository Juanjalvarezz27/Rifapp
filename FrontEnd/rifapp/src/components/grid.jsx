import React from 'react';
import Login from './login';
import Carrusel from './carrusel';  

const GridComponent = () => {
  return (
    <div className="flex justify-center items-center mt-9 px-5 " >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl">
        
       <Carrusel />
       <Login />

        
      </div>
    </div>
  );
};

export default GridComponent;