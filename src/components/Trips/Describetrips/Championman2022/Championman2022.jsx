import React from 'react'
import './Championman2022.scss'
import theme from '../../../../style/mybreakpoints'
import { ThemeProvider } from '@mui/material'
import Linetext from '../../../../style/mymuistyle/linetext'
import Line from '../../../../style/mymuistyle/line'
import scrollBar from '../../../../animations/animation'
import Myscrollbox from '../../../../style/myscrollbox'
import TextDescribebox from '../../../../style/mymuistyle/textdescribebox'
import Leftheader from '../../../../style/mymuistyle/leftheader'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Centerheader from '../../../../style/mymuistyle/centerheader'
import Cardflex from '../../../../style/mymuistyle/cardflex'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Halfbox from '../../../../style/mymuistyle/halfbox'
import BacktoPage from '../BacktoPage'




scrollBar ()

export default function Championman2022() {

    useEffect (()=> {
        Aos.init({duration: 3000})
      }, [])
    
   
  

  return (
    <div>
    <BacktoPage />
    <div className='championman'>
        <ThemeProvider theme={theme}>
            <Linetext>ChampionMan Duathlon</Linetext>
            <Line />
            <Myscrollbox />
            <div className="championman__box">
                <Leftheader><DoubleArrowIcon />Dzień przed startem</Leftheader>
                <Cardflex data-aos="fade-left">
                        <iframe className='championman__box-map' title="Trasa przejazdu" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1254343.7695824713!2d17.72152695218998!3d52.118127017269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!3m2!1d52.2296756!2d21.012228699999998!4m5!1s0x4705ad9a5b17be53%3A0xd99ab4d3f6612c46!2zQ3plbXBpxYQ!3m2!1d52.142603099999995!2d16.7591522!5e0!3m2!1spl!2spl!4v1674710687527!5m2!1spl!2spl"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <Halfbox>
                        <TextDescribebox>
                        Do Czempinia wyruszyłem 06.05.2022 r., miałem do pokonania ponad 300km, zakwaterować się, a już kolejnego dnia czekał mnie pierwszy występ w 2022 r. w formie Duathlon: 5km bieganie + 20km rower + 2.5km biegania. Jechałem tam, aby zrobić dobry sprawdzian przed zbliżającymi się Mistrzostwami Europy w Olsztynie. Do Czempinia wyruszyłem 06.05.2022 r., miałem do pokonania ponad 300km, zakwaterować się, a już kolejnego dnia czekał mnie pierwszy występ w 2022 r. w formie Duathlon: 5km bieganie + 20km rower + 2.5km biegania. Jechałem tam, aby zrobić dobry sprawdzian przed zbliżającymi się Mistrzostwami Europy w Olsztynie. 
                        </TextDescribebox>
                        </Halfbox>
                </Cardflex>
            <Leftheader><DoubleArrowIcon />Dzień startu</Leftheader>
            <Centerheader>Bieg</Centerheader>
            <div data-aos="fade-right">
                <img className="championman__box-img" src={process.env.PUBLIC_URL + '/img/img_2022/championmantwo.jpg'} alt="" />
            </div>

            <div data-aos="fade-left">
                <TextDescribebox >
                    Po rozgrzewce, ustawiłem się w pierwszej lini i czekałem na wystrzał startera. Plan był taki, aby od razu oderwać się od grupy i później utrzymywać przewagę. Pierwszy kilometr zacząłem w tempie 2:59/km co dało mi już przewagę nad goniącą grupą. Kolejne km to były ustabilizowanie tętna oraz utrzmanie pozycji. Do strefy zmian wbiegam jako pierwszy zawodnik i otwieram pierwsze 5km w czasie: 00:16:15. 
                </TextDescribebox>
            </div>
            <Centerheader>Rower</Centerheader>
            <div data-aos="fade-right">
                <img className="championman__box-img" src={process.env.PUBLIC_URL + '/img/avatarbike.jpg'} alt="" />
            </div>
            <div data-aos="fade-left">
                <TextDescribebox >
                Wypracowana przewaga na bieganiu pozwoliła mi jechać swoje na rowerze. Cel był utrzymać wypracowaną przewagę. Średnia prędkość z roweru wyszła ponad 42 km/h. 
                </TextDescribebox>
            </div>
            <Centerheader>Bieg</Centerheader>
            <div data-aos="fade-right">
                <img className="championman__box-img" src={process.env.PUBLIC_URL + '/img/img_2022/championmanthree.jpg'} alt="" />
            </div>
            <div data-aos="fade-left">
                <TextDescribebox >
                Ostatnią częścią zawodów był bieg 2,5 km. Spokojnym krokiem zmierzałem do mety tym samym udało się wywalczyć pierwsze miejsc w zawodach ChampionMan Duathlon Czempiń. 
                </TextDescribebox>
            </div>
            <Centerheader>1 miejsce OPEN - Duathlon Czempiń</Centerheader>
            <video className="championman__box-img" playsinline controls poster="/img/img_2022/finishchampionman.jpeg">
				<source src="/video/vidochampionman.mov" type="video/mp4" />
				  <source src="lesson.ogg" type="video/ogg" />
			</video>

            </div>

        </ThemeProvider>
      
    </div>
    </div>
    
  )
}
