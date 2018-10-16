import react from "react";
import * as actionTypes from './actions';
const intialState = {
  UserDetails: [ ]
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ENTRY:
      console.log("hi", state.UserDetails);

      return {
        ...state,
        UserDetails: [...state.UserDetails, action.userdata]
      };
    case actionTypes.LOGIN:
      console.log("hi again", state.UserDetails);

      return {
        ...state,
        UserDetails: state.UserDetails
      };
  }

  return state;
};

export default reducer;
