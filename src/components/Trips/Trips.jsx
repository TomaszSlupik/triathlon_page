import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import theme from '../../style/mybreakpoints';
import { Card, ThemeProvider } from '@mui/material';
import Data from '../../data/data.json'
import { useState} from 'react';
import { teal, blue, indigo } from '@mui/material/colors';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Trips.scss'
import Mycard from '../../style/mymuistyle/card';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Textradio from '../../style/mymuistyle/textradio';



export default function Trips() {

const [trip, setTrip] = useState(Data)
 
const style = {
  grid: {alignItems: 'center',   display: 'flex', justifyContent: 'center'}, 
  card: {height: '300px'}, 
  label: {color: '#fff'}, 
  radioGroup: {color: '#7c5fe9'}
}

let navigate = useNavigate()

const goToPage = (id) => {
    navigate(`${id}`)
}


const [triathlon, setTriathlon] = useState (false)
const [duathlon, setDuathlon] = useState(false)
const [run, setRun] = useState(false)



const filterTrips = (type) => {
      setTrip(Data)  
      const tripCopy = Data
      const updateTrips = tripCopy.filter((el) => {
        return el.type === type
      })
      console.log(triathlon)
      console.log(duathlon)
      console.log(run)
      setTrip(updateTrips)  
}


const filterTripsYes = () => {
  setTrip(Data)  
  setTriathlon(false)
  setDuathlon(false)
  setRun(false)
 
}

  return (
    <div>
      <div className="trip">
        <div className="trip__headerImage">
          <div className="trip__headerImage-text">
            Wyjazdy Triathlonowe, Duathlonowe i biegowe.
            <div className="trip__headerImage-describe">
          Zapraszam do moich artykułów i galerii z wyjazdów
          </div>
          </div>
          
          <img className="trip__headerImage" src={process.env.PUBLIC_URL + '/img/bikes.jpg'} alt="rowery - trip" />
        </div>
        <div className="trip__switch">
        
            <FormControl>
            <RadioGroup
              style={style.radioGroup}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel 
              onClick={() => filterTrips("Triathlon")}
              value="Triathlon" control={<Radio />} label={<Textradio>Triathlon</Textradio>} />
              <FormControlLabel 
              onClick={() => filterTrips("Duathlon")}
              value="Duathlon" control={<Radio />} label={<Textradio>Duathlon</Textradio>} />
              <FormControlLabel 
              onClick={() => filterTrips("Bieg")}
              value="Bieganie" control={<Radio />} label={<Textradio>Bieganie</Textradio>} />
              <FormControlLabel 
              onClick={filterTripsYes}
              value="Wszystko" control={<Radio />} label={<Textradio>Wszystko</Textradio>} />
            </RadioGroup>
          </FormControl>
    
        </div>
        <div className="trip__box">
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={style.grid}>
                  <ThemeProvider theme={theme}>
                    {
                      trip.map((el, index) => { 
                        return (
                          <div key={index}>
                            <Grid item xs={12} sm={6} md={4}>
                                  <Mycard>
                                  <Card style={style.card}>
                                  <CardHeader
                                        avatar={
                                          
                                            el.type === "Bieg" ? 
                                            (
                                            <Avatar sx={{ bgcolor: teal[500] }} aria-label="recipe">
                                            B
                                            </Avatar> )
                                            :
                                            el.type === "Triathlon" ? 
                                            (
                                            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                                            T
                                            </Avatar>)
                                            : 
                                            (
                                            <Avatar sx={{ bgcolor: indigo[500] }} aria-label="recipe">
                                            D
                                            </Avatar>)
                                          
                                        }
                                        action={
                                          <Button aria-label="settings">
                                            <MoreVertIcon onClick={() => goToPage(el.nav)}/>
                                          </Button>
                                        }
                                        title={el.name}
                                        subheader={el.data}
                                      />
                                      <CardMedia
                                        component="img"
                                        height="194"
                                        image={el.image}
                                        alt={el.name + 'zdjęcie opisujące zawody'}
                                      />
                                       <Rating name="read-only" value={el.marks} precision={0.5} readOnly />
                                 
                                  </Card>
                                </Mycard>
                              </Grid>
                          </div>
                        )
                      })
                    }
                  </ThemeProvider>
                  </Grid>
              </Box>
        </div>
      </div>
    </div>
  )
}
