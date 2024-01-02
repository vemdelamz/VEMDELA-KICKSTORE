import React from 'react'
import Tshirt1 from '../assets/images/ts.jpg'
import Tshirt2 from '../assets/images/tsh.jpg'


function RecommendedContent() {
    return (
     <section className='container-recomend'>

        <div className='recomend-content'>
            <div className='lado-A'>
                <div>
                    <a href='/collections/sneakers'>
                    <img className='img' src={Tshirt1}/>
                    </a>
                </div>
                <div>
                <a href='/collections/sport'>
                        <img className='img'  src={Tshirt2}/>
                    </a>
                   
                </div>
            </div>
            <div className='lado-B'> 
            <a href='/collections/tshirts'>
                    <img className='img2'  src={Tshirt1}/>
                </a>
            </div>
        </div>
    
     </section>
    );
  }


  export default RecommendedContent