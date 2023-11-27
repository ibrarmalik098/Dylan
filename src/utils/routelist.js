import Dashboard from "../screens/dashboard/Dashboard";
import {
  AiFillHome,
  AiOutlinePlus,
} from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { MdLeaderboard } from "react-icons/md";


import { BiSolidUser } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";

import { IoMdSettings } from "react-icons/io";

import Settings from "../screens/dashboard/dashboardScreens/Settings";
import Dashboard_Screen from "../screens/dashboard/dashboardScreens/Dashboard";
import Leads_Screen from "../screens/dashboard/dashboardScreens/Leads";
import MyResponces from "../screens/dashboard/dashboardScreens/MyResponces";
import Signup from "../screens/auth/signup/signup";
import SecondSection from "../screens/auth/section/SecondSection";
import FirstSection from "../screens/auth/section/FirstSection";
import ThirdSection from "../screens/auth/section/ThirdSection ";
import Login from "../screens/auth/login/login";
import ForgotPassword from "../screens/auth/forgotPassword/forgotPassword";
import VerifyOtpPassword from "../screens/auth/verifyOtp/verifyOtpPassword";
import ResetPassword from "../screens/auth/resetPassword/resetPassword";
import LandingPage from "../screens/dashboard/LandingPage";
import MainSection from "../screens/auth/section/MainSection";
import AdminLogin from "../screens/dashboard/adminScreen/auth/AdminLogin";
import Admin_Dashboard from "../screens/dashboard/adminScreen/dashboard/Dashboard";

export const main_routes = [
  {
    caption: "Login",
    linkTo: "/",
    element: <Login />,
    auth_required: false,
  },
  {
    caption: "Signup",
    linkTo: "/signup",
    element: <Signup />,
    auth_required: false,
  },
  {
    caption: "MainSection",
    linkTo: "/mainsection",
    element: <MainSection />,
    auth_required: false,
  },

  // {
  //   caption: "verifyOtp",
  //   linkTo: "/verifyOtp",
  //   element: <VerifyOtp />,
  //   auth_required: false,
  //   otpScreen: true,
  // },
  {
    caption: "ForgotPassword",
    linkTo: "/forgotPassword",
    element: <ForgotPassword />,
    auth_required: false,
    otpScreen: true,
  },
  {
    caption: "ResetPassword",
    linkTo: "/resetPassword",
    element: <ResetPassword />,
    auth_required: false,
    otpScreen: true,
  },
  {
    caption: "VerifyOtpPassword",
    linkTo: "/verifyOtpPassword",
    element: <VerifyOtpPassword />,
    auth_required: false,
    otpScreen: true,
  },
  {
    caption: "Dashboard",
    linkTo: "/dashboard",
    element: <Dashboard />,
    auth_required: false,
  },
  {
    caption: "LandingPage",
    linkTo: "/landingpage",
    element: <LandingPage />,
    auth_required: false,
  },
  {
    caption: "AdminLogin",
    linkTo: "/AdminLogin",
    element: <AdminLogin />,
    auth_required: false,
  },
  {
    caption: "Admin_Dashboard",
    linkTo: "/Admin_Dashboard",
    element: <Admin_Dashboard />,
    auth_required: false,
  },
];

export const sideBarData = [
  {
    name: "Dashboard",
    linkTo: "/dashboard",
    icon: <GoHome size={20} />,
    element: <Dashboard_Screen />,
    both: true,
    list_in_sidebar: true,
  },
  {
    name: "Leads",
    linkTo: "/Leads",
    icon: <MdLeaderboard size={20} />,
    element: <Leads_Screen />,
    both: true,
    list_in_sidebar: true,
  },
  {
    name: "My Responces",
    linkTo: "/MyResponces",
    icon: <FaHandshake size={20} />,
    element: <MyResponces />,
    both: true,
    list_in_sidebar: true,
  },

  {
    name: "Settings",
    linkTo: "/Settings",
    icon: <IoMdSettings size={20} />,
    element: <Settings />,
    both: true,
    list_in_sidebar: true,
  },

];
