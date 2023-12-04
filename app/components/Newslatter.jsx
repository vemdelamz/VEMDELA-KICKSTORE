import React from 'react';


// import { Container } from './styles';

const Newslatter = () => {
  return(
    <section>
        <div className='form'>
        <form className='form-container'>
                    <div className='text-center'>
                        <legend className='title'>Receba nossas<br></br> novidades</legend>
                        <div class="mb-3 ">
                            <input type="text" className="form-control" placeholder='Name'/> 
                        </div>
                        <div class="mb-3">
                            <input type="email"  className="form-control"  placeholder='E-mail' aria-describedby="emailHelp"/>
                        </div>
                        <button className='news-btn' type="submit">ENVIAR</button>
                    </div>
                </form>   
        </div>
    </section>
  )
}

export default Newslatter;