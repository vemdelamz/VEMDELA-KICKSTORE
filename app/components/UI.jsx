import React from 'react';
import HeaderSection from '~/src/Pages/HeaderSection';
import AboutUs from '~/src/Pages/AboutUs';
import ServiceContent from '~/src/Pages/Service';
import GifScroll from './ScrollGif';

// import { Container } from './styles';

const UILayout = () => {
  return (
   <>
   <HeaderSection/>
   <AboutUs/>
   <ServiceContent/>
   </>
  )
}

export default UILayout;