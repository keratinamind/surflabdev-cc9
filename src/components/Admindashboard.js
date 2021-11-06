import React, { useState, useEffect } from "react";
import axios from "../config/axios";
import Dealsdetail from "./Dealsdetail";
import { Link } from "react-router-dom";

export default function Admindashboard() {
  const [shoplist, setShoplist] = useState([]);
  const [dealslist, setDealslist] = useState([]);
  const [bookinglist, setBookinglist] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);
  const [selectedDeal, setSelectedDeal] = useState(null);
  console.log(selectedShop);
  console.log(dealslist);
  useEffect(() => {
    axios
      .get(`/shop`)

      .then((res) => {
        setShoplist(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.dir(err);
      });
    axios
      .get(`/dealdetail`)
      .then((res) => {
        setDealslist(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`/dealbooking/${selectedDeal}`)
      .then((res) => {
        console.log(res.data);
        setBookinglist(res.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [selectedDeal]);

  return (
    <div className="md:container md:mx-auto flex flex-col">
      <div className="flex flex-row justify-center gap-4">
        <Link className="p-4 bg-green-800 text-white" to="/adminupdatedeals">Update Deal</Link>
        <Link className="p-4 bg-green-800 text-white" to="/admincreatedeals">Create Deal</Link>
      </div>
      <div className="py-20 flex flex-row gap-5">
        <h1 className="text-green-800 ">Select shop</h1>
        <select
          value={selectedShop}
          onChange={(e) => setSelectedShop(e.target.value)}
        >
          <option> - - - </option>
          {shoplist.map((item, idx) => (
            <option key={idx} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <h1 className="text-blue-800 ">Select deal</h1>
        <select
          value={selectedDeal}
          onChange={(e) => setSelectedDeal(e.target.value)}
        >
          <option> - - -</option>
          {dealslist
            .filter((item) => item.shopId == selectedShop)
            .map((item, idx) => (
              <option key={idx} value={item.id}>
                {item.title}
              </option>
            ))}
        </select>
      </div>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Username
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Booking ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Booked Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Expired Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Deals qty.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Total (THB)
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {bookinglist.map((booking) => (
                  <tr key={booking.customerId}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {booking.voucherId}
                          </div>
                          <div className="text-sm text-gray-500">
                            {booking.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{booking.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        bg-${(booking.isUsed = "false" ? "green" : "red")}-100 
                        text-${(booking.isUsed = "true"
                          ? "green"
                          : "red")}-800`}
                      >
                        {booking.isUsed}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.createdAt}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.expiredate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.count}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.totalAmount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-pink-600 hover:text-pink-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
