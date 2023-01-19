import React from 'react'
import './Aboutme.scss'
import SchoolIcon from '@mui/icons-material/School';

export default function Aboutme() {

  const style = {
    item: {fontSize: '4rem'}
  }

  return (
    <div>
        <div className="aboutme">
            <div className="aboutme__header">O mnie</div>
            <div className="aboutme__line"></div>
            <div className="aboutme__wrapper">
                <div className="aboutme__wrapper-box">
                    <div className="aboutme__wrapper-box--one">
                      <SchoolIcon style={style.item} />
                      <div className="aboutme__wrapper-box--one---header">
                        Magister Inżynier
                      </div>
                    </div>
                </div>
                <div className="aboutme__wrapper-box">
                    <div className="aboutme__wrapper-box--two">
                      <i class="fa-solid fa-code" style={style.item}></i>
                    </div>
                </div>
                <div className="aboutme__wrapper-box">
                    <div className="aboutme__wrapper-box--three"></div>
                </div>
            </div>
        </div>
    </div>
  )
}
