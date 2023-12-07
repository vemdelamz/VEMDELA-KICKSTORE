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

        <motion.h3 className="title-about">Seu novo <span>Sneaker</span> esta aqui!</motion.h3>
        <div className="buy-kick-content">
            <p className="text-about text-center">
                Somos um Marketplace de venda de calçados, exclusivamente para Moçambique, e temos como objetivo
                oferecer para os nossos usuários um serviço cômodo, seguro e flexível. Nosso foco é entregar uma experiência
                única e garantir autenticidade dos nossos artigos.
            </p>
        </div>

        </div>

       </div>
    </section>
  )
}

export default AboutUs;