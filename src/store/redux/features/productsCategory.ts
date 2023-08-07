import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = [{ name: "", icon: "", id: 1 }];

const productsCategorySlice = createSlice({
  initialState,
  name: "products category",
  reducers: {
    updateProductCategory: (
      state,
      action: PayloadAction<{ name: string; icon: string; id: number }[]>
    ) => {
      const data = action.payload;
      state = data;
    },
  },
});

export const selectProductsCategory = (state: RootState) =>
  state.productsCategory;
export const { updateProductCategory } = productsCategorySlice.actions;
export default productsCategorySlice.reducer;
