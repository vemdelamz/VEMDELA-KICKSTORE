import React from 'react';

import {
    motion, 
   

} from 'framer-motion'

import '../../styles/aboutUs.css'

const AboutUs = () => {
  return (
    <section>
       <div className='container-about'>
        <div className="about-vemdela">

        <motion.h3 className="title-about"> O poder do estilo no <span>seus pés</span></motion.h3>
        <div className="buy-kick-content">
            <p className="text-about text-center">
            A VEM DE LÁ ® é uma loja de sneakers de Moçambique dedicada a uma cuidadosa seleção de sneakers mais cobiçados do momento. Dos clássicos até as últimas tendências, apostamos em modelos que são uma expressão única da sua personalidade. Com uma experiência de compra descomplicada, artigos com garantia de autenticidade e um sistema de pagamento amigável e cômodo, somos sim a sua melhor parceria nesta jornada de estilo e originalidade. 

            Bem vindo a VEM DE LÁ KICK STORE - a sua nova fonte de sneakers irresistíveis. 
            </p>
        </div>

        </div>

       </div>
    </section>
  )
}

export default AboutUs;