import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState: {
  product: {
    quantity: number;
    id: number;
    product: {
      images: string[];
      user: { seller_id: string };
      category: { name: string };
      name: string;
      sale_price: number;
      id: number;
      quantity: number;
    };
  }[];
} = {
  product: [],
};

const cartSlice = createSlice({
  initialState,
  name: "cart slice",
  reducers: {
    addToCart: (state, action) => {
      const data = action.payload;
      // const product = state.product.findIndex((item) => item.id === data.id);
      // if (product) {
      // state.product[product].quantity += quantity;
      state.product = data;
      // }
    },
  },
});

export default cartSlice.reducer;

export const selectCart = (state: RootState) => state.cart.product;

export const { addToCart } = cartSlice.actions;
