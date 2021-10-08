import React from "react";
import Image from "../images/photo-1471194494705-149b8e5f9a24.jpg"

function Subscriber() {
  return (
    <div>
      <div class="md:container md:mx-auto bg-white dark:bg-gray-800">
        <div class="relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
          <h2 class="text-2xl font-semibold font-display text-black dark:text-white sm:text-3xl">
            We&#x27;ve got more coming...
          </h2>
          <p class="mt-2 max-w-xl text-base text-gray-400">
            Want to hear from us when we add new components? Sign up for our
            newsletter and we&#x27;ll email you every time we release a new
            batch of components.
          </p>
          <form>
            <div class="sm:flex jusitfy-start mt-6">
              <form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                <div class=" relative ">
                  <input
                    type="text"
                    id='"form-subscribe-Subscribe'
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
                <button
                  class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </form>
          <div class="hidden lg:block absolute inset-y-0 lg:left-2/3 xl:left-1/2 right-0">
            <picture>
              
              <img
                class="w-1/2 object-cover maw-w-44 mx-auto"
                src={Image}
                alt="shopping item"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscriber;
