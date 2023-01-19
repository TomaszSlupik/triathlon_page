import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import './Introduction.scss'

export default function Introduction()   {

    const [level, setLevel] = useState(0) 

    useEffect(() => {
        const timer = setInterval(() => {
            setLevel((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
          }, 500);
          return () => {
            clearInterval(timer);
          };
        }, []);

    const style = {
        circle: {color: '#fff', width: '100px', height: '100px', zIndex: 1,}, 
        typography: {color: '#fff', zIndex: 1, fontWeight: 'bold'}
    }

  return  (
    <div className='introduction'>
        
      <div className="introduction__img kenburns-top">
        <div className="introduction__img-shadow"></div>
      <CircularProgress
        style={style.circle}
        variant='determinate' color="secondary" value={level}/>
         <Typography
         style={style.typography}
         variant="caption" component="div" color="text.secondary">
          {`${Math.round(level)}%`}
        </Typography> 
     
      </div>
    </div>
  )
}
