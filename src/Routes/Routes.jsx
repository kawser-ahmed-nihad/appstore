import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layout/HomeLayouts";
import Home from "../pages/Home";
import Details from "../pages/Details";
import LoginPage from "../pages/LoginPage";
import SignUp from "../pages/SignUp";
import PrivateRoute from "../Context/PrivateRoute";
import Error from "../pages/Error";
import Concat from "../pages/Concat";
import Profile from "../pages/Profile";
import ForgotPassword from "../pages/ForgotPassword ";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/app.json"),
        hydrateFallbackElement : <LoginPage></LoginPage>
      },
      {
        path: "contact",
        element:  <Concat/>,
       
      },
      {
        path: "profile",
        element:  <PrivateRoute><Profile></Profile></PrivateRoute>,
       
      },
      {
        path: "appDetails/:id",
        element: <PrivateRoute><Details /></PrivateRoute>,
        loader: () => fetch("/app.json"),
        hydrateFallbackElement : <LoginPage></LoginPage>
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "forgot",
    element: <ForgotPassword></ForgotPassword>,
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);
