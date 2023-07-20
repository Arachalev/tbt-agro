import React from "react";

import Img1 from "../../../../../public/images/about/about1.png";
import Img2 from "../../../../../public/images/about/about2.png";
import Img3 from "../../../../../public/images/about/about3.jpeg";

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
            <div className="flex flex-col gap-3 md:gap-5 text-sm md:text-base">
              <p className="text-sm md:text-base ">
                TBT Agricultural Commodity Trading Company is an Agricultural
                digital marketing platform involved in the Sourcing & Trading of
                agricultural commodities and making it available in large
                quantities for industrial, commercial and personal consumption.
              </p>
              <p className="text-sm md:text-base ">
                Our biggest goal is to provide both local and international
                communities with top quality agro products grown on Nigerian
                soil.
              </p>
            </div>
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
                We are a fast growing organization with well seasoned and
                experienced team members established with the aim of alleviating
                food insecurity within African and international communities. We
                are focused on becoming Africa&apos;s largest supplier and
                exporter of agro commodities.
              </p>
              <p>
                TBT was inspired by the desire to meet the needs of both farmers
                and consumers of agro commodities and also to bridge the gap
                between the demand of agricultural commodities and its supply.
              </p>
              <p>
                With our trading platform, we aim to solve the major challenges
                faced by smallholder farmers and traders. We also aspire to
                become the largest market supplier of agro commodities in
                Africa, connecting farmers, suppliers, and consumers.
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
                The company, founded in 2017, started up as a logistics brand
                but our colossal interest and love for agriculture, our desire
                to bridge the gap between demand and supply and our passion to
                alleviate poverty and food insecurity had us switch our focus to
                the agricultural sector.
              </p>
              <p>
                TBT is focused on making a valid mark in Nigeria’s Agricultural
                sector. We are motivated towards delivering services in
                swiftness, effectiveness and efficiency to exceed the
                expectation of our esteemed customers.
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
                highlighted more as a hobby than a profession, I developed a
                profound interest and love for agriculture. Little wonder, I
                always appeared dressed like a farmer during our career days in
                primary school.
              </p>

              <p>
                As a kid, my love for food was profound. I loved to eat, just
                like everyone else, and this made me realize the important role
                food plays in ensuring the smooth running of our day-to-day
                activities. I also realized that one way humans connect with one
                another is through food.
              </p>
              <p>
                This realization sparked the idea and birthed TBT Agro Commodity
                Trading Company. I saw the need to increase agricultural
                productivity to ensure that not just Nigerians, but families all
                over the world have food on their tables every day.
              </p>
              <p>
                Founded in 2017, TBT, derived from “Tunji-Bello Tesleem”,
                initially started as TBT Logistics Limited—a logistics company
                aimed at delivering Agro related raw materials from local
                sources to its destination.
              </p>
              <p>
                We became more intentional and transitioned to TBT Agro
                Commodity Trading Company in 2020. Prior to the COVID-19
                pandemic, TBT had built relationships with over 1,000 global
                partners, including farmers, sourcing agents, and buyers.
              </p>
              <p>
                In our pursuit of innovation, we encapsulated our commitment to
                pushing the boundaries of Agro commodity trading. TBT Agro
                commodity trading company is focused on &quot;Tech-Based
                Trading,&quot; representing our core ethos of leveraging
                cutting-edge technology to connect buyers and sellers
                seamlessly.
              </p>
              <p>
                The need for an online trading platform for agro commodities
                arose from the existing challenges faced by farmers such as
                limited market access, where farmers don’t have access to the
                right market leading to wastage and also a lack of transparency
                and fair pricing .
              </p>
              <p>
                We aimed to transcend physical boundaries and empower farmers
                and suppliers in Nigeria and Africa to buy and sell agro
                commodities to anyone in the world. This platform would bridge
                the gap between farmers, traders, processors, and buyers,
                creating a seamless ecosystem that enhanced efficiency and
                accessibility.
              </p>
              <p>
                We became more intentional and switched to TBT- AGRO COMMODITY
                TRADING COMPANY in 2020. Prior to the COVID-19 pandemic, TBT had
                been able to build a relationship of over 1,000 global partners
                in terms of farmers, sourcing agents and buyers. 
              </p>
              <div>
                <p>
                  This trading platform brings several benefits to the
                  agricultural industry and its stakeholders.
                </p>
                <ul className="flex flex-col gap-4 list-disc ml-4 my-4">
                  <li>
                    Firstly, it enhances market access for farmers, allowing
                    them to showcase their produce to a global audience and
                    connect directly with potential buyers.
                  </li>
                  <li>
                    Secondly, Buyers have the capability to make quotations and
                    requests for any desired agro commodity, of any quantity and
                    the farmers can actively engage with the requests, assess
                    the demand, and connect with the buyers who have expressed
                    interest in their specific products.
                  </li>
                  <li>
                    Thirdly, the platform facilitates streamlined supply chains
                    for processors and buyers, enabling them to source
                    high-quality agro commodities more efficiently. This
                    improves operational efficiency and reduces costs associated
                    with intermediaries.
                  </li>
                  <li>
                    Additionally, the platform fosters transparency in agro
                    commodity trading. By providing real-time market data and
                    insights, it empowers users to make informed decisions and
                    optimize their trading strategies.
                  </li>
                  <li>
                    Farmers, traders, processors, and buyers can easily navigate
                    the system, saving time and effort in their trading
                    activities.
                  </li>
                </ul>
              </div>
              <p>
                Today, TBT stands tall as a leader in the Agro commodity trading
                landscape. Our unwavering commitment to innovation, integrity,
                and customer satisfaction has garnered them a loyal and diverse
                user base. TBT continues to push the boundaries, constantly
                evolving our platform to stay ahead of industry trends and meet
                the evolving needs of our users.
              </p>
              <p>
                Join TBT on this transformative journey, where technology
                intersects with agriculture, and the world becomes your
                marketplace. Together, let us unleash the potential of Agro
                commodity trading, breaking barriers, and creating a future
                where anyone can trade with confidence, convenience, and global
                reach.
              </p>
            </div>
          </div>
        </div>
        <div className="self-center flex flex-col gap-16 md:self-start ">
          <Image
            src={Img2}
            alt="landscape image"
            // height={456}
            // width={528}
            className="rounded-[10px]  "
          />
          <Image
            src={Img3}
            alt="landscape image"
            height={456}
            width={528}
            className="rounded-[10px]  "
          />
        </div>
      </section>

      {/* *********************************************************** */}

      <section className="text-agro-black grid lg:grid-cols-2 gap-x-5 gap-y-4 md:gap-y-7  px-4 ">
        <div className=" justify-self-end w-full xl:w-[528px] h-[200px] xl:h-[256px] px-4 xl:px-10 bg-agro-blue rounded-[10px] flex flex-col gap-3 xl:gap-6 items-center justify-center">
          <h4 className="overflow-clip  text-xl xl:text-[34px] font-semibold">
            Our Vision
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
            Our Mission
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
            Our Core Value
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
