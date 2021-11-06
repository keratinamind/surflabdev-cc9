import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/photo-1512249167167-32fb4f8b17f7.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

function Card({ name, id }) {
  const [dealfiltered, setDealfiltered] = useState([]);
  console.log(dealfiltered);

  useEffect(() => {
    axios
      .get(`/dealdetail/filtercategory/${id}`)
      .then((res) => setDealfiltered(res.data.dealByCategory))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="md:container md:mx-auto ">
      <div className="mt-6 ml-10 text-2xl font-bold">
        <p>{name}</p>
      </div> 
      
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {dealfiltered.slice(0,3).map((item) => (
       
          <Link to={{pathname:"/alldeals/details", state: { dealId : item.id }}} >
            <div class="rounded overflow-hidden shadow-lg">
              <img
                class="w-full h-80 object-cover"
                src={item.image}
                alt="Mountain"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{item.title}</div>
                <span className="text-sm text-red-300 pr-5">Deals available until</span><span class="text-sm text-gray-500">{item.expireDate.split("T")[0]}</span>
              </div>
              <div class="px-6 pb-2">
                <span class="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Available : {item.quantity}
                </span>

                <span class="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">
                 {item.price}
                </span>
              </div>
            </div>
          </Link>
          ))}
        </div>
      
    </div>
  );
}

export default Card;
