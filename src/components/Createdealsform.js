import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import Image from "../images/portrait-white-man-isolated_53876-40306.jpg";
import axios from "axios";
import { useHistory } from "react-router";

function Createdealsform() {
  const history = useHistory();
  const [category, setCategory] = useState(1);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [detail, setDetail] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shop, setShop] = useState("");
  const handleSelectCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeFile = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSelectShopId = (e) => {
    setShop(e.target.value);
  };

  const handleSubmitCreateDeal = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();

      formData.append("upload-avatar", image);
      formData.append("title", title);
      formData.append("price", price);
      formData.append("detail", detail);
      formData.append("quantity", quantity);
      formData.append("categoryId", category);
      formData.append("shopId", shop);

      await axios.post("/dealdetail", formData)
      .then((res)=> alert(res.data.msg))
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <div className="my-8">
      <section class=" bg-gray-100 bg-opacity-50">
        <form class="container max-w-screen-lg mx-auto shadow-md md:w-auto">
          <div class="p-4 bg-gray-100 border-t-2 border-pink-400 rounded-lg bg-opacity-5">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
              <div class="inline-flex items-center space-x-4">
                <a href="#" class="block relative">
                  <img
                    alt="profil"
                    src={Image}
                    class="mx-auto object-cover rounded-full h-16 w-16 "
                  />
                </a>
                <h1 class="text-gray-600">Create Deals</h1>
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div class="items-center w-full p-4 space-y-4 text-gray-700 md:inline-flex md:space-y-0">
              <h2 class="max-w-1/3 mx-auto md:w-1/3">Upload image</h2>
              <div class="max-w-2/3 mx-auto md:w-2/3">
                <div class=" relative ">
                  <label className="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-pink-600 hover:text-white text-pink-600 ease-linear transition-all duration-150">
                    <i className="fas fa-cloud-upload-alt fa-3x"></i>
                    <span className="mt-2 text-base leading-normal">
                      Select a file
                    </span>
                    <input
                      type="file"
                      class="hidden"
                      onChange={handleChangeFile}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div class="items-center w-full p-4 space-y-4 text-gray-700 md:inline-flex md:space-y-0">
              <h2 class="max-w-1/3 mx-auto md:w-1/3">Deals Category</h2>
              <div class="max-w-2/3 mx-auto md:w-2/3">
                <div class=" relative ">
                  <select
                    value={category}
                    onChange={handleSelectCategory}
                    className="rounded-lg border-transparent flex-1 border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value={1}>Surf & Stay</option>
                    <option value={2}>Gear deals</option>
                    <option value={3}>Surf classes</option>
                    <option value={4}>Surf tour</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="items-center w-full p-4 space-y-4 text-gray-700 md:inline-flex md:space-y-0">
              <h2 class="max-w-1/3 mx-auto md:w-1/3">Shop Name</h2>
              <div class="max-w-2/3 mx-auto md:w-2/3">
                <div class=" relative ">
                  <select
                    value={shop}
                    onChange={handleSelectShopId}
                    className="rounded-lg border-transparent flex-1 border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value={1}>Lavela KhaoLak</option>
                    <option value={2}>Dream Hotel</option>
                    <option value={3}>Hotel Gahn</option>
                    <option value={4}>Better surf Thailand</option>
                    <option value={5}>Surf nerds</option>
                    <option value={6}>Surf loco loca</option>
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
                      value={quantity}
                      onChange={(e) => setQuantity(+e.target.value)}
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
                      value={price}
                      onChange={(e) => setPrice(+e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="items-center w-full p-4 space-y-4 text-gray-700 md:inline-flex md:space-y-0">
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
            </div> */}

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
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                      ></textarea>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="items-center w-full p-4 space-y-4 text-gray-700 md:inline-flex md:space-y-0">
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
            </div> */}

            <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
              <button
                type="submit"
                onClick={handleSubmitCreateDeal}
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
