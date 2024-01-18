import { createContext, useContext } from "react";

const initialState = {
    cartList : [],
    total: 0
}

const CartContext = createContext(initialState);

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => {
        const updatedCartList = state.cartList.concat(product);
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products : updatedCartList
            }
        })
    }

    const value = {
        total: 168
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);

    return context;
}