import React, { useContext, useEffect } from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import { useLocation } from "react-router-dom";
import State from "context/State";
import context from "context/context";

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isLogin = location.pathname === "/signin";
  const isSignUp = location.pathname === "/signup";
  // Verify from backend if user is logged in or not
 
  
  return (
    <State>
      <div className="container">
        <Header />
      </div>
      {children}
    </State>
  );
}
