//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import { set } from 'mongoose';

function App() {

  const [token, setToken] = useState(null);

  //useeffect runs code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();

    //hides the access token from the url for security reasons
    window.location.hash = "";

    const _token=hash.access_token;

    if(token){
      setToken(_token);
    }
    console.log("I HAVE A TOKEN: ", token);
  });

  return (
    <div className="app">
      {/* Spotify Logo */}
      {/* Login with Spotify Button */}

      <Login />
    </div>
  );
}

export default App;
