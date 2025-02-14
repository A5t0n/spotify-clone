//no caps on the file name as it is not a component
//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#


//once you click login with spotify, you will be redirected to the spotify login page=> the authendpoint verifies your credendtials using spotify api
export const authEndpoint = "https://accounts.spotify.com/authorize";

//after the user logs in, they will be redirected to the redirect uri which is our localhost3000
const redirectUri = "http://localhost:3000/";