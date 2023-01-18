import images from '../../assets/img';
import './Song.scss'

function Song() {
    return(
        <div className='song-container d-flex'>
            <img className='song-img' src={images.backgroung} alt=''/>
            <div className='song-info d-flex flex-column justify-content-around flex-wrap flex-grow-1'>
                <p className='song-name'>Pop Bonanza</p>
                <div className='song-detail'>
                     <p className='long'>55:32</p>
                     <p className='views'>43.128 views</p>
                </div>
            </div>
        </div>
    );
}

export default Song;