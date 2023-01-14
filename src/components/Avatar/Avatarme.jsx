import React from 'react'
import Avatar from '@mui/material/Avatar';
import './Avatarme.scss'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FlightIcon from '@mui/icons-material/Flight';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Person3Icon from '@mui/icons-material/Person3';
import CloseIcon from '@mui/icons-material/Close';


export default function Avatarme() {

const style = {
  avatar: {width: '250px', height: '250px', marginLeft: '1em'}
}

const actions = [
  { icon: <LocalPhoneIcon />, name: 'Kontakt - jeżeli masz pytania, napisz ' },
  { icon: <EmojiEventsIcon />, name: 'Osiągnięcia - krótki opis moich wyników' },
  { icon: <FlightIcon />, name: 'Wyjazdy - na stronie opisuje aktualne wyjazdy oraz relacje z nich.' },
  { icon: <Person3Icon />, name: 'O mnie - specjalizuję się w treningu od 3 roku życia' },
];

  return (
    <div className='avatar'>
        <div className="avatarme">
        <Avatar 
        style={style.avatar}
        alt="Tomasz Słupik" src="/img/avatar.jpg" />
        <div className="avatar__icon">
        <SpeedDial
            ariaLabel="SpeedDial openIcon example"
            sx={{ marginTop: '-15em', marginRight: '-12em' }}
            icon={<SpeedDialIcon openIcon={<CloseIcon />} />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </div>
        </div>
       
          <img className="avatar__img" src={process.env.PUBLIC_URL + '/img/avatarbike.jpg'} alt="Zawody duathlonowe - etap kolarski"/>
    </div>
  )
}
