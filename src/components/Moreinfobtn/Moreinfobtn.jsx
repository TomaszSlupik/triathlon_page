import React from 'react'
import './Moreinfobtn.scss'

export default function Moreinfobtn() {
  return (
    <div>
        <div className="moreinfobtn">
            <div className="moreinfobtn__box">
                <div className="moreinfobtn__box-signature">
                  Foto. Agnieszka Weremczuk
                </div>
                <img src={process.env.PUBLIC_URL + '/img/button.png'} alt="Przycisk - animacja" className="moreinfobtn__box-img" />
            </div>
        </div>
    </div>
  )
}
