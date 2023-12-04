import React from 'react';
import GifLine from '../src/assets/images/line.png'

const GifScroll = () => {
  return (
    <section>
        <div className='line-scrool'>
            <div className='parallax'>
              <img src={GifLine} alt={GifLine} />
              <img src={GifLine} alt={GifLine} />
               <img src={GifLine} alt={GifLine} />
            </div>
        </div>
    </section>
  )
}

export default GifScroll;