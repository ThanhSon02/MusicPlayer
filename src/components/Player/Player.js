import './Player.scss'
import images from '../../assets/img';

function Player() {
    const isPlaying = true;
    return (
        <div className="container d-flex flex-column justify-content-between">
            <div className='player-bar'>
                <input type={'range'}/>
            </div>
            <div className='player-btns d-flex justify-content-between'>
                <div className='control-btns d-flex'>
                    {isPlaying ?
                        <div className='pause-btn btn ms-0'>
                            <img src={images.pause} alt='pauseBtn'/>
                        </div>
                    :
                        <div className='play-btn btn'>
                            <img src={images.play} alt='playBtn'/>
                        </div>
                    }

                    <div className='next-btn btn'>
                            <img src={images.next} alt='nextBtn'/>
                    </div>

                    <div className='volumn-btn btn'>
                            <img src={images.volumn} alt='volumnBtn'/>
                    </div>
                </div>

                <div className='options-btns d-flex'>
                    <div className='speed-btn btn me-0'>
                        <span>1x</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Player;