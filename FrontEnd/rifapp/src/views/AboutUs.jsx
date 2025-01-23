import React from 'react';
import { motion } from 'framer-motion';
import HeaderHome from '../components/headerHome';
import Footer from '../components/footer'

const aboutUs = () => {
  return (
<>
    <HeaderHome/>
    
    <section className=''>

        {/* Estamos cambiando la manera en la que las personas ven las rifas */}       
        <div>
            <h1 className='title  lg:w-8/12 md:w-12/12 sm:w-10/12 xs:w-10/12 xxs:w-10/12 md m-auto    lg:text-7xl md:text-6xl sm:text-5xl xs:text-5xl xxs:text-3xl text-center text-primary-450 font-bold mt-9'>
                Estamos cambiando la
                manera en la que las 
                personas ven las rifas

            </h1>

            <div className="py-0.5 my-4 bg-primary-200 border-b w-6/12 m-auto text-white"></div>

            <p className='text lg:w-8/12 sm:w-10/12 xs:w-10/12 xxs:w-10/12 m-auto text-center text-primary-350 mt-4 lg:text-xl md:text-xl sm:text-lg xs:text-lg xxs:text-lg font-bold mb-4'>
                Estamos revolucionando el mercado de las rifas al ofrecer transparencia total
                en cada sorteo mediante tecnología verificable, máxima seguridad para nuestros
                usuarios con estrictos protocolos, accesibilidad desde cualquier lugar a través de
                nuestra plataforma online, una amplia variedad de premios para todos los gustos 
                y una experiencia de usuario intuitiva y fácil de usar.
            </p>
        </div>

{/* Nuestra Misión */}
<motion.div
        className='bg-primary-250 grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 items-center justify-center px-12 m-auto'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='title text-center text-6xl w-full sm:mt-4 xs:mt-4 xxs:mt-4 hover:transform hover:translate-y-3 transition-transform duration-200 cursor-pointer'>Nuestra Misión</h1>
        <p className='text lg:text-start md:text-start text-xl py-6 w-full sm:text-center xs:text-center xxs:text-center'>
          <span className='title '>Conectar sueños con oportunidades </span>
          Nuestra misión es democratizar el acceso a la posibilidad de ganar, ofreciendo una plataforma segura, transparente y emocionante que conecte a las personas con sus sueños. 
          Queremos ser el puente entre la ilusión y la realidad, brindando oportunidades únicas a través de rifas innovadoras y atractivas.
        </p>
      </motion.div>

      {/* Sobre Nosotros */}
      <motion.div
        className='bg-primary-350 grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 items-center justify-center px-12 m-auto'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className='lg:order-1 md:order-1 sm:order-2 xs:order-2 xxs:order-2 text lg:text-end md:text-start text-xl py-6 w-full sm:text-center xs:text-center xxs:text-center'>
          <span className='title '>Redefiniendo la emoción de ganar </span>
          En Rifapp, no solo vendemos boletos de rifa; creamos experiencias emocionantes y conectamos a personas con la posibilidad de ganar premios increíbles. Somos una plataforma innovadora que está revolucionando la forma en que se realizan las rifas, ofreciendo transparencia, seguridad y una experiencia de usuario inigualable.
        </p>
        <h1 className='lg:order-2 md:order-2 sm:order-1 xs:order-1 xxs:order-1 title text-center text-6xl w-full sm:mt-4 xs:mt-4 xxs:mt-4 hover:transform hover:translate-y-3 transition-transform duration-200 cursor-pointer'>Sobre Nosotros</h1>
      </motion.div>

      {/* Nuestra Fundación */}
      <motion.div
        className='bg-primary-250 grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 items-center justify-center px-12 m-auto'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, delay: 0.6 }}
      >
        <h1 className='title text-center text-6xl w-full sm:mt-4 xs:mt-4 xxs:mt-4  hover:transform hover:translate-y-3 transition-transform duration-200 cursor-pointer'>Nuestra Fundación</h1>
        <p className='text lg:text-start md:text-start text-xl py-6 w-full sm:text-center xs:text-center xxs:text-center'>
          <span className='title '>Una idea nacida de la pasión por la innovación </span>
          Rifapp nació de la visión de un grupo de emprendedores apasionados por la tecnología y la emoción de las rifas. Observamos la necesidad de modernizar un mercado tradicional, brindando una alternativa confiable y accesible para todos. Fundada en 2024, Rifapp se ha convertido rápidamente en un referente en el mundo de las rifas online.
        </p>
      </motion.div>


        {/* Cards*/}  
        <div className='my-6 grid lg:grid-cols-4 md:grid-cols-2 sm-grid-cols-2 xs:grid-cols-2 xxs:grid-cols-1 justify-center items-center gap-4 m-auto w-10/12'>
            
        {/* 1 */}
        <article
            class="w-full mx-w-full h-10/12 bg-primary-400 shadow p-4 space-y-2 rounded-xl hover:-translate-y-2 duration-300"
            >
        <svg viewBox="0 0 24 24" className='w-12' fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" fill="currentColor"/>
        </svg>

            <h1 className='title text-2xl'>María S.</h1>
            <p class="text-md w-full text-gray-400 text">
            "Rifapp es fácil de usar y muy confiable. ¡La variedad de premios es excelente! ¡La recomiendo mucho!"
            </p>
        </article>

        {/* 2 */}
        <article
            class="w-full mx-w-full h-10/12 bg-primary-400 shadow p-4 space-y-2 rounded-xl hover:-translate-y-2 duration-300"
            >
        <svg viewBox="0 0 24 24" className='w-12' fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" fill="currentColor"/>
        </svg>

            <h1 className='title text-2xl'>Juan P.</h1>
            <p class="text-md w-full text-gray-400 text">
            "Con Rifapp participo en rifas accesibles. ¡Los premios son increíbles y la plataforma intuitiva!"
            </p>
        </article>

        {/* 3 */}
        <article
            class="w-full mx-w-full h-10/12 bg-primary-400 shadow p-4 space-y-2 rounded-xl hover:-translate-y-2 duration-300"
            >
        <svg viewBox="0 0 24 24" className='w-12' fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" fill="currentColor"/>
        </svg>

            <h1 className='title text-2xl'>Ana G.</h1>
            <p class="text-md w-full text-gray-400 text">
            "Rifapp ofrece seguridad y gran facilidad para participar. ¡Una innovadora forma de ganar y promocionar!"
            </p>
        </article>        

        {/* 4 */}
        <article
            class="w-full mx-w-full h-10/12 bg-primary-400 shadow p-4 space-y-2 rounded-xl hover:-translate-y-2 duration-300"
            >
        <svg viewBox="0 0 24 24" className='w-12' fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" fill="currentColor"/>
        </svg>

            <h1 className='title text-2xl'>Carlos R.</h1>
            <p class="text-md w-full text-gray-400 text">
            "Rifapp es sencilla de usar y el soporte es muy bueno. ¡Ya gané un premio! ¡Estoy demasiado contento!"
            </p>
        </article>             
        
        
        </div>        

    </section>

    <Footer/>

    </>
  );
};

export default aboutUs;