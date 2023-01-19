import PlaylistItem from "./PlaylistItem/PlaylistItem";
import './Playlist.scss'

function Playlist() {
    return (
        <div className="playlist d-flex justify-content-around">
            <PlaylistItem/>
        </div>
    );
}

export default Playlist;