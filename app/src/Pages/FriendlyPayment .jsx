import React from 'react';
import '../../styles/friendlypayment.css'
import Selo from '../assets/images/seloPA.png'

// import { Container } from './styles';

const FriendlyPayment = () => {
  return (
    <section>
      <section className='payment-container-section'>
      <div className='details-payment-content'>
                        <div className="text-content">
                        <h1 className="extra-title"><span>Pagamento</span><br></br> amigavel</h1>
                            <p className="text-desc-service">  
                                O pagamento amigável é um novo sistema de pagamento criado pela VEM DE LÁ®
                                estabelecendo uma conexão de confiança com nosso cliente.
                                O PA (pagamento amigável) possibilita parcelar uma sapatilha, 
                                sem necessidade de cartão de crédito. 
                                Para finalizar sua compra será exigido 50% do valor total do item, e o restante do valor poderá ser renegociado em parcelas. 
                                Conheça como funciona.
                            .<br></br>
                            </p>
                           
                  </div>
                  <div>
                  <div className="extra-selo text-end">
                            <img src={Selo}/>
                        </div>
                  </div>
      </div>
    </section>
    <div className="soon-content">
    <span className="soon-title">CONHECA!</span>
    <span className="soon-title">CONHECA!</span>
    <span className="soon-title">CONHECA!</span>
    <span className="soon-title">CONHECA!</span>
   
  
  

</div> 
    </section>
  )
}

export default FriendlyPayment;