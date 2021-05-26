import React, { useState, useEffect } from 'react'
import './SidebarOption.css'
import { useDataLayerValue } from './DataLayer'

function SidebarOption({ sg, title, playlistId }) {
    // console.log("sidebar--->", playlistId);
    let [state, setstate] = useState(0);
    const [{ playlists }, dispatch] = useDataLayerValue();
    useEffect(() => {
        sg.getPlaylist(playlistId).then((response) => {
            dispatch({
                type: "SET_SEARCH",
                search: null,
            });
            dispatch({
                type: "SET_DISCOVER_WEEKLY",
                discover_weekly: response,
            });
            dispatch({
                type: "SET_PLAYING_PLAYLIST",
                currentPlayingPlaylist: false,
            });
        });
    }, [sg, state]);

    function fn() {
        setstate(++state);
        // e.target.style.color = "white";
    }
    return (
        <div className="sidebarOption">
            <p onClick={fn}>{title}</p>
        </div>
    )
}
export default SidebarOption;