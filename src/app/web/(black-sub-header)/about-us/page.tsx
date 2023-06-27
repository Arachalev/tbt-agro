import React from "react";

import Img1 from "../../../../../public/images/about/about1.png";
import Img2 from "../../../../../public/images/about/about2.png";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col gap-[80px] text-agro-black  bg-agro-floral-white   pt-[72px] pb-[100px]  xl:pb-[280px]">
      <section className="2xl:w-[1400px] 2xl:mx-auto px-4 xl:px-[72px] flex flex-col md:flex-row  items-center md:justify-between gap-4 sm:gap-10 xl:gap-[132px] ">
        <div className=" w-full md:w-1/2 flex flex-col gap-5 md:gap-10 xl:gap-[80px]">
          <div>
            <h4
              id="about-us"
              className="overflow-clip font-semibold  text-xl md:text-2xl xl:text-[40px] mb-2 md:mb-5"
            >
              About Us
            </h4>
            <p className="text-sm md:text-base ">
              TBT Agricultural Commodity Trading Company is an Agricultural
              digital marketing platform involved in the Sourcing & Trading of
              agricultural commodities and making it available in large
              quantities for industrial, commercial and personal consumption.
            </p>
          </div>
          <div className="">
            <h4
              id="who-we-are"
              className="xl:h-8 overflow-clip font-semibold  text-xl xl:text-[40px] mb-2 md:mb-5"
            >
              Who We Are
            </h4>
            <div className="flex flex-col gap-3 md:gap-5 text-sm md:text-base">
              <p className="">
                At TBT, we specialize in sourcing the finest agro commodities
                from smallholder farmers and connecting them with other
                agricultural institutions to enable them earn decent income,
                learn the rudiments of agribusiness and increase the
                availability of agro commodities.
              </p>
              <p>
                TBT was inspired by the desire to meet the needs of both farmers
                and consumers of agro commodities and also to bridge the gap
                between the demand of agricultural commodities and its supply.
              </p>
              <p>
                We are a fast growing organization with well seasoned and
                experienced team members established with the aim of alleviating
                food insecurity within African and international communities. We
                are focused on becoming Africa&apos;s largest supplier and
                exporter of agro commodities.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={Img1}
            alt="landscape image"
            // height={456}
            // width={528}
            className="rounded-[10px] "
          />
        </div>
      </section>

      {/* ****************************************************************** */}

      <section className="2xl:w-[1400px] 2xl:mx-auto px-4  xl:px-[72px] flex flex-col md:flex-row items-center md:justify-between gap-4 sm:gap-10 md:gap-[132px] ">
        <div className=" md:w-1/2 flex flex-col gap-5 md:gap-10 xl:gap-[80px]">
          <div className="">
            <h4
              id="our-background"
              className="overflow-clip xl:h-11 font-semibold  text-xl md:text-2xl xl:text-[40px] mb-2 md:mb-5"
            >
              Our Background
            </h4>
            <div className="flex flex-col gap-3 md:gap-5 text-sm md:text-base">
              <p className="">
                At TBT, we specialize in sourcing the finest agro commodities
                from smallholder farmers and connecting them with other
                agricultural institutions to enable them earn decent income,
                learn the rudiments of agribusiness and increase the
                availability of agro commodities.
              </p>
              <p>
                TBT is focused on making a valid mark in Nigeria&apos;s
                Agricultural sector. We are motivated towards delivering
                services in swiftness, effectiveness and efficiency to exceed
                the expectation of our esteemed customers.
              </p>
            </div>
          </div>
          <div className="">
            <h4
              id="our-procedure"
              className=" overflow-clip font-semibold text-xl md:text-2xl xl:text-[40px] mb-2 md:mb-5"
            >
              Our Procedure
            </h4>
            <div className="flex flex-col gap-3 md:gap-5  text-sm md:text-base">
              <p className="">
                We believe the market is a growing one and with our growing pool
                of well seasoned farmers, we are not only stationed to provide
                you with large quantities of agro products but to supply quality
                and nutritious agricultural products at the right time, at the
                right quantity and at the most affordable cost.
              </p>
              <p>
                We&apos;ve ensured that our partner farmers comply with food
                safety, regulatory and quality requirements. Our unique ability
                to source for agro products and our successful track record in
                agricultural networking makes us an invaluable partner in the
                industry.
              </p>
              <p>
                Within the few years of its existence TBT has grown to have a
                vast network of influential and renowned industry partners
                across all works of life. 
              </p>
              <p>
                We trade on the world&apos;s major exchanges in a wide range of
                products including but not limited to Maize, Soybeans, Cashew
                nuts, Ginger, Cocoa, Sesame seeds, shea butter, shea nuts, Plant
                seedlings, fertilizers.
              </p>
            </div>
          </div>
          <div className="">
            <h4 className="overflow-clip font-semibold text-xl md:text-2xl xl:text-[40px] mb-2 md:mb-5">
              Our Focus
            </h4>
            <div className="flex flex-col gap-3 md:gap-5  text-sm md:text-base">
              <p className="">
                At TBT our customers are our priority and we have always worked
                towards providing services that exceeds their expectations. 
              </p>
              <p>
                We thoroughly make sure that our client&apos;s orders are
                delivered speedily  at the contracted time, quality and quantity
                specifications to ensure a favorable and long lasting
                relationship with them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ******************************************************************** */}

      <section className="2xl:w-[1400px] 2xl:mx-auto px-4 xl:px-[72px] flex flex-col md:flex-row items-start md:justify-between gap-4 sm:gap-10 xl:gap-[132px] ">
        <div className=" md:w-1/2 flex flex-col gap-5 md:gap-10 xl:gap-[80px]">
          <div className="">
            <h4
              id="our-brand-story"
              className="overflow-clip xl:h-11 font-semibold text-xl md:text-2xl xl:text-[40px] mb-2 md:mb-5"
            >
              Our Brand Story
            </h4>
            <div className="flex flex-col gap-3 md:gap-5 text-sm md:text-base">
              <p className="">
                Growing up in the western part of Nigeria, where agriculture is
                highlighted as more of a hobby than a profession; I developed a
                colossal interest and love for agriculture.
              </p>
              <p>
                Little wonder, I always appear dressed like a farmer during the
                days of my primary education.
              </p>
              <p>
                As a kid, my love for food was profound. I loved to eat,
                everyone does and this made me realize the important role food
                plays in ensuring the running of our day to day activities.
              </p>
              <p>
                I also realized that one way through which humans connect with
                one another is through food. The food we cultivate, cook, serve
                and eat, in addition to giving us life, gives us connections to
                those around us.
              </p>
              <p>
                Thus this sparked and birthed the whole idea and inception of
                TBT- AGRO COMMODITY TRADING COMPANY; as I saw the need to
                increase agricultural productivity to ensure that not just
                Nigerians, but families all over the world get food on their
                table on daily basis. 
              </p>
              <p>
                Founded in 2017, TBT, an initialism coined from Tunji-Bello
                Tesleem started up as TBT LOGISTICS LIMITED; a logistic company
                aimed at sourcing agro related raw materials and getting them
                across from the point of production to the point of consumption
                but along the line there was a need for change.
              </p>
              <p>
                Statistics have it that Nigeria relies on $10 billion of imports
                to meet its food and agricultural production. Nigeria&apos;s
                agricultural sector has been hurt by several shocks: sporadic
                flooding, insurgencies, inter communal conflicts.
              </p>
              <p>
                Food production and processing suffer from a lack of financing
                and infrastructure thus making agricultural commodities scarce
                and unavailable to the wider population.
              </p>
              <p>
                This caused us to have a change in directive in 2020. We wanted
                to focus mainly on reducing the scarcity around agro commodities
                and helping producers/farmers make money by getting these
                commodities across to the consumers/marketers while
                simultaneously causing a flow of agro commodities like Maize,
                Soybeans, Cashew nuts, Shea butter/Shea nuts, Charcoal and
                Cassava within the country and across borders.
              </p>
              <p>
                We became more intentional and switched to TBT- AGRO COMMODITY
                TRADING COMPANY in 2020. Prior to the COVID-19 pandemic, TBT had
                been able to build a relationship of over 1,000 global partners
                in terms of farmers, sourcing agents and buyers. 
              </p>
              <p>
                In TBT, we render the services of sourcing of Agricultural
                Commodities for companies based locally and internationally. We
                are also aimed at providing both local and international
                producers with top quality agro products grown on fertile
                Nigerian soils. 
              </p>
              <p>
                We efficiently and effectively trade on soft commodities
                including but not limited to; Maize, Soybeans, Cashew nuts,
                Ginger, Cocoa, Sesame seeds, shea butter, shea nuts, Plant
                seedlings, fertilizers.
              </p>
            </div>
          </div>
        </div>
        <div className="self-center md:self-start ">
          <Image
            src={Img2}
            alt="landscape image"
            // height={456}
            // width={528}
            className="rounded-[10px]  "
          />
        </div>
      </section>

      {/* *********************************************************** */}

      <section className="text-agro-black grid lg:grid-cols-2 gap-x-5 gap-y-4 md:gap-y-7  px-4 ">
        <div className=" justify-self-end w-full xl:w-[528px] h-[200px] xl:h-[256px] px-4 xl:px-10 bg-agro-blue rounded-[10px] flex flex-col gap-3 xl:gap-6 items-center justify-center">
          <h4 className="overflow-clip  text-xl xl:text-[34px] font-semibold">
            Vision
          </h4>
          <p className="text-center text-sm md:text-base">
            To be Africa&apos;s largest supplier of Agricultural commodities,
            completely bridging the gap between demand and supply and providing
            world class quality service with the goal of alleviating global food
            insecurity.
          </p>
        </div>
        <div className="  w-full xl:w-[528px] h-[200px] xl:h-[256px] px-4 xl:px-10 bg-agro-blue rounded-[10px] flex flex-col gap-3 xl:gap-6 items-center justify-center">
          <h4 className="overflow-clip text-xl xl:text-[34px] font-semibold">
            Mission
          </h4>
          <p className="text-center text-sm md:text-base">
            To provide exceptional agro allied services through creative,
            innovation and advanced technology. We also strive to apply
            transparent business approach to build long term relationships with
            our customers, clients, shareholder and employees.
          </p>
        </div>
        <div className=" justify-self-end w-full xl:w-[528px] h-[200px] xl:h-[256px] px-4 xl:px-10 bg-agro-blue rounded-[10px] flex flex-col gap-3 xl:gap-6 items-center justify-center">
          <h4 className="overflow-clip text-xl xl:text-[34px] font-semibold">
            Action Guidelines
          </h4>
          <p className="text-center text-sm md:text-base">
            To deliver customer satisfaction with creativity, Innovation,
            Sincerity, and Gratitude, and to act in compliance with the law and
            ethics.
          </p>
        </div>
        <div className=" w-full xl:w-[528px] h-[200px] xl:h-[256px] px-4 xl:px-10 bg-agro-blue rounded-[10px] flex flex-col gap-3 xl:gap-6 items-center justify-center">
          <h4 className="overflow-clip text-xl xl:text-[34px] font-semibold">
            Our Core Philosophy
          </h4>
          <p className="text-center text-sm md:text-base">
            To consistently provide quality services that exceeds the
            expectations of our esteemed customers.
          </p>
        </div>
      </section>

      {/* ***************************************************************** */}

      <section className=" text-agro-black  pt-[60px] py-[180px] bg-agro-blue">
        <div className="2xl:w-[1400px] 2xl:mx-auto flex items-center justify-center flex-wrap px-4  gap-x-5 gap-y-7  ">
          <h4
            id="our-values"
            className="overflow-clip text-2xl xl:text-[40px] text-center font-semibold block w-full"
          >
            Our Values
          </h4>
          <div className=" w-full xl:w-[528px] h-[200px] xl:h-[256px] px-4 xl:px-10 bg-white rounded-[10px] flex flex-col gap-3 xl:gap-6 items-center justify-center">
            <h4 className="overflow-clip text-xl xl:text-[34px] font-semibold">
              Integrity
            </h4>
            <p className="text-center text-sm md:text-base">
              TBT is known for its steadfast adherence to moral and ethical
              conduct while dealing with clients and customers.
            </p>
          </div>
          <div className=" w-full xl:w-[528px] h-[200px] xl:h-[256px] px-4 xl:px-10 bg-white rounded-[10px] flex flex-col gap-3 xl:gap-6 items-center justify-center">
            <h4 className="overflow-clip text-xl xl:text-[34px] font-semibold">
              Trust
            </h4>
            <p className="text-center text-sm md:text-base">
              Our clients uphold a high level of confidence and reliance in us
              as we provide them with unambiguous transactions.
            </p>
          </div>
          <div className=" w-full xl:w-[528px] h-[200px] xl:h-[256px] px-4 xl:px-10 bg-white rounded-[10px] flex flex-col gap-3 xl:gap-6 items-center justify-center">
            <h4 className="overflow-clip text-xl xl:text-[34px] font-semibold">
              Constant Improvement{" "}
            </h4>
            <p className="text-center text-sm md:text-base">
              We believe we are not perfect but we can work our way to
              perfection by improving at every step of the way.
            </p>
          </div>
          <div className=" w-full xl:w-[528px] h-[200px] xl:h-[256px] px-4 xl:px-10 bg-white rounded-[10px] flex flex-col gap-3 xl:gap-6 items-center justify-center">
            <h4 className="overflow-clip text-xl xl:text-[34px] font-semibold">
              Sustainability{" "}
            </h4>
            <p className="text-center text-sm md:text-base">
              We maintain the peak of quality to uphold our client’s partnership
              and ensure their continuous profitability.
            </p>
          </div>
          <div className="  w-full xl:w-[528px] h-[200px] xl:h-[256px] px-4 xl:px-10 bg-white rounded-[10px] flex flex-col gap-3 xl:gap-6 items-center justify-center">
            <h4 className="overflow-clip text-xl xl:text-[34px] font-semibold">
              Commitment{" "}
            </h4>
            <p className="text-center text-sm md:text-base">
              We are committed to fulfilling our partnership objectives with
              clients impeccably.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
