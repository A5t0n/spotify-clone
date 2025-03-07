//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  //like a gun in react that allows us to shoot data into the data layer
  const [{ user, token }, dispatch] = useDataLayerValue();

  //useeffect runs code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();

    //hides the access token from the url for security reasons
    window.location.hash = "";

    const _token=hash.access_token;

    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        //dispatching the action to the data layer
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      //pulling user's playlists from spotify using the built in spotify api
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcD2XyRLJEuc9').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        });
      });
    }
  },[]);

  return (<div className="app">
    {/* if a token is present, then displayes a message that you are logged in or else renders the login page */}
      {/* Passing the spotify object inside the player */}
      {token ? <Player spotify={spotify}/> : <Login /> }
    </div>
  );
}

export default App;
