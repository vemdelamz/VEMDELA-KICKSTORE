import { useEffect, useState } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Audio from '../assets/beat.mp3'
import { FiPlay, FiSkipForward, FiPause,  } from "react-icons/fi";



const Player = () => {
  const [backToTop, setBackToTop] = useState(false)
    const [goToBottom, setGoToBottom] = useState(false)
    const audio = 'https://m.soundcloud.com/deejaygato_official/vibezvibez004gvtotheone'

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > '100%'){
                setBackToTop(false)
            }else{
                setBackToTop(true)
            }

        })
    }, [])
 return(
  <section className="player">
    
    
    {
      backToTop &&(
        <AudioPlayer

            style={{
              position:"fixed",
              bottom:"50px",
              left:"100px",
              width:"50px",
              fontSize:"35px",
              cursor:"pointer",
              color:"#FFF",
              height:"30px",
              justifyContent:"center",
              alignItems:"center",
              display:"flex",
              borderRadius:"100%",
              background:"none",
            
              
            }}
            autoPlay
            src={audio}
            onPlay={e => console.log("onPlay")}
            customIcons={{
              play:<FiPlay className='play' />,
              pause:<FiPause className='pause' />,
         
              next:<span></span>,
              previous: <span></span>,
              rewind: <span></span>,
              forward :<span></span> ,
            
          

            
             
              
            }}
            showFilledProgress={false}
    
            volume={0.1}
        />
      )
    }
     

  </section>
 )
}


export default Player