import './styles/styles.scss';
import './App.scss';
import Player from './components/Player/Player';
import Playlist from './components/Playlist/Playlist';
import audios from './assets/audio';

function App() {
    return (
        <div className="app container-fluid d-flex justify-content-center px-5">
            <div className='row overflow-hidden' style={{width: 1440}}>

                {/* Main section */}
                <Player
                    tracksSrc={audios}
                />
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
