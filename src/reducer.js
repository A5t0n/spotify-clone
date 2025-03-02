export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
//   token: "BQA4drv-rLKOTlc6-rl-Mx9itVEkyAMJ1L9i58kVkDmJXo4A7ISa1M-2QXio9gPqH1A-OmBQCdbxKCNmGsMd8rE-bXo7wNVAVxE4y_ReUG-CgkGpRnR0ytqsd2qpd8HPGewf9S3zgx7dUQYQDZnU3DHzqYay8QgXEO8MkDSdEBNm2ofzo5NUom-QMmi7EhKYfqiC_34XaMBApRWb62kz9jz0WMlkYuJtAolcNUZIxa5p_Xw5zyZA"
};

const reducer = (state, action) => {

    //debugging tool to see the action that is dispatched
    console.log(action);

    //action has two properties: type and [payload]
    //type is the type of action that is dispatched
    //payload is the data that is dispatched with the action

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            };

            //if nothing happens, do this
            default:
                return state;
    }
};

export default reducer;