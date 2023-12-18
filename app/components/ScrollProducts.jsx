import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';

import '../styles/product.css'
import img1 from '../src/assets/images/vans-banner.png'

const data =[
  {
    name:"NIKE",
    img:"https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/461d3a25-dc8f-4a1f-943a-7f5fa7b1ee40/air-jordan-1-x-union-x-bephies-beauty-supply-summer-96-fd2565-100-release-date.jpg",
    price:"12 000 MZN"
  },
  {
    name:"NIKE",
    img:"https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/461d3a25-dc8f-4a1f-943a-7f5fa7b1ee40/air-jordan-1-x-union-x-bephies-beauty-supply-summer-96-fd2565-100-release-date.jpg",
    price:"12 000 MZN"
  },
]

export default function ScrollProducts () {
  const [ slidesPerView, setSlidesPerViewPreview ] = useState(3)

  
  return (
   <section className="slides-content" >
    <Swiper
        pagination={{clickable:true}}
        navigation
        slidesPerView={slidesPerView}    
      >
        {
          data.map((product)=>(
            <SwiperSlide key={product.id} className="swiper-slide" >
              <div className='card-items'>
                <div className='card-arrive'> 
                    <div className='imgs-content'>
                      <img src={product.img}/>
                    </div>
                    </div>
                    <div className='details-content'>
                      <p>{product.name}</p>
                      <p>{product.price}</p>
                    </div>
                </div>
              </SwiperSlide>
              ))}
    </Swiper>
   </section>
  );
};