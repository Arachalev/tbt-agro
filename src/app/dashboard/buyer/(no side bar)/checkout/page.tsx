// @ts-nocheck
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
import { useDeleteCartItemMutation } from "@/store/redux/services/cartSlice/cartApiSlice";

const Page = () => {
  const [orderDetails, setOrderDetails] = useState({
    paystackRef: { reference: "" },
    id: 0,
  });

  // const env = process.env;

  // console.log(process.env.NEXT_PUBLIC_PAYSTACK_KEY);

  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [
    makePayment,
    { data: paymentData, error: paymentError, isLoading: paymentLoading },
  ] = useMakePaymentMutation();

  const [
    createOrder,
    { data: orderData, error: orderError, isLoading: orderLoading },
  ] = useCreateOrderMutation();

  const [deleteCartItem, { isLoading, data, error }] =
    useDeleteCartItemMutation();

  const cart = useAppSelector(selectCart);
  const profile = useAppSelector(selectBuyerProfile);

  const router = useRouter();

  const onSuccessPayment = (e: any) => {
    handlePayment(e.reference);
    setOrderDetails({ ...orderDetails, paystackRef: e });
  };

  const onClosePayment = () =>
    alert("Wait! Order invalid without complete payment!!!!");

  const componentProps = {
    email: profile.email,
    amount: cart.cartSummary.total * 100,
    publicKey: "pk_test_8f636ccf1ec472984961f198237ad6f698d13215",
  };

  const initializePayment = usePaystackPayment({
    ...componentProps,
  });

  const handleOrder = async () => {
    setShowModal(true);
    const orderCartItems = cart.product.map((item) => {
      return {
        product_id: item.product.id,
        quantity_needed: item.quantity,
        product_sale_price: item.product.sale_price,
      };
    });

    const res = await createOrder({
      sub_total: cart.cartSummary.total,
      use_default_shipping_details: 1,
      order_cart_items: orderCartItems,
    });

    if ("data" in res) {
      if (res.data.error === false) {
        setOrderDetails({ ...orderDetails, id: res.data.data.id });
        sessionStorage.setItem("order_id", res.data.data.id);
      }
    }
  };

  const paystackHandler = async () => {
    initializePayment(onSuccessPayment, onClosePayment);
  };

  const handlePayment = async (reference: string) => {
    setShowPaymentModal(true);
    const res = await makePayment({
      order_id: sessionStorage.getItem("order_id"),
      sub_total: cart.cartSummary.total,
      reference: reference,
    });
    if ("data" in res) {
      if (res.data.error === false) {
        setOrderDetails({ ...orderDetails, paystackRef: { reference: "" } });
        sessionStorage.removeItem("order_id");
      }
    }
  };

  const handleDelete = async (id: number) => {
    await deleteCartItem(id);
  };

  //
  /**
   *
   *
   *
   * func to clear cart
   *
   * getAll cart items
   * delete each item
   * if settled, then move on
   * else
   * delete again
   *
   *
   */
  // console.log(orderData, orderError);
  // console.log(paymentData, paymentError);
  let errorMessage, paymentErrorMsgF;

  if (orderError) {
    errorMessage = isFetchBaseQueryErrorType(orderError);
  }
  if (paymentError) {
    paymentErrorMsgF = isFetchBaseQueryErrorType(paymentError);
  }

  return (
    <div className="pt-10 px-4 xl:px-[72px] pb-40 flex flex-col  ">
      {showModal && (
        <StatusModal
          onClose={() => setShowModal(false)}
          loading={orderLoading}
          error={orderError ? errorMessage : ""}
          data={orderData ? `${orderData?.message} ` : ""}
          dataFunc={() => {
            paystackHandler();
            setShowModal(false);
          }}
        />
      )}
      {showPaymentModal && (
        <StatusModal
          onClose={() => setShowPaymentModal(false)}
          loading={paymentLoading}
          error={paymentError ? paymentErrorMsgF : ""}
          data={
            paymentData
              ? `${paymentData?.message} ${(<br />)} Payment Completed `
              : ""
          }
          dataFunc={() => {
            router.push("/dashboard/buyer/confirmed-order");
            setShowPaymentModal(false);
          }}
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
                className="w-[137px] px-2 text-center- whitespace-nowrap h-8 text-sm bg-agro-yellow rounded-[4px] font-bold text-agro-black flex items-center justify-center"
              >
                Place Order
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
