import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "../images/photo-1502680390469-be75c86b636f.jpg";

function Profiledashboard() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="container mx-auto w-3/5">
      <form id="login">
        <div className="bg-white dark:bg-gray-800">
          <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
            <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">
              <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                  Profile
                </p>
                <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                  >
                    <path
                      className="heroicon-ui"
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mx-auto">
              <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
                <div className="rounded relative mt-8 h-48">
                  <img
                    src={Image}
                    alt
                    className="w-full h-full object-cover rounded absolute shadow"
                  />
                  <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded" />
                  <div className="flex items-center px-3 py-2 rounded absolute right-0 mr-4 mt-4 cursor-pointer">
                    <p className="text-xs text-gray-100">Change Cover Photo</p>
                    <div className="ml-2 text-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-edit"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                        <line x1={16} y1={5} x2={19} y2={8} />
                      </svg>
                    </div>
                  </div>
                  <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center">
                    <img
                      src={
                        "https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg"
                      }
                      alt
                      className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0"
                    />
                    <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0" />
                    <div className="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-edit"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                        <line x1={16} y1={5} x2={19} y2={8} />
                      </svg>
                      <p className="text-xs text-gray-100">Edit Picture</p>
                    </div>
                  </div>
                </div>
                <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                  <label
                    htmlFor="username"
                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder="@example"
                  />
                </div>
                <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                  <label
                    htmlFor="about"
                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    About
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    required
                    className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder="Let the world know who you are"
                    rows={5}
                    defaultValue={""}
                  />
                  <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">
                    Character Limit: 200
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4">
            <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
              <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                  Personal Information
                </p>
                <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                  >
                    <path
                      className="heroicon-ui"
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mx-auto pt-4">
              <div className="container mx-auto">
                <div className="xl:w-2/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    htmlFor="FirstName"
                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    name="firstName"
                    required
                    className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder
                  />
                </div>
                <div className="xl:w-2/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    htmlFor="LastName"
                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    name="lastName"
                    required
                    className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder
                  />
                </div>
                <div className="xl:w-2/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    htmlFor="Email"
                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    Email
                  </label>
                  <div className="border border-green-400 shadow-sm rounded flex">
                    <div className="px-4 py-3 dark:text-gray-100 flex items-center border-r border-green-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-mail"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x={3} y={5} width={18} height={14} rx={2} />
                        <polyline points="3 7 12 13 21 7" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="Email"
                      name="email"
                      required
                      className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 dark:text-gray-400"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div className="flex justify-between items-center pt-1 text-green-400">
                    <p className="text-xs">Email submission success!</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={16}
                      height={16}
                    >
                      <path
                        className="heroicon-ui"
                        d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                              0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                        stroke="currentColor"
                        strokeWidth="0.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="xl:w-2/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    htmlFor="StreetAddress"
                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    Street Address
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    required
                    className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder="Let the world know who you are"
                    rows={5}
                    defaultValue={""}
                  />
                  <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">
                    Character Limit: 200
                  </p>
                </div>
                
                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    htmlFor="State/Province"
                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    id="State/Province"
                    name="state"
                    required
                    className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder="0857965542"
                  />
                </div>
                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    htmlFor="Country"
                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    Birthdate
                  </label>
                  <DatePicker
                      className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                </div>
                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <div className="flex items-center pb-2">
                    <label
                      htmlFor="ZIP"
                      className="text-sm font-bold text-gray-800 dark:text-gray-100"
                    >
                      ZIP/Postal Code
                    </label>
                    <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                      >
                        <path
                          className="heroicon-ui"
                          d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="text"
                    name="zip"
                    required
                    id="ZIP"
                    className="bg-transparent border border-red-400 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder={86745}
                  />
                  <div className="flex justify-between items-center pt-1 text-red-400">
                    <p className="text-xs">Incorrect Zip Code</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-x-circle"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <line x1={15} y1={9} x2={9} y2={15} />
                      <line x1={9} y1={9} x2={15} y2={15} />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
             
                
          <div className="container mx-auto w-11/12 xl:w-full">
            <div className="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
              <button className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-600 px-6 py-2 text-xs mr-4">
                Cancel
              </button>
              <button
                className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profiledashboard;
