import * as actionTypes from './actions';
const intialState = {
  UserDetails: [ ]
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ENTRY:

      return {
        ...state,
        UserDetails: [...state.UserDetails, action.userdata]
      };
    case actionTypes.LOGIN:

      return {
        ...state,
        UserDetails: state.UserDetails
      };
       default:
      return state
  }

  // return state;
};

export default reducer;
