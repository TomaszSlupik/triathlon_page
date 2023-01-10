import React from 'react'
import Wave from 'react-wavify'

export default function Waveanimation() {

const style = {
    wave: {height: '100px', marginTop: '1em'}
}

  return (
    <div>
        <div> 
          <Wave 
        style={style.wave}
        fill='#fff'
        paused={false}
        options={{
        height: 20,
        amplitude: 20,
        speed: 0.15,
        points: 3
        }}
        />
        </div>
    </div>
  )
}
