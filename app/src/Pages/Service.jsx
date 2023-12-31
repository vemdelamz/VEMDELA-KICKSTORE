import React from 'react';
import DeliveryIcon from '../assets/icons/delivery.png'
import QualityIcon from '../assets/icons/quality.png'
import PaymentIcon from '../assets/icons/payment.png'
import EcologyIcon from '../assets/icons/eco.png'

import '../../styles/service.css'

const ServiceContent = () => {
  return (
    <section className='service'>
        <div className='cards-service-content'>
            <div className='card-service'>
                <img src={DeliveryIcon} alt={DeliveryIcon}/>
                <div className='text-content'>
                    <h2 className='titlle-service'>ENTREGAS</h2>
                    <p className='desc-service'>Em todo território nacional entre 7 á 20 dias.</p>
                </div>
            </div>
            <div className='card-service'>
                <img src={QualityIcon} alt={QualityIcon}/>
                <div className='text-content'>
                    <h2 className='titlle-service'>QUALIDADE</h2>
                    <p className='desc-service'>Artigos com garantiade autenticidade.</p>
                </div>
            </div>
            <div className='card-service'>
                <img src={PaymentIcon} alt={PaymentIcon}/>
                <div className='text-content'>
                    <h2 className='titlle-service'>PAGAMENTOS</h2>
                    <p className='desc-service'>Pagamentos em M-pesa, Mastercard e Visa.</p>
                </div>
            </div>
            <div className='card-service'>
                <img src={EcologyIcon} alt={EcologyIcon}/>
                <div className='text-content'>
                    <h2 className='titlle-service'>ECOLÓGICO</h2>
                    <p className='desc-service'>Espaço para revenda de artigos usados.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceContent;