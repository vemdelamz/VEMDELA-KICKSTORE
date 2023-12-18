import React from 'react';
import HeaderSection from '~/src/Pages/HeaderSection';
import AboutUs from '~/src/Pages/AboutUs';
import ServiceContent from '~/src/Pages/Service';
import Section from './Section';

// import { Container } from './styles';

const UILayout = () => {
  return (
   <>
   <HeaderSection/>
   
   <Section>
    <AboutUs/>
   </Section>
   <Section>
     <ServiceContent/>
   </Section>
   </>
  )
}

export default UILayout;