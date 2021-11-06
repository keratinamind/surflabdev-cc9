import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import Image from "../images/e79fb94b9c1b400e92e235bc4ef44082.png";
import { removeToken, setToken } from "../services/localStorage";
import { useHistory } from "react-router";

export default function Navbarcomp() {
  const { user, setUser } = useContext(AuthContext);
  const history = useHistory();
  const HandleClickLogout = e => {
    e.preventDefault();
    removeToken();
    setUser(null);
    history.push("/home")

  }
  return (
    <div>
      <header>
        <div className=" md:mx-auto bg-primary flex flex-row justify-between items-center p-4 text-white">
          <div className="">
            <Link to="/">
              <img className="w-2/5" src={Image} />
            </Link>
          </div>
          <nav className="">
            {user ? (
              <>
                <div>
                  <Link className="m-3" to="./alldeals">
                    ALL DEALS
                  </Link>

                  <Link className="m-3" to="./surfspot">
                    SURFSPOT
                  </Link>

                  <Link className="m-3" to="./content">
                    NEWS AND CONTENT
                  </Link>

                  <Link className="m-3" to="./about">
                    ABOUT US
                  </Link>
                  <Link className="m-3" to="./profile">
                    MY PROFILE
                  </Link>
                  <Link className="m-3" to="./about">
                    <button onClick={HandleClickLogout}>
                    LOG OUT
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              <>
              <Link className="m-3" to="./about">
                    ABOUT US
                  </Link>
              <Link className="m-3" to="./login">
                
                LOGIN
              </Link>
              </>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
}
