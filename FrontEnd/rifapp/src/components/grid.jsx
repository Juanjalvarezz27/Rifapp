import React from 'react';
import Login from './login';
import Carrusel from './carrusel';  

const GridComponent = () => {
  return (
    <div className="flex justify-center items-center mt-6 px-5 " >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl ">
        
       <Carrusel />
       <Login />

        
      </div>
    </div>
  );
};

export default GridComponent;