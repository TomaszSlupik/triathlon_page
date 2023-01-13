import React from 'react'
import './Bloob.scss'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function Bloob() {

  const style = {
    timeline: {color: '#7c5fe9'}
  }

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
            <TimelineContent style={style.timeline}>4 miejsce Mistrzostwa Europy AG w Triathlonie</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent style={style.timeline}>Multimedalista Mistrzostw Polski w Duathlonie</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent style={style.timeline}>Mistrz Polski AG w Aquathlonie</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent style={style.timeline}>Kwalifikacja na Mistrzostwa Świata w St. George w Utah</TimelineContent>
          </TimelineItem>
        </Timeline>
        </div>
    </div>
  )
}
