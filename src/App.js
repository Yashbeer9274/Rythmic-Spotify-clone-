import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { getTokenFromUrl } from "./Sg";
import "./App.css";
import Login from "./Login";
import { useDataLayerValue } from "./DataLayer";

const s = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);
      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      s.getPlaylist("6nHov2qpOZ8z0Y1PIGml25").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player sg={s} />}
    </div>
  );
}

export default App;