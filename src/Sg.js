// LOGIN AUTHORIZATION BY SPOTIFY
export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://wizardly-bartik-65166f.netlify.app/";
const clientID = "8fe2de47a29f4c01ba085e48f0e29b67";

// SCOPES/FEATURES YOU WANT FROM SPOTIFY
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "app-remote-control"
];

// GENERATING TOKEN
export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {})
};

// EXPORTING 
export const loginUrl = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;