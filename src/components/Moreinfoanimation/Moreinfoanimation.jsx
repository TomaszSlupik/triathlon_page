import React from 'react'
import './Moreinfoanimation.scss'

export default function Moreinfoanimation() {
  return (
    <div>
        <div className="moreinfoanimation">
            <div className="moreinfoanimation__me">
                <img className='moreinfoanimation__me-one' src={process.env.PUBLIC_URL + '/img/swimbg.png'} alt="Pływanie - indoor Triathlon"/>
            </div>
        </div>
    </div>
  )
}
