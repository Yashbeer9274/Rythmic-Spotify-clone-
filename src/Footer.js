import React, { useEffect, useState } from "react";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import "./Footer.css";
import { Grid } from "@material-ui/core";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

function Footer({ sg }) {
    let [x, setVol] = useState(100);
    let [y, check] = useState({});
    const [{ playing }, dispatch] = useDataLayerValue();

    useEffect(() => {
        sg.getMyCurrentPlaybackState().then((r) => {
            dispatch({
                type: "SET_PLAYING",
                playing: r.is_playing,
            });

            dispatch({
                type: "SET_ITEM",
                item: r.item,
            });
        });
    }, [sg]);

    useEffect(() => {
        sg.getMyCurrentPlaybackState().then((r) => {
            if (y)
                check(y = { itemName: r.item?.name, itemUrl: r.item?.album?.images[0]?.url })
        });
    }, [y]);

    const handlePlayPause = () => {
        if (playing) {
            sg.pause();
            dispatch({
                type: "SET_PLAYING",
                playing: false,
            });
        } else {
            sg.play();
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        }
    };

    const skipNext = () => {
        sg.skipToNext();
        sg.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
                type: "SET_ITEM",
                item: r.item,
            });
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        });
    };

    const skipPrevious = () => {
        sg.skipToPrevious();
        sg.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
                type: "SET_ITEM",
                item: r.item,
            });
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        });
    };
    const volumeUp = () => {
        if (x + 10 <= 100)
            setVol(x += 10);
        else
            setVol(x = 100);
        sg.setVolume(x);
        sg.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
                type: "SET_VOLUME",
                volume: r.volume,
            });
        });
    };
    const volumeDown = () => {
        if (x - 10 >= 0)
            setVol(x -= 10);
        else
            setVol(x = 0);
        sg.setVolume(x);
        sg.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
                type: "SET_VOLUME",
                volume: r.volume,
            });
        });
    };

    return (
        <div className="footer">
            <div className="footer_left">
                <img
                    className="footer_albumLogo"
                    src={y?.itemUrl}
                    alt={y?.itemName}
                />
                <div className="footer_songInfo">
                    {y?.itemName ? <h5>{y.itemName}</h5> : <h5>NO SONG FETCHED</h5>}
                    {/* <p>{item.artists.map((artist) => artist.name).join(", ")}</p> */}
                </div>

            </div>

            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon onClick={skipPrevious} className="footer_icon" />
                {playing ? (
                    <PauseCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer_icon"
                    />
                ) : (
                    <PlayCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer_icon"
                    />
                )}
                <SkipNextIcon onClick={skipNext} className="footer_icon" />
                <RepeatIcon />
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon className="footer_icon" onClick={volumeDown} />
                    </Grid>
                    <Grid item xs>
                        <VolumeUpIcon className="footer_icon" onClick={volumeUp} />
                    </Grid>
                </Grid>
            </div>
        </div >
    );
}

export default Footer;