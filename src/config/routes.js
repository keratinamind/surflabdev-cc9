import Admindashboard from "../components/Admindashboard";
import Bookingcompleted from "../components/Bookingcompleted";
import About from "../pages/About";
import Admincreatedeals from "../pages/Admincreatedeals";
import Alldeals from "../pages/Alldeals";
// import Alldealscategory from "../pages/Alldealscategory";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Content from "../pages/Content";
import Forgotpassword from "../pages/Forgotpassword";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import ProfileBooking from "../pages/ProfileBooking";
import Signup from "../pages/Signup";
import Surfspot from "../pages/Surfspot";
import Alldealsdetail from "../pages/Alldealsdetail";
import Adminupdatedeals from "../pages/Adminupdatedeals";

const route = {
  customer: {
    route: [
      { path: "/profile", component: Profile },
      { path: "/mybooking", component: ProfileBooking },
      { path: "/about", component: About },
      { path: "/mybooking", component: ProfileBooking },
      { path: "/surfspot", component: Surfspot },
      { path: "/checkout", component: Checkout },
      { path: "/completed", component: Bookingcompleted },
      { path: "/alldeals/details", component: Alldealsdetail },
      { path: "/alldeals", component: Alldeals },
      { path: "/content", component: Content },
      { path: "/contact", component: Contact },

      { path: "/forgotpassowrd", component: Forgotpassword },
      { path: "/", component: Homepage },
    ],
    redirect: "/",
  },

  admin: {
    route: [
      { path: "/adminupdatedeals", component: Adminupdatedeals },
      { path: "/adminhome", component: Admindashboard },
      { path: "/admincreatedeals", component: Admincreatedeals },
    ],
    redirect: "/adminhome",
  },

  guest: {
    route: [
      { path: "/login", component: Login },
      { path: "/register", component: Signup },
      { path: "/about", component: About },
      { path: "/", component: Homepage },
    ],
    redirect: "/login",
  },
};

export default route;
