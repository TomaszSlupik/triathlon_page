import React, { useState} from 'react'
import './Form.scss'
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Mybutton from '../../style/mystyle'
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import Iconcontact from '../../style/mymuistyle/iconcontact';
import theme from '../../style/mybreakpoints'
import { ThemeProvider } from '@mui/material';


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
  paper: {width: '100%', height: '100%', padding: '0.6em 0.3em', backgroundColor: '#999'}, 
  btn: {marginTop: '0.7em'},
  field: {width: '90%', color: '#999'}, 
  icon: {margin: '0em 0.4em', fontWeight: '700'}
}


  return (
    <div>

      <div className="contactbox">
              <form action="https://formsubmit.io/send/slupiktomasz@gmail.com" 
              method='POST'
              className='contactbox__form' 
              >
              <div className="contactbox__form-item">
              <div className="contactbox__form-item--header">
                Napisz do mnie!
              </div>
              <div className="contactbox__form-item--describe">
                Jeżeli masz jakiesz pytania, skorzystaj z poniższych opcji
              </div>
                <div className="contactbox__form-item--icon">
                    <ThemeProvider theme={theme}>
                          <Iconcontact>
                          <a 
                          rel="noreferrer"
                          href="https://www.instagram.com/slupik.tomasz/" target="_blank">
                          <i 
                          style={style.icon}
                          class="fa-brands fa-instagram"></i>
                          slupik.tomasz 
                          </a>
                          </Iconcontact>  
                    </ThemeProvider>
                </div>
                <div className="contactbox__form-item--icon">
                <ThemeProvider theme={theme}>
                          <Iconcontact>
                          <a 
                          rel="noreferrer"
                          href="https://www.facebook.com/profile.php?id=100001145325456" target="_blank">
                          <i 
                          style={style.icon}
                          class="fa-brands fa-square-facebook"></i>
                          Tomasz Słupik
                          </a>
                          </Iconcontact>
                    </ThemeProvider> 
                </div>
              </div>
              <div className="contactbox__form-box">
              <Paper elevation={3} style={style.paper}>
              <label htmlFor='mail' className='label'>Email 
              <i class="fa-solid fa-at iconEmail"></i>
              </label>  
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
                    <TextField id="mail" type="mail" name='mail'
                    value={email}  
                    onChange={changeEmail}
                    label="wpisz swój adres email" variant="outlined" 
                    />


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
              <label className='label' htmlFor='msg'>Twoja wiadomość 
              <i class="fa-solid fa-envelope iconEmail"></i>
              </label> 
              <br></br>
              <TextField id="msg" type="msg" name='msg' 
              style={style.field}
              value={text} 
              onChange={changeText}
              label="wpisz treść wiadomości" 
              variant="outlined" />
              <br></br>
              <input name="_redirect" 
              type="hidden" 
              id="name" 
              value="http://localhost:3000/thankyou" />
              <Mybutton 
              onSubmit={submit}
              style={style.btn} variant="contained" endIcon={<SendIcon />}>
              Wyślij 
              </Mybutton>     
              </Paper>
            </div>
            </form>
      </div>
    </div>
  )
}
