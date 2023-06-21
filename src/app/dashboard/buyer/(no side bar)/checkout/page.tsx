"use client";

import React, { useState } from "react";

import PaymentMethod from "@/components/Dashboard/PaymentMethod";
import OrderSummary from "@/components/Dashboard/OrderSummary";
import ShipingAndLogistics from "@/components/Dashboard/ShipingAndLogistics";
import { PaystackButton, usePaystackPayment } from "react-paystack";
import { useAppSelector } from "@/store/redux/hooks";
import { selectCart } from "@/store/redux/services/cartSlice/cartSlice";
import { selectBuyerProfile } from "@/store/redux/services/buyerSlice/profileSlice/profileSlice";
import { useRouter } from "next/navigation";
import { useMakePaymentMutation } from "@/store/redux/services/paymentSlice/paymentApiSlice";
import { useCreateOrderMutation } from "@/store/redux/services/OrdersSlice/ordersApiSlice";
import StatusModal from "@/components/Forms/StatusModal";
import isFetchBaseQueryErrorType from "@/store/redux/fetchErrorType";

const Page = () => {
  const [paystackRef, setPaystackRef] = useState<{ reference: string }>({
    reference: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [
    makePayment,
    { data: paymentData, error: paymentError, isLoading: paymentLoading },
  ] = useMakePaymentMutation();

  const [
    createOrder,
    { data: orderData, error: orderError, isLoading: orderLoading },
  ] = useCreateOrderMutation();

  const cart = useAppSelector(selectCart);
  const profile = useAppSelector(selectBuyerProfile);

  const router = useRouter();
  // console.log(cart.product);

  const onSuccessPayment = (e: any) => {
    setPaystackRef(e);
    alert("Thanks for doing business with us! Come back soon!!");
    // return e;
    // setTimeout(() => {}, 2000);
  };
  console.log(paystackRef);
  const onClosePayment = () => alert("Wait! You need this oil, don't go!!!!");

  const componentProps = {
    email: profile.email,
    amount: cart.cartSummary.total * 100,
    publicKey: "pk_test_8f636ccf1ec472984961f198237ad6f698d13215",

    // onSuccess: (e: any) => {
    //   console.log(e);
    //   alert("Thanks for doing business with us! Come back soon!!");
    //   return e;
    // },
    // onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };
  const initializePayment = usePaystackPayment({
    ...componentProps,
  });

  // console.log(cart);
  const handleOrder = async () => {
    setShowModal(true);
    const orderCartItems = cart.product.map((item) => {
      return {
        product_id: item.product.id,
        quantity_needed: item.quantity,
        product_sale_price: item.product.sale_price,
      };
    });

    console.log(orderCartItems);

    const res = await createOrder({
      sub_total: cart.cartSummary.total,
      use_default_shipping_details: 1,
      order_cart_items: orderCartItems,
    });

    if (orderData) {
      // setShowModal(false);
      console.log(res, "ressssssssss");
      console.log(orderData);
      paystackHandler();
    }

    // await makePayment({
    //   order_id: 0,
    // });
  };

  // console.log(orderError);
  const paystackHandler = async () => {
    initializePayment(onSuccessPayment, onClosePayment);
  };

  // const handlePayment = async () => {};
  if (paystackRef?.reference) {
    console.log("payment verified");

    // makePayment({
    //   order_id: "",
    //   sub_total: cart.cartSummary.total,
    //   reference: paystackRef.reference,
    // });
    setPaystackRef({ ...paystackRef, reference: "" });
  }

  let errorMessage;

  if (orderError) {
    errorMessage = isFetchBaseQueryErrorType(orderError);
  }

  return (
    <div className="pt-10 px-4 xl:px-[72px] pb-40 flex flex-col  ">
      {showModal && (
        <StatusModal
          onClose={() => setShowModal(false)}
          data=""
          loading={orderLoading}
          error={orderError ? errorMessage : ""}
        />
      )}
      <div className="  ">
        <div className="mb-5 ">
          <h4 className="self-start text-xl md:text-2xl xl:text-3xl text-agro-black font-semibold overflow-clip">
            Checkout
          </h4>
          <p className="text-agro-orange text-sm font-semibold ">
            Secure your products by making payments now!
          </p>
        </div>

        <div className="flex gap-5 flex-col xl:flex-row">
          <div className="flex gap-5 flex-col w-full 2xl:w-fit ">
            {/* <PaymentMethod /> */}
            <ShipingAndLogistics />
            <div className="sm:h-24 p-4 sm:pl-8 bg-white rounded-[10px] flex flex-col sm:flex-row items-center gap-4 sm:gap-8 xl:gap-16">
              <button
                onClick={() => {
                  handleOrder();
                }}
                // href="/dashboard/buyer/confirmed-order"
                className="w-[137px] px-2 text-center- whitespace-nowrap h-8 text-sm bg-agro-yellow rounded-[4px] font-bold text-agro-black flex items-center justify-center"
              >
                Make Payment
              </button>
              <div>
                <h4 className="font-semibold text-agro-green sm:text-xl">
                  Order total: ₦{cart.cartSummary.total.toLocaleString()}
                </h4>
                <p className="text-xs">
                  By placing your order, you agree to TBT’s privacy notice and
                  conditions of use. <br /> You also agree to TBT&apos;s terms
                  and conditions.
                </p>
              </div>
            </div>
          </div>
          <OrderSummary />
          {/* <OrderSummary cost={1000} shippingFee={10000} /> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
