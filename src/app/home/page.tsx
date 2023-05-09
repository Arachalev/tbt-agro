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
import AddedToCartCard from "@/components/Dashboard/AddedToCardCard";
import CartSubTotal from "@/components/Dashboard/CartSubTotal";
import CartCard from "@/components/Dashboard/CartCard";
import PaymentMethod from "@/components/Dashboard/PaymentMethod";
import ShiipingAndLogistics from "@/components/Dashboard/ShipingAndLogistics";
import OrderSummary from "@/components/Dashboard/OrderSummary";
import CheckOutCard from "@/components/Dashboard/CheckOutCard";

const page = () => {
  return (
    <div className="min-h-[100vh]">
      <main className=" min-h-screen h-full border-4 border-red-500   flex flex-col gap-12 pb-12 bg-gray-50 px-[72px] ">
        <CheckOutCard
          name={"Yinka Olatunji"}
          address={" 212 Lola street, Omo phase 1, Ikeja (OPEBI), Lagos "}
          deliveryDate={"Thursday, May 4"}
          img={"https://picsum.photos/200/300"}
        />
      </main>
    </div>
  );
};

export default page;
