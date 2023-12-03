import React from 'react';


// import { Container } from './styles';

const GifScroll = () => {
  return (
    <section>
        <div className='line-scrool'>
            <div className='parallax'>
                <motion.div className="scroller" style={{ x }}>
             <div className='gifs'>
                <img src={Gif}/>
                <img src={Gif}/>
                <img src={Gif}/>
                <img src={Gif}/>
             </div>
            </motion.div>

            </div>
        </div>
    </section>
  )
}

export default GifScroll;