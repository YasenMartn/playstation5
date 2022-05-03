import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    }, 
    reducers:{
        addProduct: (state, action) => {
            const peusdoId = (new Date()).getTime();
            state.products.push({
                id: peusdoId,
                productId: action.payload.product.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.product.price,
                price: action.payload.product.price,
                name: action.payload.product.name,
                image: action.payload.product.image,
                desc: action.payload.product.desc
            });
            state.quantity += 1  
            state.total += action.payload.product.price * action.payload.quantity;
            toast.success("item added to cart")
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(
                product => product.id !== action.payload.productid
            )
            state.quantity -= 1;
            toast.error("item has been removed")
        },
        clearCart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
            toast.error("Your cart has been cleared")
        },
        increase: (state, action) => {
            const product = state.products.find(product => product.id === action.payload.productid)
            product.quantity += 1;
            product.totalPrice = product.quantity * action.payload.product.price

        },
        decrease: (state, action) => {
            const product = state.products.find(product => product.id === action.payload.productid)
            if(product.quantity <= 1){
                state.products = state.products.filter(
                    product => product.id !== action.payload.productid
                )
                state.quantity -= 1;
            }
            product.quantity -= 1;
            product.totalPrice = product.quantity * action.payload.product.price
        }
    }
})

export const getTotalPrice = state => {
    return state.cart.products.reduce((total, cartItem) =>{
        return cartItem.totalPrice + total;
    }, 0);
}

export const {addProduct, removeProduct, clearCart, increase, decrease} = cartSlice.actions;

export default cartSlice.reducer;