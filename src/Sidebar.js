//main gaane waala sidebar
import React from 'react'
import "./Sidebar.css";
import SidebarOption from "./SidebarOption"
import { useDataLayerValue } from './DataLayer'
import img from './images/Capture.JPG'
// import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

function Sidebar({ sg }) {
    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img src={img} className='main_logo' alt="logo" />
            <br />
            <strong className="sidebar_title">My Playlists</strong>
            <hr />

            {playlists?.items?.map(playlist => (
                <SidebarOption sg={sg} title={playlist.name} playlistId={playlist.id} />
            ))}
        </div >
    );
}

export default Sidebar;
