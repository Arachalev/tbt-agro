import React from "react";

import OrderItem, { OrderItemsProps } from "../OrderItem";

interface OrderDetailsProps {
  id: string;
  amount: number;
  cost: string;
  date: string;
  orderItems: OrderItemsProps[];
}

const OrderDetails = ({
  id,
  amount,
  cost,
  date,
  orderItems,
}: OrderDetailsProps) => {
  return (
    <div className="bg-white pb-12 rounded-[10px] 2xl:w-[967px]">
      <div className="px-4 pt-8 pb-7 ">
        <p className="text-agro-black text-lg ">Order n° {id}</p>
        <div className="text-agro-green overflow-clip ">
          <p className="leading-none  overflow-clip">
            {amount} Item{amount > 1 ? "s" : ""}
          </p>
          <p className="leading-none  overflow-clip">Placed on {date} </p>
          <p className="leading-none  overflow-clip">Total: {cost} </p>
        </div>
      </div>
      <div className="py-7 px-4 border-t-gray2  border-t">
        <h4 className="mb-3">ITEMS IN YOUR ORDER</h4>
        <div className="flex flex-col gap-4 ">
          {orderItems.map((item) => (
            <OrderItem
              reference={item.reference}
              quantity={item.quantity}
              key={item.id}
              img={item.img}
              amount={item.amount}
              deliveryDate={item.deliveryDate}
              name={item.name}
              isReturnable={item.isReturnable}
              cost={item.cost}
              returnDate={item.returnDate}
              id={item.id}
              status={item.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
