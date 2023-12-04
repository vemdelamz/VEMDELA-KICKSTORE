import React from 'react'
import Nike from '../src/assets/logo/nike.png'
import Adidas from '../src/assets/logo/adidas.png'
import Jordan from '../src/assets/logo/jordan.png'
import Converse from '../src/assets/logo/converse.png'
import Puma from '../src/assets/logo/puma.png'
import NewBalance from '../src/assets/logo/newb.png'
import Reebok from '../src/assets/logo/reeb.png'
import Timberland from '../src/assets/logo/timberland.png'

import '../styles/swipperStyle.css'

export const SwipperPartner = () => {
  return (
   <section className="partner-section"> 
   <h2 className='title'>MARCAS</h2>
     <div className="partner-cards">
        <div className="card-partner"> 
            <img src={Nike} alt="Nike"/>
        </div>
        <div className="card-partner"> 
            <img src={Adidas} alt="Nike"/>
        </div>
        <div className="card-partner"> 
            <img src={Jordan} alt="Nike"/>
        </div>
        <div className="card-partner"> 
            <img src={Converse} alt="Nike"/>
        </div>
        <div className="card-partner"> 
            <img src={Puma} alt="Nike"/>
        </div>
        <div className="card-partner"> 
            <img src={NewBalance} alt="Nike"/>
        </div>
        <div className="card-partner"> 
            <img src={Reebok} alt="Nike"/>
        </div>
        <div className="card-partner"> 
            <img src={Timberland} alt="Nike"/>
        </div>
    </div>
   </section>

  )

}