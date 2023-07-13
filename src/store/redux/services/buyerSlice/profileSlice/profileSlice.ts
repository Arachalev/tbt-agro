import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/redux/store";

interface BuyerProfileInterface {
  address: string;
  bankAccount: string;
  buyerQuotations: [];
  city: { name: string; id: number };
  companyAddress: string;
  companyName: string;
  country: { id: number; name: string };
  shippingAddress: string;
  email: string;
  fName: string;
  lName: string;
  orders: [];
  pNumber: string;
  profilePicture: string;
  sellerID: string;
  state: { name: string; id: number };
}

const initialState: BuyerProfileInterface = {
  address: "",
  bankAccount: "",
  buyerQuotations: [],
  city: { name: "", id: 0 },
  companyAddress: "",
  companyName: "",
  country: { name: "", id: 0 },
  shippingAddress: "",
  email: "",
  fName: "",
  lName: "",
  orders: [],
  pNumber: "",
  profilePicture: "",
  sellerID: "",
  state: { name: "", id: 0 },
};

const profileSlice = createSlice({
  name: "Buyer Profile",
  initialState,
  reducers: {
    setBuyerProfile: (state, action) => {
      const { userData } = action.payload;

      const fName =
        userData.first_name.charAt(0).toUpperCase() +
        userData.first_name.slice(1);
      const lName =
        userData.last_name.charAt(0).toUpperCase() +
        userData.last_name.slice(1);

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
        fName,
        lName,
        orders: userData.orders,
        pNumber: userData.phone_number,
        profilePicture: userData.profile_picture,
        sellerID: userData.seller_id,
        state: userData.state,
      };

      // const actionKeys = Object.keys(changedData);

      state.address = changedData.address;
      state.bankAccount = changedData.bankAccount;
      state.buyerQuotations = changedData.buyerQuotations;
      state.city = changedData.city;
      state.companyAddress = changedData.companyAddress;
      state.companyName = changedData.companyName;
      state.country = changedData.country;
      state.shippingAddress = changedData.shippingAddress;
      state.email = changedData.email;
      state.fName = changedData.fName;
      state.lName = changedData.lName;
      state.orders = changedData.orders;
      state.pNumber = changedData.pNumber;
      state.profilePicture = changedData.profilePicture;
      state.sellerID = changedData.sellerID;
      state.state = changedData.state;
    },
  },
});

export const selectBuyerProfile = (state: RootState) => state.buyerProfile;

export const { setBuyerProfile } = profileSlice.actions;

export default profileSlice.reducer;
