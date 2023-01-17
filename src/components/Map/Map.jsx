import React, { useState } from 'react'
import './Map.scss'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import TimerIcon from '@mui/icons-material/Timer';
import SpeedIcon from '@mui/icons-material/Speed';
import HelpIcon from '@mui/icons-material/Help';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SendIcon from '@mui/icons-material/Send';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Map() {

const [rideKm, setRideKm] = useState(false)
const [burntKcal, setBurntKcal] = useState(false)
const [time, setTime] = useState(false)
const [speed, setSpeed] = useState(false)
const [open, setOpen] = useState(false)


const style = {
  icon: {color: '#7c5fe9', fontSize: '4rem'}, 
  info: {color: '#7c5fe9', position: 'absolute', right: '51%', top: '2%', fontSize: '2rem', cursor: 'crosshair'},
  write: {color: '#7c5fe9', fontSize: '4rem', cursor: 'pointer'}
}

const openInfoTrip = () => {
    setOpen(true)
}

const closeInfoTrip = () => {
  setOpen(false)
}

  return (
    <div>
        <div className="map">
            <div className="map__box">
                <div className="map__box-counter">
                  <div className="map__box-counter--icon">
                      <DirectionsBikeIcon style={style.icon}/>
                      <ScrollTrigger onEnter={() => setRideKm(true)} onExit={() => setRideKm(false)}>
                          {rideKm &&  <CountUp  start={0} end={645} duration={2} delay={0}>
                          </CountUp>} km
                      </ScrollTrigger>
                  </div>
                  <div className="map__box-counter--icon">
                  <img style={style.icon} src={process.env.PUBLIC_URL + '/img/calories.png'} alt="spalone kcal"/>
                  <ScrollTrigger onEnter={() => setBurntKcal(true)} onExit={() => setBurntKcal(false)}>
                      {burntKcal &&  <CountUp  start={0} end={13342} duration={2} delay={0}>
                      </CountUp>} kcal
                  </ScrollTrigger>
                  </div>
                  <div className="map__box-counter--icon">
                      <TimerIcon style={style.icon}/>
                  <ScrollTrigger onEnter={() => setTime(true)} onExit={() => setTime(false)}>
                      {time &&  <CountUp  start={0} end={24} duration={2} delay={0}>
                      </CountUp>} h
                  </ScrollTrigger>
                  </div>
                  <div className="map__box-counter--icon">
                    <SpeedIcon style={style.icon} />
                    <ScrollTrigger onEnter={() => setSpeed(true)} onExit={() => setSpeed(false)}>
                      {speed &&  <CountUp  start={0} end={31} duration={2} delay={0}>
                      </CountUp>} km/h
                  </ScrollTrigger>
                  </div>
                </div>
                <HelpIcon style={style.info} onClick={openInfoTrip}/>
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={closeInfoTrip}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle>{"Trasa z Rzeszowa do Gdańska"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      Organizator: Zajedź Raka - Fundacja z Serca Dla Serca
                      <div>
                      Siedmiu mocnych kolarzy 🚴🏻🚴🏻brało udział w akcji "Zajedź raka". Zbieraliśmy pieniądze na budowę hospicjum dla dzieci chorych na raka. Każdy przejechany km=100 zł. Wystartowaliśmy z rynku w Rzeszowie o godz. 12:00🕰Meta była na rynku w Gdańsku 😂czyli 645 km do przejechania. Zdecydowałem się wziąć udział 2 dni przed😁Byłem dobrze przygotowany, na tyle treningów co mam w ciagu dnia 💪Moje wrażenia: do 300 km bardzo dobrze mi się jechało 🚴🏻odżywiałem się co 45 min w jeździe. Jadlem, żele, batony proteinowe 🍫bułki pełnoziarniste 🥖banany🧀Na 300 km bardzo duży kryzys: zjadłem rosół 🍲i przez kolejne 2h problemy żołądkowe😒ale i tak wiedziałem, że dojadę ✌️Cala noc najgorsza 🌚Jedziesz i patrzysz sie w koło lub pasy na drodze. Po 12h już na nic nie miałem ochoty, ale wiedziałem ze musze jesc😻Jadłem hot-dogi i inne pysznosci😍Organizm juz wtedy nie przyswaja wgl żadnych żeli, itp. Ostatnie 5h była walka o dojechanie. Polecam wspierać takie akcje 😊 
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                      <SendIcon onClick={closeInfoTrip} style={style.write}/>
                  </DialogActions>
                </Dialog>
                <iframe className="map__box-map" title="Trasa przejazdu" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d5017375.584648807!2d15.826880063390453!3d52.11812251912331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e1!4m5!1s0x473cfae3cc14d449%3A0xd2240d31b33eb2ed!2zUnplc3rDs3c!3m2!1d50.0411867!2d21.9991196!4m5!1s0x46fd731c14d4fa6f%3A0x9bb9fbf163b7be8d!2zR2RhxYRzaw!3m2!1d54.3520252!2d18.6466384!5e0!3m2!1spl!2spl!4v1673870931994!5m2!1spl!2spl"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  )
}
