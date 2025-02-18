//no caps on the file name as it is not a component
//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#


//once you click login with spotify, you will be redirected to the spotify login page=> the authendpoint verifies your credendtials using spotify api
export const authEndpoint = "https://accounts.spotify.com/authorize";

//after the user logs in, they will be redirected to the redirect uri which is our localhost3000
const redirectUri = "https://localhost:3000/";

//client id is the id that spotify gives you when you create a new app in spotify for developer
const clientId = "5738aa92ebae4cb4a0d54c21833ba092";

//scopes are the permissions that you want to give to the user
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

//this function allows us to get the token from the url returned by spotify after the user logs in
export const getTokenFromUrl = () => {
    // example of the url returned by spotify after the user logs in
    //https://localhost:3000/#accesstoken=mysupersecret&name=astappan&age=21
    return window.location.hash
    .substring(1)
    
    //splitting the url into parts using the or till & symbol
    .split('&')
    .reduce((initial, item) => {

        //here we again split the first part of the url (accesstoken=mysupersecret) using the = symbol
        let parts = item.split('=');

        //initial is the first part of the url (accesstoken) and parts[1] is the second part of the url (mysupersecret)
        //basically accessing the accesstoken and the value of the accesstoken
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;