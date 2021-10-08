import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/photo-1512249167167-32fb4f8b17f7.jpg";
import Image2 from "../images/logo_lavala.png"

function Card2() {
  return (
    <div>
      <div class="md:container mx-auto my-6">
        <Link to="/alldeals/category/details">
          <div class=" w-full lg:max-w-full lg:flex">
            <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
              <img class="w-full" src={Image} />
            </div>
            <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <p class="text-sm text-gray-600 flex items-center">
                  <svg
                    class="fill-current text-gray-500 w-3 h-3 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  ></svg>
                  Members only
                </p>
                <div class="text-gray-900 font-bold text-xl mb-2">
                  Best Mountain Trails 2020
                </div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class="flex items-center">
                <img
                  class="w-12 h-12 rounded-full mr-4"
                  src={Image2}
                  alt="Avatar of Writer/"
                />
                <div class="text-sm">
                  <p class="text-gray-900 leading-none">Lavela Khaolak</p>
                  <p class="text-gray-600">Aug 18</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card2;
