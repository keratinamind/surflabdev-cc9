import React from "react";
import Image from '../images/e79fb94b9c1b400e92e235bc4ef44082.png'

function Footercomp() {
  return (
    
      <div className=" md:mx-auto bg-primary flex flex-row justify-center p-4">
        <ul className="flex flex-start gap-x-20 text-white">
          <div>
            <img  className= "w-2/5" src={Image}
            />
          </div>
          <div class="menubottom">
            <ul>
              <li>
                <h3>ALL CATERGORIES</h3>
              </li>
              <li>
                <a href="./about.html">All deals</a>
              </li>
              <li>
                <a href="./service.html">Surfspot</a>
              </li>
              <li>
                <a href="./service.html">News and content</a>
              </li>
            </ul>
          </div>
          <div class="menubottom">
            <ul>
              <li>
                <h3>ADDITIONAL INFORMATION</h3>
              </li>
              <li>
                <a href="./about.html">About us</a>
              </li>
              <li>
                <a href="./service.html">Contact us</a>
              </li>
            </ul>
          </div>
          <div class="menubottom">
            <ul>
              <li>
                <h3>LEGAL INFORMATION</h3>
              </li>
              <li>
                <a href="./about.html">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    
  );
}

export default Footercomp;
