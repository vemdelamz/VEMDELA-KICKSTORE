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
                         <motion.div className="shop-btn" whileTap={{ scale: 0.9 }} >
                             <Link
                                to="/collections/sneakers"
                                className="btn-shop-content">
                                    <span>Seu sneaker ta aqui</span>
                                 <img src={ShopIcon} alt="Loja"/> 
                             </Link>
                   
                         </motion.div>
                     </div>
                         
                         
       
                
         
                 </div>
    </section>
    
   
   
  )
}

export default HeaderSection;