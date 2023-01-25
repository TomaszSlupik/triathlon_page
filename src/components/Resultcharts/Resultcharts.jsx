import React from 'react'
import './Resultcharts.scss'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS, 
    LineElement, 
    CategoryScale, 
    LinearScale, 
    PointElement
} from 'chart.js'
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button } from '@mui/material';

ChartJS.register (
    LineElement, 
    CategoryScale, 
    LinearScale, 
    PointElement
)

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  const style = {
    panel: {width: '100%', height: '100%' }, 
  }
  

export default function Resultcharts() {

    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  
    
    const data2021 = {
      labels: ['MP w duathlonie', 'Garmin Iron Triathlon 1/2', 'Serock Triathlon', 'Triathlon Lwa','Garmin Iron Triathlon 1/8', 'Triathlon Radłów', ], 
      datasets: [
            {
                data: [3, 1, 1, 1, 1, 2], 
                borderColor: '#7c5fe9', 
                tension: 0.5, 
            
            }
        ]
    }



    const data2022 = {
        labels: ['HP Indoor Triathlon', 'Duathlon Czempiń', 'Mistrzostwa Europy Olsztyn', 'Susz Triathlon', 'Enea Bydgoszcz Triathlon', 'Sprint Triathlon Gdynia', 'Dziesiątka Babicka', '5150 Poznań', 'Mararton Warszawski - kat M20'], 
        datasets: [
            {
                data: [1, 1, 4, 3, 1, 3, 1, 1, 3], 
                borderColor: '#7c5fe9', 
                tension: 0.5, 
            
            }
        ]
    }

        const data2023 = {
        labels: ['HP Indoor Triathlon',], 
        datasets: [
            {
                data: [1,], 
                borderColor: '#7c5fe9', 
                tension: 0.5, 
            
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                labels: {
   
                    font: {
                        size: 14
                    }
                }
            }
        },
        scales : {
            x: {
                grid: {
                    display: false
                }
            }
        }
    }


  return (
    <div className='charts'>
        <div className="charts__box">
        <Box sx={{ bgcolor: 'background.paper', width: '100%', height: '100%' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="2021 r." {...a11yProps(0)} />
          <Tab label="2022 r." {...a11yProps(1)} />
          <Tab label="2023 r." {...a11yProps(2)} />
         
        </Tabs>
      </AppBar>
      <Button
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} style={style.panel}>
                <div className="data">
                    <Line data={data2021} style={style.data} options={options}></Line>
                </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
                <div className="data">
                    <Line data={data2022} style={style.data} options={options}></Line>
                </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
                <div className="data">
                    <Line data={data2023} style={style.data} options={options}></Line>
                </div>
        </TabPanel>
      </Button>
    </Box>
            
        </div>  
    </div>
  )
}
