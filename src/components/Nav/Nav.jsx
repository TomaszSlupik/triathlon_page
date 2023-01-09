import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import './Nav.scss'

export default function Nav() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const linkNav = [
    {
      nameLink:'Home',
      hrefLink: '/christmas_app'
    },
    {
      nameLink:'O mnie',
      hrefLink: '/christmas_app/presents'
    },
    {
        nameLink:'Wyjazdy',
        hrefLink: '/christmas_app/presents'
    },
    {
    nameLink:'Osiągnięcia',
    hrefLink: '/christmas_app/presents'
    },
    {
        nameLink:'Kontakt',
        hrefLink: '/christmas_app/presents'
    },
  ]

  const style ={
    burger: {cursor: 'pointer', fontSize: '5rem', color: '#7c5fe9', position: 'fixed', right: '2%', zIndex: 10}, 
    link: {textDecoration: 'none', color: '#7c5fe9'}
  }

  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
      <List>
        {linkNav.map((text, index) => (
          <ListItem key={index} disablePadding>
            {/* <Link to={text.hrefLink} style={style.link}> */}
            <ListItemButton>
              <ListItemIcon style={style.burger}>
                
              </ListItemIcon>
              <ListItemText primary={text.nameLink} />
            </ListItemButton>
            {/* </Link> */}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='nav'>
         {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon style={style.burger} onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}