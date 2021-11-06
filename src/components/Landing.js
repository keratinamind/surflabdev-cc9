import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="py-20 bg-gradient-to-r from-primary  to-primarygrey">
        <div className="container mx-auto px-6 ">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Welcome to Surflab
          </h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            The best surf deals in Thailand as good as your expect.
          </h3>
          <Link to="/login">
            <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
              Login to find out!
            </button>
          </Link>
        </div>
      </div>

      <section className="container mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Explore various surf deals around Thailand
        </h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Surf Classes
            </h4>
            <p className="text-gray-600 mb-8 text-lg">
              We provide the most exclusive surf classes that you can get.
              Starting from fundamental to experts. Having the best coach from
              real professional surfers to guide you.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://res.cloudinary.com/thisisdupreecloud/image/upload/v1634232289/pexels-photo-6299936_v6w5n1.jpg"
              alt="Surfclass"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <img
              src="https://res.cloudinary.com/thisisdupreecloud/image/upload/v1634233043/photo-1606666378370-04fc774bbefc_afkc4i.jpg"
              alt="Geardeals"
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
            <p className="text-gray-600 mb-8 text-xl">
              Find out our best deals for your gears with most surf shop as our
              allies are willing to providing best shopping experience ever.
              Starting from 30% to 70% gear deals.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>
            <p className="text-gray-600 mb-8 text-xl">
              Enjoying stay in coolest place in Thailand along with surfing
              packages will be the best experience you can get from this deals.
              With our top tier hotels & resorts are our allies providing Surf &
              Stay deals , this will be memorable holiday off for you.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://res.cloudinary.com/thisisdupreecloud/image/upload/v1634233195/photo-1586611292717-f828b167408c_xafho4.jpg"
              alt="SurfNStay"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Reviews by our users
          </h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-2 mb-4">
              <div className="bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">
                  Best deals you can find here in Thailand , there is no other
                  place you can get this huge discount for your surf packgages
                </p>
                <p className="text-gray-500 text-xs md:text-sm px-6">
                  Prayuth Chan-O-Jo
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
              <div className="bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">
                  I'm ensure that this surf & stay packages are the most
                  valuable deals you can get around here for touring in
                  Thailand. I'm recommend to try at least once
                </p>
                <p className="text-gray-500 text-xs md:text-sm px-6">
                  Elon Tusk
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
              <div className="bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">
                  I have no experience of surfing at all before I found this
                  site. But now I'm able to surf anywhere in Thailand. Such a
                  good deals that I have got here.
                </p>
                <p className="text-gray-500 text-xs md:text-sm px-6">
                  Kim Jong Ann
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container w-full mx-auto px-6 text-center py-20 bg-gradient-to-r from-purple-400 via-pink-500 to-primary">
        <h2 className="mb-6 text-4xl font-bold text-center text-white">
          Don't miss our deals
        </h2>
        <h3 className="my-4 text-2xl text-white">
          Subscribe to get our latest news
        </h3>
        <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
          Subscribe
        </button>
      </div>
    </>
  );
}

export default Landing;
