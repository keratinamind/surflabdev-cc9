import React from "react";
import { useState , useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import axios from "axios";
import {user} from "../services/localStorage"

function MyBooking() {
  const [isReveal, setIsReveal] = useState(false);
  const [dealfetch , setDealFetch] = useState([]);
  const fetchDealbooking = async () => {
    const res = await axios.get('/dealbooking/user')
    console.log(res);
    setDealFetch(res.data)
  }
  useEffect(() => {
    fetchDealbooking();
    // axios
    //   .get('/dealbooking')
    //   .then((res) => setDealFetch(res.data.fetchBooking), console.log(dealfetch));
  }, []);

  const handleClickDelete = async (id) => {
    await axios.delete(`/dealbooking/${id}`);
    window.location.reload();
  }



  return (
    <div class="text-gray-900 bg-gray-200 min-h-screen">
      <div class="md:container mx-auto p-4 flex">
        <h1 class="text-3xl">My Booking</h1>
      </div>
      
      <div class="md:container mx-auto px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr class="border-b">
              <th class="text-left p-3 px-5">Deal</th>
              <th class="text-left p-3 px-5">Expire</th>
              <th class="text-left p-3 px-5">Quantity</th>
              <th class="text-left p-3 px-5">Voucher ID</th>
              <th></th>
            </tr>
            {dealfetch.map((item) => (
            <tr class="border-b hover:bg-orange-100 bg-gray-100">
              <td class="p-3 px-5">
                <span>{item.Dealdetail.title}</span>
              </td>
              <td class="p-3 px-5">
                <span>{item.expiredate.split("T")[0]}</span>
              </td>
              <td class="p-3 px-5">
                <span>{item.count}</span>
              </td>
              <td class="p-3 px-5 text-gray-500">
                <span>{isReveal ? item.voucherId : "XXXXXXXXXX"}</span>
              </td>
              <td class="p-3 px-5 flex justify-end">
              <button
                  onClick={()=>handleClickDelete(item.id)}
                  type="button"
                  class="mr-3 text-sm bg-primarypink hover:bg-pink-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Delete deal
                </button>
                <button
                  onClick={() => setIsReveal((cur) => !cur)}
                  type="button"
                  class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  {isReveal ? "Hide Voucher ID" : "Reveal Voucher ID"}
                </button>
              </td>
            </tr> ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyBooking;
