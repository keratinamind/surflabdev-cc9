import React, { useEffect, useState } from "react";
import Image from "../images/photo-1530035415911-95194de4ebcc.jpg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";
import { data } from "autoprefixer";


function Dealsdetail() {
  const features = [
    { name: "Shop name", description: "Surf nerds" },
    {
      name: "Contact",
      description:
        "Via email: surfnerds.info@surfnerds.com",
    }
    
  ];
  
  const location = useLocation();

  const [deal, setDeal] = useState([]);
  

  
  useEffect(() => {
    axios.get(`/dealdetail/${location.state.dealId}`).then(res => setDeal(res.data.findDeal) )
    ;
    }, [])
  
    console.log(deal)

  return (
    <>
      <div class="md:container p-4 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-10 lg:mt-20">
        <div class="relative">
          <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="lg:col-start-2 lg:max-w-2xl ml-auto">
              <h4 class="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                {deal.title}
              </h4>
              <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                {`Deals bought 100 | Limited Available ${deal.quantity}`}
              </p>
              <h4 class="mt-2 text-2xl leading-8 font-bold text-red-500 dark:text-white sm:text-3xl sm:leading-9">
                {`฿ ${deal.price}`}
              </h4>
              <ul class="mt-8 md:grid md:grid-cols-2 gap-6">
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      Guarantee Best Price
                    </span>
                  </div>
                </li>
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      Safe booking
                    </span>
                  </div>
                </li>
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      24/24 support
                    </span>
                  </div>
                </li>
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      Free tips to improve work time
                    </span>
                  </div>
                </li>
                <Link to={{pathname:"/checkout", state: {dealId: deal.id} }} >
                  <button className="py-4 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Book Now!
                  </button>
                </Link>
              </ul>
            </div>
            <div class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
              
                <div class="flex items-end justify-center lg:justify-start space-x-4">
                  <img
                    class="rounded-lg shadow-lg w-full md:w-1/2"
                    width="200"
                    src={deal.image}
                    alt="1"
                  />
                 
                </div>
                
              
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Deals information
          </h2>
          <p className="mt-4 text-gray-500">
            {deal.detail}
          </p>
          

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}

export default Dealsdetail;
