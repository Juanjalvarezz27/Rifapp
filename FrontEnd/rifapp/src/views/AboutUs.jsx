import React from 'react';
import { motion } from 'framer-motion';
import HeaderHome from '../components/headerHome';
import Footer from '../components/footer'

const aboutUs = () => {
  return (
<>
    <HeaderHome/>
    
    <section className=''>

        <div>
            <h1 className='title lg:text-7xl md:text-6xl sm:text-5xl xs:text-5xl xxs:text-3xl text-center text-primary-450 font-bold mt-9'>
                <span>Estamos cambiando la </span> <br />
                <span>manera en la que las </span>  <br />
                <span>personas ven las rifas</span>

            </h1>

            <div className="py-0.5 my-4 bg-primary-200 border-b w-6/12 m-auto text-white"></div>

            <p className='text text-center text-primary-350 mt-4 text-xl font-bold mb-4'>
                <span>Estamos revolucionando el mercado de las rifas al ofrecer transparencia total</span> <br />
                <span>en cada sorteo mediante tecnología verificable, máxima seguridad para nuestros</span> <br />
                <span>usuarios con estrictos protocolos, accesibilidad desde cualquier lugar a través de</span> <br />
                <span>nuestra plataforma online, una amplia variedad de premios para todos los gustos </span> <br />
                <span>y una experiencia de usuario intuitiva y fácil de usar.</span> 
            </p>
        </div>

    </section>

    <Footer/>

    </>
  );
};

export default aboutUs;