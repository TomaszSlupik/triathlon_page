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
import Textswitch from '../../style/mymuistyle/textswitch';
import Switchtriathlon from '../../style/mymuistyle/myswitch';
import Switchduathlon from '../../style/mymuistyle/myswitchtwo';
import Switchrun from '../../style/mymuistyle/myswitchthree';

export default function Trips() {

const [trip, setTrip] = useState(Data)
 
const style = {
  grid: {alignItems: 'center',   display: 'flex', justifyContent: 'center'}, 
  card: {height: '300px'}
}

let navigate = useNavigate()

const goToPage = (id) => {
    navigate(`${id}`)
}


const [triathlon, setTriathlon] = useState (false)
const [duathlon, setDuathlon] = useState(false)
const [run, setRun] = useState(false)



const triathlonFilter = () => {

  setTriathlon(true)
  if (triathlon === false) {
    filterTrips('Triathlon')
  }
  else (
    filterTripsYes('Triathlon')
  )
}

const duathlonFilter  = () => {
  setDuathlon(true)
  if (duathlon === false) {
    filterTrips('Duathlon')
  }
  else (
    filterTripsYes('Duathlon')
  )
}

const runFilter = () => {
  setRun(true)
  if (run === false) {
    filterTrips('Bieg')
  }
  else (
    filterTripsYes('Bieg')
  )
}

const filterTrips = (type) => {
      const tripCopy = [...trip]
      const updateTrips = tripCopy.filter((el) => {
        return el.type === type
      })
      setTrip(updateTrips)  
     
      setTriathlon(true)
      setDuathlon(true)
      setRun(true)
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
        <div className="trip__switch">
        <ThemeProvider theme={theme}>
        <Switchtriathlon triathlonFilter={() => triathlonFilter()}
            filterTrips={() => filterTrips()}
            filterTripsYes={()=> filterTripsYes()}
            />
        <Textswitch
        > Triathlon</Textswitch >

        <Switchduathlon duathlonFilter={() => duathlonFilter()}
            filterTrips={() => filterTrips()}
            filterTripsYes={()=> filterTripsYes()}
            disabled
            />
        <Textswitch
        > Duathlon</Textswitch >

        <Switchrun runFilter={() => runFilter()}
            filterTrips={() => filterTrips()}
            filterTripsYes={()=> filterTripsYes()}
            />
        <Textswitch
        >Bieganie</Textswitch >

      </ThemeProvider>
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
