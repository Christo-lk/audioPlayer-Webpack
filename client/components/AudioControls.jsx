import React from 'react'

import Play from './play.svg'
import Pause from './pause.svg'
import Prev from './prev.svg'
import Next from './next.svg'

export default function AudioControls ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick
}) {
  return (
    <>
      <div className="audio-controls">
        {/* Pause Button */}
        <button type='button' className='prev' aria-label='prev' onClick={onPrevClick}>
          <img src={Prev} className="w-10"/>
        </button>

        { isPlaying
          ? <button type="button" onClick={() => onPlayPauseClick(false)}>
            <img src={Pause} className="w-10"/>
          </button>
          : <button type="button" aria-label="Play" onClick={() => onPlayPauseClick(true)}>
            <img src={Play} className="w-10" />
          </button>
        }

        <button type='button' className='next' aria-label='next' onClick={onNextClick}>
          <img src={Next} className="w-10"/>
        </button>

      </div>
    </>
  )
}
