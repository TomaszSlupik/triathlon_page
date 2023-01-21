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
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { useState, useEffect } from 'react';


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
      hrefLink: '/'
    },
    {
      nameLink:'Wyniki',
      hrefLink: '/results'
  },
    {
        nameLink:'Wyjazdy',
        hrefLink: '/trips'
    },

  ]

  const style ={
    burger: {cursor: 'pointer', fontSize: '5rem', color: '#7c5fe9', position: 'fixed', right: '2%', zIndex: 30}, 
    link: {textDecoration: 'none', color: '#7c5fe9', textAlign: 'center'}
  }

  const Responsive = styled('span')(({theme}) => ({
    [theme.breakpoints.up('xs')] : {
      fontSize: '1.5rem', 
      margin: '0.5em'
    },
    [theme.breakpoints.up('sm')] : {
      fontSize: '2rem', 
    },
    [theme.breakpoints.up('md')] : {
      fontSize: '3rem', 
    }
  }))

  const [w, setW] = useState(window.innerWidth)
  useEffect(()=> {
    const handleReasize = () => {
      
      setW(window.innerWidth)
    }
    window.addEventListener("resize", handleReasize)
    return () => {
      window.removeEventListener("resize", handleReasize)
    }
  }, [])

 
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
      <List>
        {linkNav.map((text, index) => (
          <ListItem key={index} disablePadding>
            <Responsive>
            <Link to={text.hrefLink}  style={style.link}>{text.nameLink}
            {/* <ListItemButton>
              <ListItemIcon style={style.burger}>
                
              </ListItemIcon>
              <ListItemText />
            </ListItemButton> */}
            </Link>
            </Responsive>
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