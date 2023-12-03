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
                         <a href="#search-aside" className="input-search">
                             <i class="ri-search-line"></i>
                             <input type="search" placeholder="Procure seu sneaker aqui!"/>
                         </a>
                         <div className="shop-btn">
                             <button  className="btn-shop-content">
                                 <img src={ShopIcon} alt="Loja"/> 
                             </button>
                         </div>
                     </div>
                         
                         
       
                
                  
                 </div>
    </section>
    
   
   
  )
}

export default HeaderSection;