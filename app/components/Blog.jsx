import React from 'react';
import Post1 from '../src/assets/post1.png'
import Post2 from '../src/assets/post2.png'
import Post3 from '../src/assets/post3.png'


// import { Container } from './styles';

const BlogPosts = () => {
  return (
    <section>
        <h2 className='title'>SIGA @VEMDELA <br></br>NO INSTAGRAM</h2>
     
        <div className='caroucel-content'>
            <div className='slide-post'>
                <div className='post-card'>
                    <a href="https://www.instagram.com/vemdelamz/">
                        <img src={Post1}/>
                    </a> 
                </div>
                <div className='post-card'>
                    <a href="https://www.instagram.com/vemdelamz/">
                        <img src={Post2}/>
                    </a> 
                </div>
                <div className='post-card'>
                    <a href="https://www.instagram.com/vemdelamz/">
                        <img src={Post3}/>
                    </a> 
                </div>    
            </div>   
        </div>
    </section>
  )
}

export default BlogPosts;