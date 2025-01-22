import React, { useState, useEffect } from 'react';

function Carrusel() {
  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <div className="grid gap-4 ">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
          alt="Imagen fija"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className={`transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-50'}`}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={src}
              alt={`Imagen ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrusel;