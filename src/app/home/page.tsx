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

const page = () => {
  return (
    <div className="h-[200vh]">
      <main className=" min-h-screen h-full border-4 border-red-500   flex flex-col gap-12 pb-12 bg-slate-400 px-[72px] ">
        {/* <ProductTable
          column={productsTableData.column}
          data={productsTableData.data}
        /> */}
      </main>
    </div>
  );
};

export default page;
