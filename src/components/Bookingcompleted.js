import React from "react";
import { useLocation } from "react-router";

function Bookingcompleted() {

  const myvoucherId = useLocation();
  console.log(myvoucherId);

  return (
    <div class="flex items-center justify-center h-96">
      <div class="bg-pink-800 text-white font-bold rounded-lg border shadow-lg p-10">
        <h1 className="">Voucher ID. {myvoucherId.state}</h1>
        <h3>The deal will appear on your dashboard</h3>
      </div>
    </div>
  );
}

export default Bookingcompleted;
