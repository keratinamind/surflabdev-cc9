import React from "react";
import { Link } from "react-router-dom";

function NavProfile() {
  return (
    <div className="md:container mx-auto border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">
      <div className="flex mx-10 w-ful items-center">
        <Link to="/profile">
          <p className="text-lg px-5 text-gray-800 dark:text-gray-100 font-bold">
            Profile
          </p>
        </Link>
        <Link to="/mybooking">
          <p className="text-lg px-5 mx-10 text-gray-800 dark:text-gray-100 font-bold">
            My Booking
          </p>
        </Link>
      </div>
    </div>
  );
}

export default NavProfile;
