export const initialState = {
    basket: [],
    user: JSON.parse(localStorage.getItem("user")),
    address: {},
  };

 export const getTotalBasket=(basket)=>basket?.reduce((amount,item)=>item.price+amount,0)
  const reducer = (state, action) => {
    console.log("action >>>>", action);

    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case"REMOVE_FROM_BASKET":
            //get the index of that product whose id is action.id
            const index=state.basket.findIndex(
                (basketItem)=>basketItem.id===action.id
                )
            //create new basket inorder to remove the product from the old basket    
            let newBasket=[...state.basket]
            if(index>=0){
                //remove the product fro the basket
                newBasket.splice(index,1)
            }
            console.warn(` can't remove the product because the id is ${index}`)
            return{
                ...state,
                basket:newBasket
            }
        case"SET_ADDRESS":
            return{
                ...state,
                address:{...action.item}
            }
        default:
            return state
    }

}

export default reducer;
