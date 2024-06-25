import { createSlice } from "@reduxjs/toolkit";
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
const initialState: {
  cartItems: CartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
} = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
