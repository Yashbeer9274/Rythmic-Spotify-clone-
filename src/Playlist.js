import React from 'react'
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
// import PauseCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
// import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";

const Playlist = ({ sg, playSong, playPlaylist }) => {
    const [{ discover_weekly, playing, currPlayingPlaylist }, dispatch] = useDataLayerValue();
    return (
        <>
            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body_infoText">
                    <strong>MY PLAYLIST</strong>
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body_songs">
                <div className="body_icons">
                    {currPlayingPlaylist ? (
                        <PauseCircleOutlineIcon
                            onClick={playPlaylist}
                            fontSize="large"
                            className="body_shuffle"
                        />
                    ) : (
                        <PlayCircleFilledIcon
                            onClick={playPlaylist}
                            fontSize="large"
                            className="body_shuffle"
                        />
                    )}
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow playSong={playSong} track={item.track} />
                ))}
            </div>
        </>
    )
}

export default Playlist
