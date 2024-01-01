import React from 'react'
import Tshirt1 from '../assets/images/ts.jpg'
import Tshirt2 from '../assets/images/tsh.jpg'


function RecommendedContent() {
    return (
     <section className='container-recomend'>

        <div className='recomend-content'>
            <div className='lado-A'>
                <div>
                    <img className='img' src={Tshirt1}/>
                </div>
                <div>
                    <img className='img'  src={Tshirt2}/>
                </div>
            </div>
            <div className='lado-B'> 
                <img className='img2'  src={Tshirt1}/>
            </div>
        </div>
    
     </section>
    );
  }


  export default RecommendedContent