    // this is like a global store of things and the reducer listens for changes
export const initialState = {
    basket :[],
}

const reducer = (state, action) => {
        // console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state, basket:[...state.basket, action.item],
            }
            default :
            return state;
    }

}

export default reducer;