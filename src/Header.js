import React, { useState, useEffect } from "react";
import "./Header.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useDataLayerValue } from "./DataLayer";


function Header({ sg }) {
    let x = localStorage.getItem('myName');
    const [{ user }, dispatch] = useDataLayerValue();
    let [value, upd] = useState("");
    useEffect(() => {
        sg.searchTracks(value).then((r) => {
            console.log(r);
            if (value) {
                dispatch({
                    type: "SET_SEARCH",
                    search: r,
                });
            } else {
                dispatch({
                    type: "SET_SEARCH",
                    search: null,
                });
            }
        });
    }, [sg, value]);

    const searchIt = (e) => {
        e.preventDefault();
        value = e.target.value;
        if (value)
            upd(value)
        else
            upd("");
    }
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-light justify-content-between">
                <form className="form-inline">
                    <input type="text" className="form-control" placeholder="Search" onInput={searchIt} size="40" />
                    <AccountCircleIcon fontSize="large" className="AccountCircleIcon" />
                    &nbsp;
                    <h4>{x === null ? "Are u unamed?" : x}</h4>
                </form>
            </nav>
        </div>
    );
}
export default Header;