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
  cartSummary: {
    total: number;
    count: number;
  };
} = {
  product: [],
  cartSummary: {
    total: 0,
    count: 0,
  },
};

const cartSlice = createSlice({
  initialState,
  name: "cart slice",
  reducers: {
    addToCart: (state, action) => {
      const data = action.payload;
      state.product = data;
    },
    setSummary: (state, action) => {
      const data = action.payload;
      state.cartSummary.count = data.count;
      state.cartSummary.total = data.total;
    },
  },
});

export default cartSlice.reducer;

export const selectCart = (state: RootState) => state.cart;

export const { addToCart, setSummary } = cartSlice.actions;
