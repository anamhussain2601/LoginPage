import react from "react";
const intialState = {
  UserDetails: [ ]
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      console.log("hi", state.UserDetails);

      return {
        ...state,
        UserDetails: [...state.UserDetails, action.userdata]
      };
    case "LOGIN":
      console.log("hi again", state.UserDetails);

      return {
        ...state,
        UserDetails: state.UserDetails
      };
  }

  return state;
};

export default reducer;
