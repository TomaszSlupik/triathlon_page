import React from 'react'
import Avatar from '@mui/material/Avatar';
import './Avatarme.scss'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ShareIcon from '@mui/icons-material/Share';
import FlightIcon from '@mui/icons-material/Flight';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Person3Icon from '@mui/icons-material/Person3';
import CloseIcon from '@mui/icons-material/Close';


export default function Avatarme() {

const style = {
  avatar: {width: '250px', height: '250px', marginLeft: '1em'}
}

const actions = [
  { icon: <LocalPhoneIcon />, name: 'Kontakt' },
  { icon: <EmojiEventsIcon />, name: 'Osiągnięcia' },
  { icon: <FlightIcon />, name: 'Wyjazdy' },
  { icon: <Person3Icon />, name: 'O mnie' },
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
       
          <img className="avatar__img" src={process.env.PUBLIC_URL + '/img/avatarbike.jpg'} />
    </div>
  )
}
