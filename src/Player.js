// hamaara mainpage jisme gaane dikhege
//sidebar body footer
import React from 'react'
import "./Player.css"
import Sidebar from "./Sidebar"
import Body from "./Body"
import Footer from "./Footer"
// css waala part
function Player({ sg }) {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar sg={sg} />
                <Body sg={sg} />
            </div>
            <Footer sg={sg} />
        </div>
    );
}

export default Player;
