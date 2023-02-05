import './Player.scss'
import Control from './Control';
import { useState, useRef, useEffect } from 'react';

function Player({ tracksSrc }) {

    const [isPlaying, setIsPlaying] = useState(false)
    const [trackIndex, setTrackIndex] = useState(0)
    const [trackProgress, setTrackProgress] = useState(0)
    const audioRef = useRef(new Audio(tracksSrc[0].src))

    const onScrub = (value) => {
        audioRef.current.currentTime = value
        setTrackProgress(audioRef.current.currentTime)
    }

    const trackStyle = `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(10, #fff), color-stop(20, #777))`

    useEffect(() => {
        if (audioRef.current.src) {
            if(isPlaying) {
                audioRef.current.play()
                console.log(audioRef.current.currentTime);
            }else {
                audioRef.current.pause()
            }
        }

    },[isPlaying])

    const toNextTrack = () => {
        console.log("To next track");
    }

    const toAdjustVolumn = () => {
        console.log("To adjust volumn");
    }

    const toAdjustSpeed = () => {
        console.log("To adjust speed");
    }


    return (

        <div className='play-section d-flex flex-column align-items-center g-0'>
            <div className='play-section__content'>
                <h4 className='song_name text-uppercase text-white'>Once upon time in new york</h4>
                <div className='next-playlist text-white'>
                    Up next
                </div>
            </div>
                <div className='play-control d-flex justify-content-center align-items-center'>
                    <div className="container d-flex flex-column justify-content-between">
                    <label>
                        <input
                            className='progress-bar'
                            type="range"
                            step="1"
                            min="0"
                            max="100"
                            onChange={(e) => {onScrub(e.target.value)}}
                            value={trackProgress}
                            onInput={(e) => {
                                console.log(e.target.value)
                                e.target.style.backgroundSize = e.target.value + '% 100%'
                            }}
                        />
                    </label>

                        <Control
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            onNextClick={toNextTrack}
                            onVolumnClick={toAdjustVolumn}
                            onSpeedClick={toAdjustSpeed}
                        />
                </div>
            </div>
        </div>

    );
}

export default Player;