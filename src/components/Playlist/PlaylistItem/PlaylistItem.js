import './PlaylistItem.scss'
import images from '../../../assets/img';

function PlaylistItem() {
    return (
        <div className="playlist-item col">
            <img className="playlist-item__image" src={images.backgroung} alt=""/>
            <div className='playlist-item__desc'>
                <p className='desc-name'>Cameron Williamson</p>
                <h4 className='desc-song-name'>Aubrey</h4>
                <div className='desc-info'>
                    <p className='info-views'>1M Viewers</p>
                    <p className='info-time'>19 days ago</p>
                </div>
            </div>
        </div>
    );
}

export default PlaylistItem;