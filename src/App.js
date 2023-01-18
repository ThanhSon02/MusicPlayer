import './styles/styles.scss';
import './App.scss';
import { useEffect, useState } from 'react';
import images from './assets/img';
import Song from './components/song/Song'

function App() {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);
    // useEffect(() => {
    //     setInterval(() => {
    //         let time = new Date().toLocaleTimeString();
    //         setCurrentTime(time)
    //     }, 1000)
    // }, [])

    return (
        <div className="app container-fluid g-0 d-flex justify-content-between align-items-center">
            <div className='play-section position-relative d-flex justify-content-center'>
                <img className='background position-absolute' src={images.backgroung} alt=''/>
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
                <div className='play-control position-absolute z-1 bottom-0'>

                </div>
            </div>

            <div className='playlist-section'></div>
        </div>
    );
}

export default App;
