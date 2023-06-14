import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  product: [
    {
      id: 0,
      quantity: 0,
    },
  ],
};

const cartSlice = createSlice({
  initialState,
  name: "cart slice",
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.product.findIndex((item) => item.id === id);
      if (product) {
        state.product[product].quantity += quantity;
      } else {
        state.product.push({ id, quantity });
      }
    },
  },
});

export default cartSlice.reducer;

export const selectOrder = (state: RootState) => state.cart.product;

export const { addToCart } = cartSlice.actions;
