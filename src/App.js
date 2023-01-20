import './styles/styles.scss';
import './App.scss';
import { useEffect, useRef, useState } from 'react';
import images from './assets/img';
import Song from './components/Song/Song'
import audios from './assets/audio';
import Player from './components/Player/Player';
import Playlist from './components/Playlist/Playlist';

function App() {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);
    // useEffect(() => {
    //     setInterval(() => {
    //         let time = new Date().toLocaleTimeString();
    //         setCurrentTime(time)
    //     }, 1000)
    // }, [])

    const audioElm = useRef()


    return (
        <div className="app container-fluid px-5">
            <div className='row overflow-hidden'>
                {/* Main section */}
                <div className='play-section g-0 position-relative'>
                    <img className='position-absolute background' src={images.backgroung} alt=''/>
                    <div className='play-section__content position-absolute z-1'>
                        <h3 className='time text-uppercase text-white'>{currentTime}</h3>
                        <h4 className='song_name text-uppercase text-white'>Once upon time in new york</h4>
                        <div className='next-playlist text-white'>
                            Up next
                            <Song/>
                            <Song/>
                            <Song/>
                        </div>
                    </div>
                    <div className='play-control d-flex position-absolute bottom-0 justify-content-center align-items-center'>
                        <audio ref={audioElm} src={audios.song1}></audio>
                        <Player/>
                    </div>
                </div>

                {/* Playlist section */}
                <div className='playlist-section justify-content-center'>
                    <span>Upcoming content</span>

                    {/* Playlist */}
                    <Playlist/>

                </div>
            </div>
        </div>
    );
}

export default App;
