import React from 'react'
import './Results.scss'

import Resultcharts from '../Resultcharts/Resultcharts'

export default function Results() {
  return (
    <div className='results'>
        <div className="height"></div>
        <div className="results__header">
            <div className="results__header-nav">
              Zapraszam do
              <div className="results__header-nav--res">wyników</div>
              <div className="results__header-nav--text">
              oraz do śledzenia aktualnie mojej kariery sportowej. 
              Będziesz na bieżąco z moimi wynikami oraz z wyjazdami sportowymi.
              </div>
            </div>
            <div className="results__header-img">
                <img className="results__header-img" src={process.env.PUBLIC_URL + '/img/achievements.JPG'} alt="Medal MP" />
            </div>
        </div>
        <Resultcharts />
    </div>
  )
}
