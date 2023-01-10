import React, {useEffect, useRef} from 'react'
import './Footer.scss'

export default function () {

    const yearNow = () => {
        let year = footeryear.current
        year.innerText = new Date().getFullYear()
    }
  
    const footeryear = useRef(null)
  
    useEffect (() => {
        yearNow()
    }, [])
  

  return (
    <div>
        <footer className='footer'>
                &copy; 
                <span className='footer__year'ref={footeryear}></span>
                &nbsp; Created by Tomasz Słupik
        </footer>
    </div>
  )
}
