import images from "../../assets/img";
import './Control.scss'

function Control({isPlaying, setIsPlaying, onNextClick, onVolumnClick, onSpeedClick}) {

    return (
        <div className="d-flex justify-content-between">
            <div className="control-btns d-flex">
                <div
                    className="play-pause-btn ms-0"
                    onClick={() => setIsPlaying(!isPlaying)}
                >
                    {isPlaying ? (
                        <img src={images.pause} alt="pauseBtn" />
                    ) : (
                    <img src={images.play} alt="playBtn" />
                    )}
                </div>
                <div className="next-btn"
                    onClick={onNextClick}
                >
                    <img src={images.next} alt="nextBtn" />
                </div>
                <div className="volumn-btn"
                    onClick={onVolumnClick}
                >
                    <img src={images.volumn} alt="volumnBtn" />
                </div>
            </div>
            <div className='options-btns d-flex'>
                <div className='speed-btn me-0'
                    onClick={onSpeedClick}
                >
                    <span>1x</span>
                </div>
            </div>
        </div>
    );
}

export default Control;
