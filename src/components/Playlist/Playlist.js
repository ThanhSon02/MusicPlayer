import PlaylistItem from "./PlaylistItem/PlaylistItem";
import './Playlist.scss'

function Playlist() {
    return (
        <div className="playlist row justify-content-center">
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
        </div>
    );
}

export default Playlist;