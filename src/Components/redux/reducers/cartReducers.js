import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [
        {name: 'lenevo laptop', id: 1},
        {name: 'Acer laptop', id: 2},
        {name: 'Asus laptop', id: 3},
        {name: 'Walton laptop', id: 4},
        {name: 'Samsung laptop', id: 5},
    ]
}

const cartReducers = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const newItem = {
                productId: action.id, 
                name: action.name,
                cartId: state.cart.length + 1
            };
            const newCart = [...state.cart, newItem];
            return {products: state.products, cart: newCart};
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.cartId !== id)
            return {products: state.products, cart: remainingCart}    

        default: 
            return state;
    }
}

export default cartReducers;