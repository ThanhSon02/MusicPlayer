import './styles/styles.scss';
import './App.scss';
import { useState } from 'react';
import Song from './components/Song/Song';
import Player from './components/Player/Player';
import Playlist from './components/Playlist/Playlist';
import audios from './assets/audio';

function App() {

    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    // useEffect(() => {
    //     setInterval(() => {
    //         let time = new Date().toLocaleTimeString();
    //         setCurrentTime(time)
    //     }, 1000)
    // }, []);


    return (
        <div className="app container-fluid d-flex justify-content-center px-5">
            <div className='row overflow-hidden' style={{width: 1440}}>

                {/* Main section */}
                <div className='play-section d-flex flex-column align-items-center g-0'>
                    <div className='play-section__content'>
                        <h3 className='time text-uppercase text-white'>{currentTime}</h3>
                        <h4 className='song_name text-uppercase text-white'>Once upon time in new york</h4>
                        <div className='next-playlist text-white'>
                            Up next
                            <Song/>
                            <Song/>
                            <Song/>
                        </div>
                    </div>
                    <div className='play-control d-flex justify-content-center align-items-center'>
                        <Player
                            tracksSrc={audios}
                        />
                    </div>
                </div>
                {/* Playlist section */}
                <div className='playlist-section'>
                    <span>Upcoming content</span>

                    {/* Playlist */}
                    <Playlist/>

                </div>
            </div>
        </div>
    );
}

export default App;
