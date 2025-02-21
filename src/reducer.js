export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
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
            }
            //if nothing happens, do this
            default:
                return state;
    }
};

export default reducer;