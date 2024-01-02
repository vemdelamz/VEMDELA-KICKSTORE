import React, {useCallback, useEffect, useRef, useState}  from 'react';
import '../../styles/headersection.css'
import {
    motion, 
    useScroll,
    useTransform, 
} from 'framer-motion'
import PubPromo from '../assets/mp.mp4'

import LogoBanner from '../assets/logo/LOGO/PNG/Banner-logo.png'

import ShopIcon from '../assets/icons/cart.png'
import { Link } from '@remix-run/react';

import Audio from '../Pages/Audio'






const HeaderSection = () => {


    
      
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({ target: ref });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 2])
  return (
    <section className="hero-section">
        <video autoPlay loop muted plays-inline className="back-video">
                     <source src={PubPromo} type="video/mp4" />
                   
                 </video>
                 <div className="content">
                    
                    <motion.div
                         style={{ scale }}
                     >
                     <motion.div
                         style={{
                             scaleY: scrollYProgress
                         }}
                         />
                          <img className="bannerLogo" src={LogoBanner}/>
                     </motion.div>
                    
                 
                    
                     <div className="container-actions">
                         <a href="#search-aside" className="input">
                             <i class="ri-search-line"></i>
                             <span>Pesquise o seu Sneaker aqui!</span>
                         </a>
                         <div className="shop-btn">
                             <Link
                                to="/collections/snaekers"
                                className="btn-shop-content">
                                 <img src={ShopIcon} alt="Loja"/> 
                             </Link>
                   
                         </div>
                     </div>
                         
                         
       
                
         
                 </div>
    </section>
    
   
   
  )
}

export default HeaderSection;