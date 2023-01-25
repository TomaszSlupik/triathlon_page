import React, {useState, useEffect} from 'react'
import Introduction from '../Introduction/Introduction'
import ScrollToTop from '../ScrolltoTop/ScrolltoTop'
import './Main.scss'
import {useScrollTrigger, Zoom} from '@mui/material';
import Header from '../Header/Header';
import Waveanimation from '../Waveanimation/Waveanimation';
import Avatarme from '../Avatar/Avatarme';
import Carousel from '../Carousel/Carousel';
import Measuretime from '../Measuretime/Measuretime';
import Bloob from '../Bloob/Bloob';
import HeaderImage from '../HeaderImage/HeaderImage';
import Map from '../Map/Map';
import Moreinfo from '../Moreinfo/Moreinfo';
import Contact from '../Contact/Contact';
import Aboutme from '../Aboutme/Aboutme';
import TextDescribe from '../../style/mymuistyle/textdescribe'
import theme from '../../style/mybreakpoints'
import { ThemeProvider } from '@mui/material';
import Headercarousel from '../Headercarousel/Headercarousel';




export default function Main() {

    const [load, setLoad] = useState (true)

    const changePage = () => {
        setTimeout(() => {
            setLoad(false)
        }, 5500)
    }
    changePage()

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 10,
      });

const [testw, setTextW] = useState(window.innerWidth)
useEffect(()=> {
  const handleReasize = () => {
    
    setTextW(window.innerWidth)
  }
  window.addEventListener("resize", handleReasize)
  return () => {
    window.removeEventListener("resize", handleReasize)
  }
}, [])


      

  return (
    <div>
        {
            load ? 
            <Introduction /> :
            <>
            <div className='main'>
                <Zoom
                in={trigger}
                >
                <div 
                className="main__navigation">
                </div>
                </Zoom>
                <div className="main__navigationblock"></div>
                <Header />
                <HeaderImage />
                <Aboutme />
                <Headercarousel />
                <div className="main__welcome">
                    <img className="main__welcome-svgSquare" src={process.env.PUBLIC_URL + '/svg/square.svg'} alt=""/>
                    <img className="main__welcome-svgSquareWhite" src={process.env.PUBLIC_URL + '/svg/square_white.svg'} alt="" />
                    <div className="main__welcome-img"></div>
                    <div className="main__welcome-text">
                      
                    <ThemeProvider theme={theme}>
                      <TextDescribe>
                        Na codzień pracuje jako Programista. Sport trenuje amatorsko i traktuje to jako moje hobby. Pokazuje jak można łączyć pasję z codziennymi obowiązkami. Zapraszam do śledzenia mojej przygody.     
                      </TextDescribe>
                    </ThemeProvider>  
                    </div>
                </div>
                <div className="main__navigationblock"></div>
                <Measuretime />
                <Waveanimation />
                <Avatarme />
                <Bloob />
                <Map />
                <Moreinfo />
                <Carousel />
                <Contact />      
            </div>
            <ScrollToTop />
            </>
        }
    </div>
  )
}
