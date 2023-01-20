import React from 'react'
import './Aboutme.scss'
import SchoolIcon from '@mui/icons-material/School';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

export default function Aboutme() {

  const style = {
    item: {fontSize: '4rem', color: '#7c5fe9'}
  }

  return (
    <div>
        <div className="aboutme">
            <div className="aboutme__header">O mnie</div>
            <div className="aboutme__line"></div>
            <div className="aboutme__wrapper">
                <div className="aboutme__wrapper-box">
                    
                      <SchoolIcon style={style.item} />
                      <div className="aboutme__wrapper-box--header">
                        Magister Inżynier
                      </div>
                      <div className="aboutme__wrapper-box--text">
                      Nauka na uczelniach technicznych oraz ekonomicznych wszechstronnie rozwija moją wiedzę teoretyczną w różnych dziedzinach zawodowych. Posiadam kilkuletnie doświadczenie w różnych firmach. Ważne jest dla mnie codzienna możliwość praktycznego zastosowania nabytych umiejętności. Lubiący podejmować duże wyzwania. 
                      </div>
                   
                </div>
                <div className="aboutme__wrapper-box">
                      <i className="fa-solid fa-code" style={style.item}></i>
                      <div className="aboutme__wrapper-box--header">
                        Programista
                      </div>
                      <div className="aboutme__wrapper-box--text">
                      Na codzień pracuje w dużej korporacji jako Programista. Codziennie podnoszę swoje kompetencje przerabiając kursy w tej tematyce. W wolnych chwilach również uwielbiam programować. Miłośnik tworzenia stron internetowych oraz aplikacji pod urządzenia Mobilne oraz Desktopy. Głównie skoncentrowany jestem na aspektach Frontendowych. Buduje również od zera procesy ETL'owe.
                      </div>
                </div>
                <div className="aboutme__wrapper-box threeBox">
                      <DirectionsRunIcon style={style.item}/>
                      <div className="aboutme__wrapper-box--header">
                        Sportowiec
                      </div>
                      <div className="aboutme__wrapper-box--text">
                      Jestem w sporcie od trzeciego roku życia. Na początku było judo. Byłem też w klasie pływackiej. Cały czas jestem w sporcie. Chcę to kontynuować. W Triathlonie czuję się dobrze, bo zdobyłem kwalifikację na MŚ i chciałbym tam powalczyć.Trafiłem do tego sportu przez kontuzję. Biegałem na dobrym poziomie. Pojechałem na zawody do Krynicy, gdzie doznałem urazu. To było zmęczeniowe złamanie. Dlatego zacząłem pływać i jeździć na rowerze. W ten sposób trafiłem do triathlonu. Na co dzień trenuję samodzielnie. 
                      </div>
                </div>
            </div>
        </div>
    </div>
  )
}
