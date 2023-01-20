import React, { useState } from 'react'
import './Form.scss'
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Mybutton from '../../style/mystyle'
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';

export default function Form() {

const [email, setTextEmail] = useState()
const [validemail, setValidEmail] = useState('')
const [openemail, setOpenEmail] = useState(true)
const [text, setText] = useState()



const submit = (e) => {
  e.preventDefault()


  if (email === "") {
 
    setOpenEmail(true)
    setValidEmail('Wprowadź poprawny email')
  }
  else {

    
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
  paper: {width: '100%', height: '100%'}
}

  return (
    <div>
      <div className="contactbox">
              <form action="" className='contactbox__form' onSubmit={submit}>
              <div className="contactbox__form-box">
              <Paper elevation={3} style={style.paper}>
              <label>Email</label>  
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
              <label>Twoja wiadomość</label> 
              <br></br>
              <TextField id="outlined-basic" type="text" 
              value={text} 
              onChange={changeText}
              label="wpisz treść wiadomości" variant="outlined" />
              <br></br>
              <Mybutton variant="contained" endIcon={<SendIcon />}>
              Wyślij 
              </Mybutton>     
              </Paper>
            </div>
            </form>
      </div>
    </div>
  )
}
