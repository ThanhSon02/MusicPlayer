import PlaylistItem from "./PlaylistItem/PlaylistItem";
import './Playlist.scss'

function Playlist() {
    return (
        <div className="playlist d-flex container-fluid">
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
        </div>
    );
}

export default Playlist;