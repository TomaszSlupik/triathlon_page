import React from 'react'
import './Bloob.scss'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MyTimeline from '../../style/mymuistyle/mytimeline';
import theme from '../../style/mybreakpoints';
import { ThemeProvider } from '@mui/material';

export default function Bloob() {

  return (
    <div className='bloob'>
        <img className='bloob__img' src={process.env.PUBLIC_URL + '/svg/x.svg'} alt=""/>
        <div className="bloob__timeline">
            <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <ThemeProvider theme={theme}>
                <MyTimeline>
                  4 miejsce Mistrzostwa Europy AG w Triathlonie
                  </MyTimeline>
                </ThemeProvider>
              </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <ThemeProvider theme={theme}>
                <MyTimeline>
                  Multimedalista Mistrzostw Polski w Duathlonie
                </MyTimeline>
            </ThemeProvider>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <ThemeProvider theme={theme}>
                <MyTimeline>
                 Mistrz Polski AG w Aquathlonie
                </MyTimeline>
            </ThemeProvider>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
            <ThemeProvider theme={theme}>
                <MyTimeline>
                 Kwalifikacja na Mistrzostwa Świata w St. George w Utah
                </MyTimeline>
            </ThemeProvider>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        </div>
    </div>
  )
}
