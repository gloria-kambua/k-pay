export const initialState = {
    basket: [],
    user: JSON.parse(localStorage.getItem("user")),
    address: {},
  };

  const reducer = (state, action) => {
    console.log("action >>>>", action);

    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "SET_USER":
            return state;    
        default:
            return state
    }

}

export default reducer;
