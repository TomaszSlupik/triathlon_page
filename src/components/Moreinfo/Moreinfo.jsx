import React from 'react'
import './Moreinfo.scss'
import Mybutton from '../../style/mystyle'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FlightIcon from '@mui/icons-material/Flight';
import { useNavigate } from 'react-router-dom';
import Moreinfoanimation from '../Moreinfoanimation/Moreinfoanimation';
import Moreinfobtn from '../Moreinfobtn/Moreinfobtn';



export default function Moreinfo() {

  const style ={
    win: {fontSize: '4rem', color: '#7c5fe9'}, 
  }

  let navigate= useNavigate()
  
  const goToResults = () => {
    navigate('/results')
  }

  const goToTrip = () =>  {
    navigate('/trips')
  }

  return (
    <div>
        <div className="moreinfo">
          <Moreinfoanimation />
            <div className="moreinfo__text">
                Więcej informacji znajdziesz
            </div>
                <div className="moreinfo__wrapper">
                
                <div className="moreinfo__result">
                  <div className="moreinfo__result-middlebox"></div> 
                  <div className="moreinfo__result-circle">
                      <div className="moreinfo__result-circle--box">
                          <EmojiEventsIcon style={style.win}/>
                          <div className="moreinfo__result-circle--box---text">Wyniki i statystyki</div>
                          <div className="moreinfo__result-circle--box---textunder">Zapraszam</div>
                      </div>
                      <div className="moreinfo__result-circle--btn">
                    <Mybutton style={style.btn} onClick={goToResults}>zobacz</Mybutton>
                  </div>   
                  </div>
                </div>

                <div className="moreinfo__trip tripGrid">
                  <div className="moreinfo__trip-btn flightIconRight">
                    
                  </div>    
                  <div className="moreinfo__trip-circle tripBox">
                      <div className="moreinfo__trip-circle--box">
                          <FlightIcon style={style.win}/>
                          <div className="moreinfo__trip-circle--box---text">Opis wyścigów i rezultaty</div>
                          <div className="moreinfo__trip-circle--box---textunder">Zapraszam</div>
                      </div>
                      <div className="moreinfo__trip-circle--btn flightIconRight">
                          <Mybutton onClick={goToTrip}>zobacz</Mybutton>
                      </div>
                      <Moreinfobtn />
                  </div>   
                </div> 
                
                </div> 
        </div>
    </div>
  )
}
