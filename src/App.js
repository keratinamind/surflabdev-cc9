import "./App.css";
import React from "react";
 import { BrowserRouter , Route , Redirect , Switch } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/authContext";
import Footercomp from "./components/Footer";
import Navbarcomp from "./components/Navbar";
import route from "./config/routes";

import Maincontainer from "./components/Maincontainer";

function App() {
  const { user } = useContext(AuthContext);
  console.log(user);
  // ใส่ ? ดัก null , set role หลักจากดูค่า
  const role = user?.role === "customer" ? "customer" : user?.role === "admin" ? "admin" : "guest";
  console.log(role);

  return (
    <BrowserRouter>
      <Maincontainer >
        <Navbarcomp />
        <Switch>
          {route[role].route.map((elem, idx)=> (
            <Route key={idx} path={elem.path} component={elem.component} redirect={elem.redirect} />
          ))}
          <Redirect to={route[role].redirect} />

        </Switch>
        <Footercomp />
      </Maincontainer>
    </BrowserRouter>
  );
}

export default App;
