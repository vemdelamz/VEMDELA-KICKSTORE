import React from 'react'
import Tshirt1 from '../assets/images/ts.jpg'
import Sport from '../assets/images/sport.jpg'
import Kick from '../assets/images/kick.jpg'


function RecommendedContent() {
    return (
     <section className='container-recomend'>

        <div className='recomend-content'>
            <div className='lado-A'>
                <div>
                    <a href='/collections/sneakers'>
                    <img className='img'src={Kick} />
                    </a>
                </div>
                <div>
                <a href='/collections/sport'>
                        <img className='img'  src={Sport}/>
                    </a>
                   
                </div>
            </div>
            <div className='lado-B'> 
            <a href='/collections/tshirts'>
                    <img className='img2' src={Tshirt1} />
                </a>
            </div>
        </div>
    
     </section>
    );
  }


  export default RecommendedContent