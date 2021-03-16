import React from 'react'
import AudioPlayer from './AudioPlayer'

const App = () => {

  const tracks = [{
    title: 'We Are The People',
    artist: 'Empire Of The Sun',
    audioSrc: '/tracks/EmpireOfTheSun.mp3',
    image: './coverArt/empireOfTheSun.png',
    color: 'red'
  },
  {
    title: 'Temper Temper',
    artist: 'Lime Cordiale',
    audioSrc: '/tracks/limeCordiale.mp3',
    image: './coverArt/limeCordiale.jpg',
    color: 'blue'
  },
  {
    title: 'When Am I Gonna Lose You',
    artist: 'Local Natives',
    audioSrc: '/tracks/localNatives.mp3',
    image: './coverArt/localNatives.jpg',
    color: 'green'
  }

  ]

  return (
    <>
      <AudioPlayer tracks={tracks}/>
    </>
  )
}

export default App
