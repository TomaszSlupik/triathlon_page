import React from 'react'
import Form from '../Form/Form'
import './Contact.scss'

export default function Contact() {
  return (
    <div>
        <div className="contact">
            <div className="contact__line"></div>
            <div className="contact__img">
                <img src={process.env.PUBLIC_URL + '/img/contact.JPG'} alt="wywiad po zawodach" className="contact__img" /> 
                <div className="contact__img-shadow">
            </div>
            </div> 
            <Form />
        </div>
    </div>
  )
}
