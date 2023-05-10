import React from "react";
import serviceItemData from "../../store/DummyData/serviceItemData.json";

interface ServiceItemProps {
  bg: string;
  title: string;
  text: string;
}
const ServiceItem = ({ bg, title, text }: ServiceItemProps) => {
  const bgArr = [
    "bg-[url('/images/tradeServicesBg/assurance.png')] ",
    "bg-[url('/images/tradeServicesBg/payment.png')]  ",
    "bg-[url('/images/tradeServicesBg/inspection.png')]  ",
    "bg-[url('/images/tradeServicesBg/shipping.png')]  ",
  ];

  return (
    <div className={`bg-center bg-cover relative h-[226px] w-[309px] ${bg}  `}>
      <div className="text-center pt-[14px] bg-agro-yellow w-full h-[72px] absolute bottom-0 right-0">
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-xs font-medium">{text}</p>
      </div>
    </div>
  );
};

const TradeServices = () => {
  return (
    <div>
      <div className="flex items-end gap-2 font-semibold mb-9">
        <h4 className="text-[40px]  leading-none overflow-clip">
          Trade Services
        </h4>
        <p className="text-lg leading-[1.1] overflow-clip">
          TBT trade services help ensure that your purchases are safe, secured
          and protected.
        </p>
      </div>
      <div className=" flex gap-5">
        {serviceItemData.map((item, index) => (
          <ServiceItem
            key={item.text}
            bg={item.bg}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default TradeServices;
