import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import axios from "axios";
import {user} from "../services/localStorage"

function Checkoutform() {
  const location = useLocation();
  const history = useHistory();
  const [deal, setDeal] = useState([]);
  useEffect(() => {
    axios
      .get(`/dealdetail/${location.state.dealId}`)
      .then((res) => setDeal(res.data.findDeal));
  }, []);

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < 10) {
      setCount((cur) => cur + 1);
    }
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount((cur) => cur - 1);
    }
  };

  const handleClickCreateBooking = async (e) => {
    try {
      e.preventDefault();
      const res =  await axios.post('/dealbooking', {dealId : deal.id, count: count , totalAmount: count * deal.price , customerId: user.id})
      console.log(res.data)
      history.push("/completed", res.data.voucher);

    } catch (err) {
      console.dir(err)
    }

  }

  return (
    <>
      <div class="mt-20">
        <h1 class="flex items-center justify-center font-bold text-blue-800 text-md lg:text-3xl">
          Checkout
        </h1>
      </div>
      <div class="container h-screen p-12 mx-auto">
        <div class="flex flex-col w-full px-0 md:flex-row">
          <div class="flex flex-col w-full ml-0 mx-10 lg:ml-12 lg:w-full">
            <div class="pt-12 md:pt-0 2xl:ps-4">
              <h2 class="text-xl font-bold">Order Summary</h2>
              <div class="mt-8">
                <div class="flex flex-col space-y-4">
                  <div class="flex space-x-4">
                    <div>
                      <img
                        src="https://source.unsplash.com/user/erondu/1600x900"
                        alt="image"
                        class="w-60"
                      />
                    </div>
                    <div>
                      <h2 class="text-xl font-bold">Title</h2>
                      <p class="text-sm">
                        Lorem ipsum dolor sit amet, tet adoghid oaidhjgoa
                        aosdifjfasoid
                      </p>
                      <span class="text-red-600">Price</span> $20
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div class="flex justify-between alip-4 mt-4">
                <h2 class="text-xl font-bold">Quantity</h2>
                <div className="">
                  <button
                    onClick={handleDecrement}
                    className="py-2 px-3  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white rounded-xl"
                  >
                    -
                  </button>
                  <span className="px-4">{count}</span>
                  <button
                    onClick={handleIncrement}
                    className="py-2 px-2  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white rounded-xl"
                  >
                    +
                  </button>
                </div>
              </div>
              <div class="flex justify-between alip-4 mt-4">
                <h2 class="text-xl ">Price</h2>
                <div className="">
                  <span className="text-xl">฿ </span>
                  <span value="1900" className="text-xl text-bold-md">
                    {deal.price}
                  </span>
                </div>
              </div>
              <div class="flex items-center justify-between text-xl w-full py-4 mt-4 font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                <span>
                  Subtotal {count} x {deal.price}
                </span>
                <div>
                  <span>฿</span>
                  <span class="ml-2">{count * deal.price}</span>
                </div>
              </div>

              <div class="flex items-center justify-between text-xl w-full py-4 mt-4 font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                <span>Total</span>
                <div>
                  <span>฿</span>
                  <span class="ml-2">{count * deal.price}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:w-full">
            <h2 class="mb-4 font-bold md:text-xl text-heading ">
              Payment detail
            </h2>
            <form class="justify-center w-full mx-auto" method="post" action>
              <div class="">
                <div class="mt-4">
                  <div class="w-full">
                    <label
                      for="Email"
                      class="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Card Number
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder=""
                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div class="mt-4">
                  <div class="w-full">
                    <label
                      for="Email"
                      class="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Card Holder name
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder=""
                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div class="space-x-0 mt-4 lg:flex lg:space-x-4">
                  <div class="w-full lg:w-1/2">
                    <label
                      for="expire"
                      class="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Expire*
                    </label>
                    <input
                      name="expire"
                      type="month"
                      placeholder="02/24"
                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div class="w-full lg:w-1/2 ">
                    <label
                      for="cvc"
                      class="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Postcode
                    </label>
                    <input
                      name="cvc"
                      type="text"
                      placeholder="848"
                      class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div class="flex items-center mt-4">
                  <label class="flex items-center text-sm group text-heading">
                    <input
                      type="checkbox"
                      class="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                    />
                    <span class="ml-2">Save this card detail for next use</span>
                  </label>
                </div>
                  <div class="mt-4">
                    <button onClick={handleClickCreateBooking} class="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">
                      Process
                    </button>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkoutform;
