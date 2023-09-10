/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AiFillHome,
  AiFillNotification,
  AiOutlineNotification,
} from "react-icons/ai";
import { RiAdminFill, RiMoneyDollarBoxFill } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { GiHotMeal, GiMoneyStack } from "react-icons/gi";
import useAuth from "../Firebase/useAuth";
import authCheck from "../Firebase/authCheck";

import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
const Layout = ({ children }) => {
  // const pathname = usePathname();
  const router = useRouter();
  const pathname = router.asPath;

  const { user, userInfo, logout } = useAuth();
  const [toggleButton, setToggleButton] = useState(true);
  const [screenSmall, setScreenSmall] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    if (windowWidth >= 1024) {
      setScreenSmall(false);
    } else {
      setScreenSmall(true);
    }
    // console.log(pathname);
    let url = pathname.split("/");
    url.reverse().pop();
    // console.log(url);

    for (let i = 0; i < url.length; i++) {
      if (url[i].length == 24 || url[i][0] == "[") {
        continue;
      }
      var element = document.querySelector(`li.${url[i]}`);
      // console.log(element);
      if (element) {
        element.classList.add("active");
        break;
      }
    }

    // let url = "";
    // console.log(pathname);
    // for (let i = pathname?.length - 1; i >= 0; i--) {
    //   if (pathname[i] == "/") {
    //     if (url.length == 24) {
    //       url = "";
    //       continue;
    //     } else {
    //       break;
    //     }
    //   }
    //   url = pathname[i] + url;
    // }
    // var element = document?.querySelector(`li.${url}`);
    // if (element) {
    //   element?.classList.add("active");
    // } else if (url == "updateProfile") {
    //   document.querySelector(`li.adminProfile`)?.classList.add("active");
    // } else if (url == "updateProfile") {
    //   document.querySelector(`li.adminProfile`)?.classList.add("active");
    // }

    // console.log(url);
  }, [windowWidth]);

  // console.log(toggleButton);

  const handleClick = () => {
    setToggleButton(!toggleButton);
  };

  return (
    <>
      <Head>
        <script async defer src="https://buttons.github.io/buttons.js"></script>
        <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
      </Head>
      <div>
        <div className="">
          <nav className="bg-[#25282c] border-b border-gray-200 fixed z-30 w-full">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
              <div className="flex items-center">
                <button
                  id="toggleSidebarMobile"
                  aria-expanded="true"
                  aria-controls="sidebar"
                  className="lg:hidden mr-2 text-gray-600 hover:text-white cursor-pointer p-2 hover:bg-[#1e2124] focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                  onClick={handleClick}
                >
                  <svg
                    id="toggleSidebarMobileHamburger"
                    className={`w-6 h-6 ${toggleButton ? "" : "hidden"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    id="toggleSidebarMobileClose"
                    className={`w-6 h-6 ${toggleButton ? "hidden" : ""}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div className="flex items-center justify-center w-full">
                  {/* <a className="text-xl text-white font-bold flex items-center lg:ml-2.5">
                    Dashboard
                  </a> */}
                  <h1 className="text-4xl text-center w-full">
                    {userInfo?.role == "admin" ? "Admin" : "User"} Dashboard
                  </h1>
                </div>
                {/* <div className="flex items-center">
                  <button
                    id="toggleSidebarMobileSearch"
                    type="button"
                    className="lg:hidden text-gray-500 hover:text-white hover:bg-[#1e2124] p-2 rounded-lg"
                  >
                    <span className="sr-only">Search</span>
                  </button>
                </div> */}
              </div>
            </div>
          </nav>
          <div className="flex overflow-hidden">
            <aside
              id="sidebar"
              className={`fixed ${
                toggleButton ? "hidden" : ""
              } z-20 pt-16 h-full top-0 bg-[#25282c] shadow-lg left-0 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75`}
              aria-label="Sidebar"
            >
              <div className=" flex-1 flex flex-col min-h-0 pt-0">
                <div className="flex-1 flex flex-col pb-4 overflow-y-auto">
                  <div className="flex-1  divide-y space-y-1">
                    {userInfo?.role == "admin" && (
                      <ul className="space-y-2 px-3 py-2 text-white dashboard-ul">
                        <li className="dashboard">
                          <Link
                            href="/dashboard"
                            className="text-base hover:text-white font-normal rounded-lg flex items-center p-2 hover:bg-[#1e2124] group"
                          >
                            <svg
                              className="w-6 h-6 text-gray-500 group-hover:text-white transition duration-75"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                            <span className="ml-3">Dashboard</span>
                          </Link>
                        </li>
                        <li className="adminProfile">
                          <Link
                            href="/dashboard/adminProfile"
                            className="text-base hover:text-white font-normal rounded-lg flex items-center p-2 hover:bg-[#1e2124] group"
                          >
                            <svg
                              className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-white transition duration-75"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                            </svg>
                            <span className="ml-3">Profile</span>
                          </Link>
                        </li>
                        <li className="addNotice">
                          <Link
                            href="/dashboard/addNotice"
                            className="text-base hover:text-white font-normal rounded-lg hover:bg-[#1e2124] flex items-center p-2 group "
                          >
                            <svg
                              className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-white transition duration-75"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                              <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                            </svg>
                            <span className="ml-3 flex-1 whitespace-nowrap">
                              Add Notice
                            </span>
                          </Link>
                        </li>
                        <li className="manage-user">
                          <Link
                            href="/dashboard/manage-user"
                            className="text-base hover:text-white font-normal rounded-lg hover:bg-[#1e2124] flex items-center p-2 group "
                          >
                            <svg
                              className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-white transition duration-75"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span className="ml-3 flex-1 whitespace-nowrap">
                              Manage Users
                            </span>
                          </Link>
                        </li>
                        <li className="addAdmin">
                          <Link
                            href="/dashboard/addAdmin"
                            className="text-base hover:text-white font-normal rounded-lg hover:bg-[#1e2124] flex items-center p-2 group "
                          >
                            <RiAdminFill className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-white transition duration-75" />
                            <span className="ml-3 flex-1 whitespace-nowrap">
                              Manage Admin
                            </span>
                          </Link>
                        </li>
                        <li className="addRoom">
                          <Link
                            href="/dashboard/addRoom"
                            className="text-base hover:text-white font-normal rounded-lg hover:bg-[#1e2124] flex items-center p-2 group "
                          >
                            <svg
                              className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-white transition duration-75"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                            </svg>
                            <span className="ml-3 flex-1 whitespace-nowrap">
                              Add Room
                            </span>
                          </Link>
                        </li>
                        <li className="manageRoom">
                          <Link
                            href="/dashboard/manageRoom"
                            className="text-base hover:text-white font-normal rounded-lg hover:bg-[#1e2124] flex items-center p-2 group "
                          >
                            <svg
                              className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-white transition duration-75"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span className="ml-3 flex-1 whitespace-nowrap">
                              Manage Rooms
                            </span>
                          </Link>
                        </li>
                        <li className="addMeal">
                          <Link
                            href="/dashboard/addMeal"
                            className="text-base hover:text-white font-normal rounded-lg hover:bg-[#1e2124] flex items-center p-2 group "
                          >
                            <svg
                              className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-white transition duration-75"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span className="ml-3 flex-1 whitespace-nowrap">
                              Manage Meal
                            </span>
                          </Link>
                        </li>
                        <li className="meal-orders">
                          <Link
                            href="/dashboard/meal-orders"
                            className="text-base hover:text-white font-normal rounded-lg hover:bg-[#1e2124] flex items-center p-2 group "
                          >
                            <GiHotMeal className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-white transition duration-75"></GiHotMeal>
                            <span className="ml-3 flex-1 whitespace-nowrap">
                              Meal Orders
                            </span>
                          </Link>
                        </li>
                        {/* <li>
                          <Link
                            href="/dashboard/dues"
                            className="text-base hover:text-white font-normal rounded-lg hover:bg-[#1e2124] flex items-center p-2 group "
                          >
                            <RiMoneyDollarBoxFill className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-white transition duration-75"></RiMoneyDollarBoxFill>
                            <span className="ml-3 flex-1 whitespace-nowrap">
                              Dues
                            </span>
                          </Link>
                        </li> */}
                        <li className="withdraw">
                          <Link
                            href="/dashboard/withdraw"
                            className="text-base hover:text-white font-normal rounded-lg hover:bg-[#1e2124] flex items-center p-2 group "
                          >
                            <GiMoneyStack className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-white transition duration-75" />
                            <span className="ml-3 flex-1 whitespace-nowrap">
                              Withdraw
                            </span>
                          </Link>
                        </li>
                        {/* <li className="manage-payments">
                          <Link
                            href="/dashboard/manage-payments"
                            className="text-base hover:text-white font-normal rounded-lg hover:bg-[#1e2124] flex items-center p-2 group "
                          >
                            <GiMoneyStack className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-white transition duration-75" />
                            <span className="ml-3 flex-1 whitespace-nowrap">
                              Manage Payments
                            </span>
                          </Link>
                        </li> */}
                        <li>
                          <Link
                            href="/"
                            className="text-base hover:text-white font-normal rounded-lg hover:bg-[#1e2124] flex items-center p-2 group "
                          >
                            <AiFillHome className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-white transition duration-75" />
                            <span className="ml-3 flex-1 whitespace-nowrap">
                              Home
                            </span>
                          </Link>
                        </li>
                        <li>
                          <a
                            className="block p-2 cursor-pointer mb-2 leading-loose text-xs text-center text-white font-semibold bg-[#e61d4f] hover:bg-red-700  rounded-xl"
                            onClick={logout}
                          >
                            Sign Out
                          </a>
                        </li>
                      </ul>
                    )}
                    {userInfo?.role == "user" && (
                      <ul className="space-y-2 px-3 py-2 text-white dashboard-ul">
                        <li className="dashboard">
                          <Link
                            href="/dashboard"
                            className="text-base hover:text-white font-normal rounded-lg flex items-center p-2 hover:bg-[#1e2124] group"
                          >
                            <svg
                              className="w-6 h-6 text-gray-500 group-hover:text-white transition duration-75"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                            <span className="ml-3">Dashboard</span>
                          </Link>
                        </li>
                        <li className="notice">
                          <Link
                            href="/dashboard/notice"
                            className="text-base hover:text-white font-normal rounded-lg flex items-center p-2 hover:bg-[#1e2124] group"
                          >
                            <AiFillNotification className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-white transition duration-75" />
                            <span className="ml-3">Notice</span>
                          </Link>
                        </li>
                        <li className="updateProfile">
                          <Link
                            href="/dashboard/updateProfile"
                            className="text-base hover:text-white font-normal rounded-lg hover:bg-[#1e2124] flex items-center p-2 group "
                          >
                            <svg
                              className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-white transition duration-75"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span className="ml-3 flex-1 whitespace-nowrap">
                              Update Profile
                            </span>
                          </Link>
                        </li>
                        <li className="rooms">
                          <Link
                            href="/dashboard/rooms"
                            className="text-base hover:text-white font-normal rounded-lg hover:bg-[#1e2124] flex items-center p-2 group "
                          >
                            <svg
                              className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-white transition duration-75"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                            </svg>
                            <span className="ml-3 flex-1 whitespace-nowrap">
                              Rooms
                            </span>
                          </Link>
                        </li>
                        <li className="meal">
                          <Link
                            href="/dashboard/meal"
                            className="text-base hover:text-white font-normal rounded-lg hover:bg-[#1e2124] flex items-center p-2 group "
                          >
                            <svg
                              className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-white transition duration-75"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span className="ml-3 flex-1 whitespace-nowrap">
                              Meal Plan
                            </span>
                          </Link>
                        </li>
                        <li className="payment">
                          <Link
                            href="/dashboard/payment"
                            className="text-base hover:text-white font-normal rounded-lg hover:bg-[#1e2124] flex items-center p-2 group "
                          >
                            <MdPayment className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-white transition duration-75" />
                            <span className="ml-3 flex-1 whitespace-nowrap">
                              Payment
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/"
                            className="text-base hover:text-white font-normal rounded-lg hover:bg-[#1e2124] flex items-center p-2 group "
                          >
                            <AiFillHome className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-white transition duration-75" />
                            <span className="ml-3 flex-1 whitespace-nowrap">
                              Home
                            </span>
                          </Link>
                        </li>
                        <li>
                          <a
                            className="block p-2 mb-2 cursor-pointer leading-loose text-xs text-center text-white font-semibold bg-[#e61d4f] hover:bg-red-700  rounded-xl"
                            onClick={logout}
                          >
                            Sign Out
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </aside>
            <div
              className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
              id="sidebarBackdrop"
            ></div>
            <div
              id="main-content"
              className="h-full w-full relative overflow-y-auto lg:ml-64"
            >
              <main className="min-h-[80vh]">
                <div className=" pt-20 px-4">{children}</div>
              </main>
              {/* <footer className="bg-[#36393e52] md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
                <ul className="flex items-center flex-wrap mb-6 md:mb-0">
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                    >
                      Terms and conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                    >
                      Licensing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                    >
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-500 hover:underline"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="flex sm:justify-center space-x-6">
                  <a href="#" className="text-gray-500 hover:text-white">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-white">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-white">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-white">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-white">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </footer> */}
              <p className="text-center text-sm text-gray-500 my-3">
                &copy; 2023{" "}
                <a href="#" className="hover:underline" target="_blank">
                  Hostel Hub
                </a>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
