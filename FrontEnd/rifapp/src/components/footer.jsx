import React, { useState, useRef } from 'react';
import logo from '../../public/trebol.png';

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    if (contentRefs.current[index]) {
      const top = contentRefs.current[index].getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='text grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-between items-center bg-primary-200 text-white-500'>
        
        <div className="flex items-center justify-center w-full md:w-auto md:mt-5 sm:mt-5 xs:mt-5 xxs:mt-5">
          <p className='text-6xl font-bold title text-white-700'>RIFAPP</p>
          <img src={logo} alt="trebol" className='w-16 md:mt-1 sm:-mt-1 xs:-mt-1 xxs:-mt-1' />
        </div>

        <footer className="p-4">
          <div className="w-full md:w-full mt-4 md:mt-0 lg:p-4">
            <div id="accordion-collapse" data-accordion="collapse">

              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium bg-primary-150 border border-b-0 border-primary-200 rounded-t-xl hover:bg-primary-300 hover:text-white gap-3"
                  onClick={() => handleToggle(1)}
                  aria-expanded={openIndex === 1}
                  aria-controls="accordion-collapse-body-1"
                >
                  <span>Contactanos!</span>
                  <svg className={`w-3 h-3 ${openIndex === 1 ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div
                ref={el => contentRefs.current[1] = el}
                id="accordion-collapse-body-1"
                className={`overflow-hidden transition-all duration-1000 ease-in-out ${openIndex === 1 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div className="p-5 border border-b-0 border-t-0 border-primary-300 bg-primary-250">
                  <p className="mb-2">Si tienes alguna pregunta, comentario o necesitas más información sobre nuestras rifas, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.</p>
                  <div className="flex gap-6">
                    <p className='text-blue-200 cursor-pointer'>info@rifapp.com</p>
                    <p className='text-blue-400 cursor-pointer'>+57 312 123 4567</p>


                  </div>
                </div>
              </div>

              <h2 id="accordion-collapse-heading-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full bg-primary-350 p-5 font-medium text-white-500 border border-b-0 border-primary-200 hover:bg-primary-300 hover:text-white gap-3"
                  onClick={() => handleToggle(2)}
                  aria-expanded={openIndex === 2}
                  aria-controls="accordion-collapse-body-2"
                >
                  <span>¿Cómo funciona RIFAPP?</span>
                  <svg className={`w-3 h-3 ${openIndex === 2 ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div
                ref={el => contentRefs.current[2] = el}
                id="accordion-collapse-body-2"
                className={`overflow-hidden transition-all duration-1000 ease-in-out ${openIndex === 2 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                aria-labelledby="accordion-collapse-heading-2"
              >
                <div className="p-5 border border-b-0 border-t-0 border-primary-300 bg-primary-250">
                  <p className="mb-2">RIFAPP permite a los usuarios comprar boletos para rifas de forma sencilla. Una vez que se cierra la rifa, se realiza un sorteo y se anuncian los ganadores.</p>
                </div>
              </div>

              <h2 id="accordion-collapse-heading-3">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 bg-primary-150 font-medium border border-b-0 border-primary-200 rounded-b-xl hover:bg-primary-300 hover:text-white gap-3"
                  onClick={() => handleToggle(3)}
                  aria-expanded={openIndex === 3}
                  aria-controls="accordion-collapse-body-3"
                >
                  <span>¿Qué premios puedo ganar?</span>
                  <svg className={`w-3 h-3 ${openIndex === 3 ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div
                ref={el => contentRefs.current[3] = el}
                id="accordion-collapse-body-3"
                className={`overflow-hidden transition-all duration-1000 ease-in-out ${openIndex === 3 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                aria-labelledby="accordion-collapse-heading-3"
              >
                <div className="p-5 border border-t-0 border-primary-300 bg-primary-250 text-white-500 rounded-b-xl">
                  <p className="mb-2">En RIFAPP, ofrecemos una variedad de premios que pueden incluir desde productos electrónicos hasta experiencias únicas. Cada rifa tiene sus propios premios, así que asegúrate de revisar los detalles.</p>
                  <p className="mb-2">¡No te pierdas la oportunidad de ganar algo increíble!</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;