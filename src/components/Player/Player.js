import './Player.scss'
import Control from './Control';
import ProgressBar from './Progressbar';
import { useState, useRef, useEffect } from 'react';

function Player({ tracksSrc }) {

    const [isPlaying, setIsPlaying] = useState(false)
    const [trackIndex, setTrackIndex] = useState(0)
    const [trackProgress, setTrackProgress] = useState(0)
    const audioRef = useRef(new Audio(tracksSrc[0].src))

    useEffect(() => {
        if(isPlaying) {
            audioRef.current.play()
        }else {
            audioRef.current.pause()
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
        <div className="container d-flex flex-column justify-content-between">
            <ProgressBar/>
            <Control
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                onNextClick={toNextTrack}
                onVolumnClick={toAdjustVolumn}
                onSpeedClick={toAdjustSpeed}
            />
        </div>
    );
}

export default Player;