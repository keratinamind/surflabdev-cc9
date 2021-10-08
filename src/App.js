import "./App.css";
import { Link } from "react-dom";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Alldeals from "./pages/Alldeals";
import Alldealscategory from "./pages/Alldealscategory";
import Alldealsdetails from "./pages/Alldealsdetail";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Forgotpassword from "./pages/Forgotpassword";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footercomp from "./components/Footer";
import Navbarcomp from "./components/Navbar";
import Surfspot from "./pages/Surfspot";
import Content from "./pages/Content";
import Profile from "./pages/Profile";
import Adminlogin from "./pages/Adminlogin";
import Admindashboard from "./components/Admindashboard";
import Admincreatedeals from "./pages/Admincreatedeals";

function App() {
  return (
    <BrowserRouter>
      <Navbarcomp />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/surfspot" component={Surfspot} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/alldeals/category/details" component={Alldealsdetails} />
        <Route path="/alldeals/category" component={Alldealscategory} />
        <Route path="/alldeals" component={Alldeals} />
        <Route path="/content" component={Content} />
        <Route path="/profile" component={Profile} />
        <Route path="/contact" component={Contact} />
        <Route path="/forgotpassword" component={Forgotpassword} />
        <Route path="/adminlogin" component={Adminlogin} />
        <Route path="/adminhome" component={Admindashboard} />
        <Route path="/admincreatedeals" component={Admincreatedeals} />
        
        <Route path="/" component={Homepage} />

      </Switch>
      <Footercomp />
    </BrowserRouter>
  );
}

export default App;
