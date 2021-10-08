import React from "react";
import { Link } from "react-router-dom";
import Image from '../images/e79fb94b9c1b400e92e235bc4ef44082.png'

export default function Navbarcomp() {
  return (
    <div>
      <header>
        <div className=" md:mx-auto bg-primary flex flex-row justify-between items-center p-4 text-white">
          <div className="">
            <Link to='/'>
            <img className="w-2/5"
              src={Image}
            />
            </Link>
          </div>
          <nav className="">
            <div>
              <Link className="m-3" to="./alldeals">ALL DEALS</Link>

              <Link className="m-3" to="./surfspot">SURFSPOT</Link>

              <Link className="m-3" to="./content">NEWS AND CONTENT</Link>

              <Link className="m-3" to="./about">ABOUT US</Link>

              <Link className="m-3" to="./login">LOGIN / REGISTER</Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
