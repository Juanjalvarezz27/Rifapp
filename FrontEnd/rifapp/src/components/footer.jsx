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
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-between items-center bg-primary-200 text-white-500'>
        
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
                  className="flex items-center justify-between w-full p-5 font-medium bg-primary-150  border border-b-0 border-primary-200 rounded-t-xl hover:bg-primary-300 hover:text-white gap-3"
                  onClick={() => handleToggle(1)}
                  aria-expanded={openIndex === 1}
                  aria-controls="accordion-collapse-body-1"
                >
                  <span>What is Flowbite?</span>
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
                  <p className="mb-2 ">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                  <p className="">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                </div>
              </div>


              <h2 id="accordion-collapse-heading-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full bg-primary-350 p-5 font-medium text-white-500 border border-b-0 border-primary-200  hover:bg-primary-300 hover:text-white gap-3"
                  onClick={() => handleToggle(2)}
                  aria-expanded={openIndex === 2}
                  aria-controls="accordion-collapse-body-2"
                >
                  <span>Is there a Figma file available?</span>
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
                  <p className="mb-2 ">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                  <p className="">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                </div>
              </div>

              <h2 id="accordion-collapse-heading-3">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 bg-primary-150 font-medium  border border-b-0 border-primary-200 rounded-b-xl hover:bg-primary-300 hover:text-white gap-3"
                  onClick={() => handleToggle(3)}
                  aria-expanded={openIndex === 3}
                  aria-controls="accordion-collapse-body-3"
                >
                  <span>What are the differences between Flowbite and Tailwind UI?</span>
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
                  <p className="mb-2">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                  <p className="mb-2 ">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                  <p className="mb-2 ">Learn more about these technologies:</p>
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