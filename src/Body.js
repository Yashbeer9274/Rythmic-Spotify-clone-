import React, { useState, useEffect } from "react";
import "./Body.css";
import SongRow from "./SongRow";
import Header from './Header'
import './Header.css'
import { useDataLayerValue } from "./DataLayer";
import Playlist from './Playlist'


function Body({ sg }) {
    const [{ playing, discover_weekly, search }, dispatch] = useDataLayerValue();

    const playPlaylist = (id) => {
        if (!playing) {
            sg.play({
                context_uri: `spotify:playlist:${discover_weekly.id}`,
            }).then((res) => {
                sg.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                    dispatch({
                        type: "SET_PLAYING_PLAYLIST",
                        currPlayingPlaylist: true,
                    });
                });
            });
        } else {
            sg.pause();
            dispatch({
                type: "SET_PLAYING",
                playing: false,
            });
            dispatch({
                type: "SET_PLAYING_PLAYLIST",
                currPlayingPlaylist: false,
            });
        }
    };

    const playSong = (id) => {
        sg.play({
            uris: [`spotify:track:${id}`],
        }).then((res) => {
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
        });
    };
    return (
        <div className="body">
            <Header sg={sg} />

            {search && search?.tracks.items.map((item) => (
                <SongRow playSong={playSong} track={item} />
            ))}

            {!search && <Playlist sg={sg} playSong={playSong} playPlaylist={playPlaylist} />}
        </div>
    );
}
export default Body;

