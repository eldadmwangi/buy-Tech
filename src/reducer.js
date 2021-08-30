    // this is like a global store of things and the reducer listens for changes
export const initialState = {
    basket :[],
}

//  build a selector

export const getBasketTotal =(basket) => basket?.reduce((amount, item)=> item.price + amount, 0 );

const reducer = (state, action) => {
        // console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state, basket:[...state.basket, action.item],
            };

            case 'REMOVE_FROM_BASKET':
           const index = state.basket.findIndex(
               (basketItem) => basketItem.id === action.id
           )
           let newBasket = [...state.basket]

           if(index >= 0) {
               newBasket.splice(index,1)
           } 
           else{
               console.warn( `cant remove (id: ${action.id}) since its not in basket`)
           }

           return {
               ...state,
               basket:newBasket
           }

            default :
            return state;
    }

}

export default reducer;