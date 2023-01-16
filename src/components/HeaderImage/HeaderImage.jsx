import React from 'react'
import './HeaderImage.scss'
import 'animate.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


export default function HeaderImage() {

  const scrolltoMe = () => {
    window.scrollTo ({
      top: 640 
  })
  }

  const style = {
    arrow: {fontSize: '4rem', color: '#7c5fe9', cursor: 'pointer', textAlign: 'center', animation: 'pulse 2s infinite',  textShadow: '2px 2px 3px rgba(15, 15, 15, 0.54)'}
  }

  return (
    <div>
        <div className="headerimage">
            <div className="headerimage__box">     
                  <h2 className='headerimage__box-text animate__animated animate__fadeInRightBig'>Slupik <br/> Triathlon<br/> 
                  <KeyboardDoubleArrowDownIcon  onClick={scrolltoMe} style={style.arrow}/>
                  </h2>
            </div>
        </div>
    </div>
  )
}
