//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import { set } from 'mongoose';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);

  //useeffect runs code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();

    //hides the access token from the url for security reasons
    window.location.hash = "";

    const _token=hash.access_token;

    if(_token){
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log("PERSON: ", user);
      });
    }
    console.log("I HAVE A TOKEN: ", token);
  },[]);

  return (
    <div className="app">
      
      {/* if a token is present, then displayes a message that you are logged in or else renders the login page */}
      {
        token ? 
          <h1> I am logged in </h1> :<Login />
      }
    </div>
  );
}

export default App;
