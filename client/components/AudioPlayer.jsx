import React, { useState, useEffect, useRef } from 'react'

import AudioControls from './AudioControls'

export default function AudioPlayer ({ tracks }) {
  // STATE
  const [trackIndex, setTrackIndex] = useState(0)
  const [trackProgress, setTrackProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  // Destructure items out of Tracks
  const { title, artist, audioSrc, color, image } = tracks[trackIndex]

  // Define UseRefs

  const audioRef = useRef(new Audio(audioSrc))
  const intervalRef = useRef()
  const isReady = useRef(false)

  const { duration } = audioRef.current

  // Change Track Functions
  const toPrevTrack = () => {
    console.log('prev:', trackIndex)
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1)
    } else {
      setTrackIndex(trackIndex - 1)
    }
  }

  const toNextTrack = () => {
    console.log('next:', trackIndex)
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1)
    } else {
      setTrackIndex(0)
    }
  }

  // USE EFFECT HOOKS

  // PLAY/PAUSE TRACK
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause()
      clearInterval(intervalRef.current)
    }
  }, [])

  // USE EFFECT FOR CHANGING TRACKS
  useEffect(() => {
    audioRef.current.pause()

    audioRef.current = new Audio(audioSrc)
    setTrackProgress(audioRef.current.currentTime)

    if (isReady.current) {
      audioRef.current.play()
      setIsPlaying(true)
      // startTimer()
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true
    }
  }, [trackIndex])

  return (
    <>
      <div className="audio-player">
        <div className="track-info">
          <img className="artwork" src={image} alt={`track artwork for ${title} by ${artist}`} />
          <h2 className="title">{title}</h2>
          <h3 className="artist">{artist}</h3>
          <AudioControls
            isPlaying={isPlaying}
            onPrevClick={toPrevTrack}
            onNextClick={toNextTrack}
            onPlayPauseClick={setIsPlaying} />
        </div>
      </div>

    </>
  )
}
