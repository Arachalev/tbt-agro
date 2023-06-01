import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/redux/store";

interface BuyerProfileInterface {
  address: string;
  bankAccount: string;
  buyerQuotations: [];
  city: string;
  companyAddress: string;
  companyName: string;
  country: null;
  shippingAddress: string;
  email: string;
  fName: string;
  lName: string;
  orders: [];
  pNumber: string;
  profilePicture: null;
  sellerID: string;
  state: string;
}

const initialState: BuyerProfileInterface = {
  address: "",
  bankAccount: "",
  buyerQuotations: [],
  city: "",
  companyAddress: "",
  companyName: "",
  country: null,
  shippingAddress: "",
  email: "",
  fName: "",
  lName: "",
  orders: [],
  pNumber: "",
  profilePicture: null,
  sellerID: "",
  state: "",
};

const profileSlice = createSlice({
  name: "Buyer Profile",
  initialState,
  reducers: {
    setBuyerProfile: (state, action) => {
      const { userData } = action.payload;

      const changedData = {
        address: userData.address,
        bankAccount: userData.bank_account,
        buyerQuotations: userData.buyer_quotations,
        city: userData.city,
        companyAddress: userData.company_address,
        companyName: userData.company_name,
        country: userData.country,
        shippingAddress: userData.default_shipping_address,
        email: userData.email,
        fName: userData.first_name,
        lName: userData.last_name,
        orders: userData.orders,
        pNumber: userData.phone_number,
        profilePicture: userData.profile_picture,
        sellerID: userData.seller_id,
        state: userData.state,
      };

      const actionKeys = Object.keys(changedData);

      actionKeys.map((item) => {
        state[item] = changedData[item as keyof BuyerProfileInterface];
      });
    },
  },
});

export const selectBuyerProfile = (state: RootState) => state.buyerProfile;

export const { setBuyerProfile } = profileSlice.actions;

export default profileSlice.reducer;
