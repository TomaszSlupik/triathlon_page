import React, { useState, useEffect } from 'react'
import './Form.scss'
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Mybutton from '../../style/mystyle'
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import EmailIcon from '@mui/icons-material/Email';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function Form() {

const [email, setTextEmail] = useState()
const [validemail, setValidEmail] = useState( null)
const [openemail, setOpenEmail] = useState(false)

const [text, setText] = useState()
const [validtext, setValidText] = useState(null)
const [opentext, setOpenText] = useState(false)


const submit = (e) => {
  e.preventDefault()
  if (email === "" || email == null) {
    setOpenEmail(true)
    setValidEmail('Wprowadź poprawny email')
    if (text === "" || text == null) {
      setOpenText(true)
      setValidText('Wprowadź wiadomość')
    }
   
  }
  else if (text === "" || text == null) {
    setOpenText(true)
    setValidText('Wprowadź wiadomość')
  }
  

}

const changeEmail = (e) => {
  console.log(email)
  setTextEmail(e.target.value)
}

const changeText = (e) => {
  setText(e.target.value)
}

const style = {
  paper: {width: '100%', height: '100%', padding: '0.6em 0.3em'}, 
  btn: {marginTop: '0.7em'},
  field: {width: '90%', color: '#7c5fe9'}
}

  return (
    <div>
      <div className="contactbox">
              <form action="" className='contactbox__form' onSubmit={submit}>
              <div className="contactbox__form-box">
              <Paper elevation={3} style={style.paper}>
              <label className='label'>Email <AlternateEmailIcon /></label>  
              <br></br>
              <Collapse in={openemail}>
              <Alert severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenEmail(false)
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              >{validemail}</Alert>
               </Collapse>
                    <TextField id="outlined-basic" type="email" 
                    value={email}  
                    onChange={changeEmail}
                    label="wpisz swój adres email" variant="outlined" />
              <br></br>
              <Collapse in={opentext}>
              <Alert severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenText(false)
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              >{validtext}</Alert>
              </Collapse>
              <label className='label'>Twoja wiadomość <EmailIcon/></label> 
              <br></br>
              <TextField id="outlined-basic" type="text" 
              style={style.field}
              value={text} 
              onChange={changeText}
              label="wpisz treść wiadomości" 
              variant="outlined" />
              <br></br>
              <Mybutton style={style.btn} variant="contained" endIcon={<SendIcon />}>
              Wyślij 
              </Mybutton>     
              </Paper>
            </div>
            </form>
      </div>
    </div>
  )
}
