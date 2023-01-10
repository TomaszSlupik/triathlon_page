import React from 'react'
import './Header.scss'
import 'animate.css';


export default function Header() {
  return (
    <div>
        <header className='header animate__animated animate__zoomInDown'>
                <h1><span className='header__span'>Tomasz</span> Słupik</h1>
                <h2>Programista & <span className='header__span'>Sportowiec</span></h2>
        </header>
    </div>
  )
}
