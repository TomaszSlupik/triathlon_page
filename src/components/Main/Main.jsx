import React, {useState} from 'react'
import Introduction from '../Introduction/Introduction'
import ScrollToTop from '../ScrolltoTop/ScrolltoTop'
import './Main.scss'
import {useScrollTrigger, Zoom} from '@mui/material';
import Header from '../Header/Header';



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
        threshold: 20,
      });

      

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
                <div className="main__welcome">
                    <img className="main__welcome-svgSquare" src={process.env.PUBLIC_URL + '/svg/square.svg'} />
                    <div className="main__welcome-img"></div>
                    <div className="main__welcome-text">  
                    Na codzień pracuje jako Programista. Sport trenuje amatorsko i traktuje to jako moje hobby. Pokazuje jak można łączyć pasję z codziennymi obowiązkami. Zapraszam do śledzenia mojej przygody.     
                    </div>
                </div>
                
            </div>
            <ScrollToTop />
            </>
        }
    </div>
  )
}
