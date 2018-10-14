import react from 'react'
const intialState = {
 UserDetails:[]
};
const reducer = (state = intialState, action) => {
if(action.type ==='CHECK_CREDENTIAL'){
    console.log('cool')
    this.state.UserDetails.map((data, index) => {
      if (this.state.email === data.email)
       {
        if (this.state.password === data.passwordDetail) {
          console.log("success");
          return null
        } 
        else if (this.state.password !== data.password) {
          console.log("fail");
        }
        return null
      }
      else{
        console.log('failed bhaisaab ')
      }
       
      return null;
    });
}
  
    return state;
  };

  export default reducer;
