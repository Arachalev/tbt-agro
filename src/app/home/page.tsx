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

const page = () => {
  return (
    <>
      {/* <SellOnTbtForm /> */}
      {/* <HeaderDark /> */}
      <QuotationForm />
      <HeaderLight variant="base" />
      {/* <SignUpForm /> */}
      {/* <main className=" min-h-screen  flex flex-col gap-12 pb-12 bg-slate-400 px-[72px] "> */}
      {/* <TopRankingMultiProductsCard
          products={topRankingMultiProductsCardData.products}
          title={topRankingMultiProductsCardData.title}
          href={topRankingMultiProductsCardData.href}
        /> */}
      {/* {topRankingProductsCardData.map((item) => (
          <TopRankingProductsCard
            key={item.key}
            image={item.image}
            amount={item.amount}
            rating={item.rating}
            name={item.name}
            price={item.price}
            score={item.score}
          />
        ))} */}
      {/* <div>
          {multiProductsCardData.products.map((item) => (
            <NewArrivalsProductCard
              image={item.image}
              key={item.key}
              name={item.name}
              location={item.location}
              sellerID={item.sellerID}
              price={item.price}
            />
          ))}
        </div> */}
      {/* <NavBar /> */}
      {/* <MultiProductsCard
        products={multiProductsCardData.products}
        title={multiProductsCardData.title}
      /> */}
      {/* <QuotationCard /> */}
      {/* <TradeServices /> */}
      {/* <NavAccountSettings /> */}
      {/* <NavProfile /> */}
      {/* </main> */}
      {/* <Footer /> */}
    </>
  );
};

export default page;
