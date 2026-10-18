import React, { useContext, useEffect, useState } from "react";
import Images from "assets/images";
import { Link } from "react-router-dom";
import context from "context/context";

export default function Header() {
  const a = useContext(context)
  const isloggedin = a.isloggedin
  const loggedin = a.loggedin
  const removesession = a.removesession
  useEffect(() => {
    isloggedin()
  }, [])
  const [isOpen, setIsOpen] = useState("hidden");
  const [menu, setmenu] = useState([])
  useEffect(() => {
    if (loggedin === "yes") {
      setmenu([
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Features",
          link: "/features",
        },
        {
          name: "Chats",
          link: "/chats",
        },
        {
          name: "Contact",
          link: "/contact-us",
        },
      ])
    } else {
      setmenu([
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Features",
          link: "/features",
        },
        {
          name: "Contact",
          link: "/contact-us",
        }
      ])
    }
  }, [loggedin])


  const handleOpenMenu = () => {
    if (isOpen === "hidden") {
      setIsOpen("block");
    }
  };

  const handleCloseMenu = () => {
    if (isOpen === "block") {
      setIsOpen("hidden");
    }
  };

  const handleHideMenu = () => {
    if (isOpen === "block") {
      setIsOpen("hidden");
    }
  };

  // on page chnage hide menu//

  return (
    <>
      <div className="hidden lg:block">
        <div className="h-20 w-full flex gap-16 justify-start items-center ">
          <div className="w-2/5 flex items-center">
            <Link to={"/"}>
              <img src={Images.Logo} className="w-44" alt="logo" />
            </Link>
          </div>
          <div className="flex justify-end items-center w-full">
            <ul className="flex gap-8 items-center font-semibold text-base text-white">
              {menu.map((item, index) => (
                <li key={index}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
             {
              loggedin!=="yes"?<><li>
              <Link
                to={"signin"}
                className="font-semibold text-white text-base"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to={"/signup"}
                className="bg-secondary text-black font-semibold text-base text-white px-4 py-3 rounded-lg"
              >
                Sign Up
              </Link>
            </li></> : <li>
              <Link
                to={"#"}
                onClick={()=>{
                  a.removesession()
                  localStorage.clear()
                  window.location.href="/signin"
                }}
                className="bg-secondary text-black font-semibold text-base text-white px-4 py-3 rounded-lg"
              >
               Logout
              </Link>
            </li>
             }
            </ul>
          </div>
          {/* <div className="flex w-2/6 justify-end items-center">
            <div className="flex gap-8 items-center">
              <Link
                to={"signin"}
                className="font-semibold text-white text-base"
              >
                Login
              </Link>
              <Link
                to={"/signup"}
                className="bg-secondary text-black font-semibold text-base text-white px-4 py-2 rounded-lg"
              >
                Sign Up
              </Link>
            </div>
          </div> */}
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="h-20 w-full flex gap-16 justify-between items-center">
          <div className="flex items-center">
            <Link to={"/"} onClick={handleHideMenu}>
              <img src={Images.Logo} className="lg:w-40 w-40" alt="logo" />
            </Link>
          </div>
          <div className="flex items-center" onClick={handleOpenMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>

      <div
        className={`fixed lg:hidden h-[100vh] w-full bg-bg_color right-0 top-0 z-20 ${isOpen}`}
      >
        <div className="h-20 w-full flex gap-16 p-5 justify-between items-center">
          <div className="flex items-center">
            <Link to={"/"} onClick={handleHideMenu}>
              <img src={Images.Logo} className="lg:w-40 w-40" alt="logo" />
            </Link>
          </div>

          <div className="flex items-center" onClick={handleCloseMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-10 text-white p-5">
          {menu.map((item, index) => (
            <Link
              to={item.link}
              className="flex justify-between text-lg items-center"
              key={index}
              onClick={handleHideMenu}
            >
              {item.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                ></path>
              </svg>
            </Link>
          ))}
          <Link
            to={"/signin"}
            className="flex justify-between text-lg items-center"
            onClick={handleHideMenu}
          >
            Sign In
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              ></path>
            </svg>
          </Link>
          <Link
            to={"/signup"}
            className="flex justify-between text-lg items-center"
            onClick={handleHideMenu}
          >
            Sign Up
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
