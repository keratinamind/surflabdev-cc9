import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Image from "../images/portrait-white-man-isolated_53876-40306.jpg"

function Createdealsform() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="my-8">
      <section class=" bg-gray-100 bg-opacity-50">
        <form class="container max-w-screen-lg mx-auto shadow-md md:w-auto">
          <div class="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
              <div class="inline-flex items-center space-x-4">
                <a href="#" class="block relative">
                  <img
                    alt="profil"
                    src={Image}
                    class="mx-auto object-cover rounded-full h-16 w-16 "
                  />
                </a>
                <h1 class="text-gray-600">Charlie</h1>
              </div>
            </div>
          </div>
          <div class="space-y-6 bg-white">
            <div class="items-center w-full p-4 space-y-4 text-gray-700 md:inline-flex md:space-y-0">
              <h2 class="max-w-1/3 mx-auto md:w-1/3">Deals Name</h2>
              <div class="max-w-2/3 mx-auto md:w-2/3">
                <div class=" relative ">
                  <input
                    type="text"
                    id="user-info-email"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Name"
                  />
                </div>
              </div>
            </div>
            <div class="items-center w-full p-4 space-y-4 text-gray-700 md:inline-flex md:space-y-0">
              <h2 class="max-w-1/3 mx-auto md:w-1/3">Deals Name</h2>
              <div class="max-w-2/3 mx-auto md:w-2/3">
                <div class=" relative ">
                  <label className="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-pink-600 hover:text-white text-pink-600 ease-linear transition-all duration-150">
                    <i className="fas fa-cloud-upload-alt fa-3x"></i>
                    <span className="mt-2 text-base leading-normal">
                      Select a file
                    </span>
                    <input type="file" class="hidden" />
                  </label>
                </div>
              </div>
            </div>
            <div class="items-center w-full p-4 space-y-4 text-gray-700 md:inline-flex md:space-y-0">
              <h2 class="max-w-1/3 mx-auto md:w-1/3">Deals Catergory</h2>
              <div class="max-w-2/3 mx-auto md:w-2/3">
                <div class=" relative ">
                  <select className="rounded-lg border-transparent flex-1 border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                    <option>Surf & Stay</option>
                    <option>Gear deals</option>
                    <option>Stay only</option>
                    <option>Surf course</option>
                    <option>Full packages</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="items-center w-full p-4 space-y-4 text-gray-700 md:inline-flex md:space-y-0">
              <div class="max-w-1/3 mx-auto space-y-5 md:w-1/3">
                <h2 class="">Available Quantity</h2>
                <h2 class="">Price</h2>
              </div>

              <div class="max-w-2/3 mx-auto space-y-5 md:w-2/3">
                <div>
                  <div class=" relative ">
                    <input
                      type="text"
                      id="user-info-name"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Quantity"
                    />
                  </div>
                </div>
                <div>
                  <div class=" relative ">
                    <input
                      type="text"
                      id="user-info-phone"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Price"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="items-center w-full p-4 space-y-4 text-gray-700 md:inline-flex md:space-y-0">
              <div class="max-w-1/3 mx-auto space-y-5 md:w-1/3">
                <h2 class="">Created date</h2>
                <h2 class="">End date</h2>
              </div>

              <div class="max-w-2/3 mx-auto space-y-5 md:w-2/3">
                <div>
                  <div class=" relative ">
                    <DatePicker
                      className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
                <div>
                  <div class=" relative ">
                    <DatePicker
                      className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="items-center w-full p-4 space-y-4 text-gray-700 md:inline-flex md:space-y-0">
              <h2 class="max-w-1/3 mx-auto md:w-1/3">Deals detail</h2>
              <div class="max-w-2/3 mx-auto space-y-5 md:w-2/3">
                <div>
                  <div class=" relative ">
                    <label class="text-gray-700" for="name">
                      <textarea
                        class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        id="comment"
                        placeholder="Enter your comment"
                        name="comment"
                        rows="5"
                        cols="40"
                      ></textarea>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="items-center w-full p-4 space-y-4 text-gray-700 md:inline-flex md:space-y-0">
              <h2 class="max-w-1/3 mx-auto md:w-1/3">Contact info</h2>
              <div class="max-w-2/3 mx-auto space-y-5 md:w-2/3">
                <div>
                  <div class=" relative ">
                    <input
                      type="text"
                      id="user-info-name"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div>
                  <div class=" relative ">
                    <input
                      type="text"
                      id="user-info-phone"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
              <button
                type="submit"
                class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Createdealsform;
