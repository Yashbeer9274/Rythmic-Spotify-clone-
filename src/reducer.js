export const initialState = {
    user: null,
    username: null,
    playlists: [],
    search: null,
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    currPlayingPlaylist: false,
    item: null,
    volume: null,
    token: null,
    // token: "BQDh2ESRoTQxvzV5cHqoqcO87p9PVoG5rS6KTpjKWPnKK5VnBd2H8uPAB5FNyvH1SPxl7O2jIBqfAoZsPogcwuEDhM1dNJNYynBMCrliE4JKSKXKEj836jb8hjKzZU4znD2DjTIyAivDT6xgFUihLZk2Zd10AfZtevsnzw1k18ZYDtNi",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_USERNAME":
            return {
                ...state,
                username: action.username,
            };
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_PLAYING_PLAYLIST":
            return {
                ...state,
                currPlayingPlaylist: action.currPlayingPlaylist,
            };

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_VOLUME":
            return {
                ...state,
                volume: action.volume,
            };
        case "SET_SEARCH":
            return {
                ...state,
                search: action.search,
            };
        default:
            return state;
    }
};
export default reducer;