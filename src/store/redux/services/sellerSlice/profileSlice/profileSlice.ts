import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/redux/store";

interface SellerProfileInterface {
  address: string;
  bankAccount: string;
  buyerQuotations: [];
  city: { id: number; name: string };
  companyAddress: string;
  companyName: string;
  country: { id: number; name: string };
  shippingAddress: string;
  email: string;
  fName: string;
  lName: string;
  orders: [];
  pNumber: string;
  profilePicture: null;
  sellerID: string;
  state: { id: number; name: string };
}

const initialState: SellerProfileInterface = {
  address: "",
  bankAccount: "",
  buyerQuotations: [],
  city: { id: 0, name: "" },
  companyAddress: "",
  companyName: "",
  country: { id: 0, name: "" },
  shippingAddress: "",
  email: "",
  fName: "",
  lName: "",
  orders: [],
  pNumber: "",
  profilePicture: null,
  sellerID: "",
  state: { id: 0, name: "" },
};

const profileSlice = createSlice({
  name: "Buyer Profile",
  initialState,
  reducers: {
    setSellerProfile: (state, action) => {
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

      // actionKeys.map((item) => {
      //   state[item] = changedData[item as keyof SellerProfileInterface];
      // });

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

export const selectSellerProfile = (state: RootState) => state.sellerProfile;

export const { setSellerProfile } = profileSlice.actions;

export default profileSlice.reducer;
