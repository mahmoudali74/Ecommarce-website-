let INITIAL_STATE={
    quantitynum:1,
    cart:[]
}

export default function Reducer(state=INITIAL_STATE,action){
    switch (action.type) {
        case 'SET_QUANTITY':
            return{...state,quantitynum:action.payload}

        // case 'SET_CART':
        //     // return{...state,favorites: [...state.favorites, action.payload] };
        //     return { ...state, cart: action.payload };
        case 'SET_CART':
            return { ...state, cart: [...state.cart, action.payload] };
    
        default:
            return state;
    }
}