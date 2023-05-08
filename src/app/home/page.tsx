import React from "react";

import { multiProductsCardData } from "@/store/DummyData/multiProductsCard";
import { topRankingProductsCardData } from "@/store/DummyData/topRankingProductsData";
import { topRankingMultiProductsCardData } from "@/store/DummyData/topRankingMultiProductsData";

import NavBar from "@/components/NavBar";
import MultiProductsCard from "@/components/MultiProductsCard";
import QuotationCard from "@/components/QuotationCard/QuotationCard";
import TradeServices from "@/components/TradeServices";
import Footer from "@/components/Footer";
import NavAccountSettings from "@/components/NavAccountSettings";
import NavProfile from "@/components/NavProfile";
import HeaderLight from "@/components/HeaderLight";
import SignUpForm from "@/components/Forms/SignUpForm";
import HeaderDark from "@/components/HeaderDark";
import NewArrivalsProductCard from "@/components/NewArrivalsProductCard";
import TopRankingProductsCard from "@/components/TopRankingProductsCard";
import TopRankingMultiProductsCard from "@/components/TopRankingMultiProductsCard";
import SellOnTbtForm from "@/components/Forms/SellOnTbtForm";
import QuotationForm from "@/components/Forms/QuotationForm";
import BuyerLeadsCard from "@/components/BuyerLeadsCard";
import SideBar from "@/components/Dashboard/SideBar";
import ProductTable from "@/components/Dashboard/ProductsTable";
import { productsTableData } from "@/store/DummyData/Dashboard/tableData";
import SearchBar from "@/components/Dashboard/SearchBar";
import AccountOverview from "@/components/Dashboard/AccountOverview";
import OrderCard from "@/components/Dashboard/OrderCard";
import OrderDetails from "@/components/Dashboard/OrderDetails";
import PackageHistory from "@/components/Dashboard/PackageHistory";
import { packageHistoryData } from "@/store/DummyData/Dashboard/packageHistoryData";
import ProfileDetailsForm from "@/components/Forms/DashboardForms/ProfileDetailsForm";
import PasswordSettingsForm from "@/components/Forms/DashboardForms/PasswordSettingsForm";
import SubmitSuccessful from "@/components/Forms/DashboardForms/SubmitSuccessful";
import InformdationDetailsForm from "@/components/Forms/DashboardForms/InformdationDetailsForm";
import BuyOnTbtForm from "@/components/Forms/BuyOnTbtForm";
import AddProductForm from "@/components/Forms/DashboardForms/AddProductForm";
import SubmitQuoteForm from "@/components/Forms/DashboardForms/SubmitQuoteForm";
import ProductDetails from "@/components/Dashboard/ProductDetails";

const page = () => {
  return (
    <div className="min-h-[100vh]">
      {/* <QuotationForm /> */}
      {/* <AddProductForm/> */}
      {/* <SubmitQuoteForm /> */}
      {/* <InformdationDetailsForm /> */}
      <main className=" min-h-screen h-full border-4 border-red-500   flex flex-col gap-12 pb-12 bg-gray-50 px-[72px] ">
        <ProductDetails />
        {/* <SubmitSuccessful /> */}
        {/* <PasswordSettingsForm /> */}
        {/* <PackageHistory historyData={packageHistoryData} /> */}

        {/* <OrderDetails
          id="156456848as"
          amount={2}
          date="29-05-2022"
          cost="₦ 6,350"
          orderItems={[
            {
              name: "Raw Cashew Nuts",
              amount: "30,000KG",
              id: "122335565",
              deliveryDate: "31-05-2022",
              img: "https://picsum.photos/100/120",
              isReturnable: true,
              cost: "N500,000",
              returnDate: "15-06-2022",
              quantity:2
            },
            
          ]}
        /> */}

        {/* <OrderCard
          name="Raw Cashew Nuts"
          amount="30,000KG"
          id="122335565"
          deliveryDate="31-05-2022"
          img="https://picsum.photos/200/300"
        /> */}
        {/* <AccountOverview
          name="Yinka Olatunji"
          email="test01@gmail.com"
          shippingAddress={{
            name: "Olayinka Tunji",
            address: {
              street: "212 loloa street, Phase 1",
              city: "Ikeja",
              state: "Lagos",
            },
            phone: "+234 8185622857",
          }}
        /> */}
      </main>
    </div>
  );
};

export default page;
