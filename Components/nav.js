/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import useAuth from "./Firebase/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();
  const userInfo = user;
  const [mobileView, setMobileView] = useState(false);
  const openMobileView = () => {
    setMobileView(true);
  };
  const closeMobileView = () => {
    setMobileView(false);
  };

  return (
    <div>
      <div className="bg-[#12131cd9] font-sansita">
        <nav className="text-white w-full flex relative justify-between items-center mx-auto px-8 h-22">
          <div className="inline-flex ">
            <a href="/" className="_o6689fn">
              <img
                className=" w-40 my-2"
                src="https://i.ibb.co/Xy39ns9/super2.png"
                alt=""
              />
            </a>
          </div>
          <div>
            <Link href={"/login"}>Portal</Link>
          </div>
          {/* <div className="flex flex-row justify-center items-center">
            <div className="hidden lg:mr-5 md:block text-xs lg:text-sm flex-shrink flex-grow-0 justify-start px-2">
              <div className="inline-block">
                <div className="inline-flex items-center max-w-full">
                  <h1 className="flex justify-center items-center">
                    <span className="text-yellow-300">
                      <FaMapMarkerAlt />
                    </span>{" "}
                    <p className="text-gray-300">
                      <span className="font-bold text-white">ADDRESS </span>
                      ROAD#04, BLOCK#B, MIRPUR-2
                    </p>
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex-initial">
              <div className="flex justify-end items-center relative">
                <div className="sm:flex mr-4 lg:mr-8 items-center hidden">
                  <a
                    className="inline-block py-2 px-3 hover:bg-gray-600 rounded-full"
                    href="#"
                  >
                    <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                      <h1 className="flex justify-center items-center text-sm">
                        <span className="text-yellow-300 mr-1">
                          <BsFillTelephoneFill />
                          {"  "}
                        </span>{" "}
                        <p className="text-yellow-300">
                          <span className="font-bold text-white">
                            {" "}
                            CALL BD{" "}
                          </span>
                          123-456-7890
                        </p>
                      </h1>
                    </div>
                  </a>
                </div>

                <div className="block">
                  <div className="inline relative">
                    <button
                      onClick={() => {
                        openMobileView();
                      }}
                      type="button"
                      className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
                    >
                      <div className="pl-1">
                        <svg
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="presentation"
                          focusable="false"
                          style={{
                            display: "block",
                            fill: "none",
                            height: "16px",
                            width: "16px",
                            stroke: "currentcolor",
                            strokeWidth: "3",
                            overflow: "visible",
                          }}
                        >
                          <g fill="none" fillRule="nonzero">
                            <path d="m2 16h28"></path>
                            <path d="m2 24h28"></path>
                            <path d="m2 8h28"></path>
                          </g>
                        </svg>
                      </div>

                      <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                        <svg
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="presentation"
                          focusable="false"
                          style={{
                            display: "block",
                            height: "100%",
                            width: "100%",
                            fill: "currentcolor",
                          }}
                        >
                          <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </nav>
        {/* {mobileView && (
          <div className="navbar-menu relative z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-[#12131c] border-r overflow-y-auto">
              <div className="flex items-center mb-8">
                <a className="mr-auto text-3xl font-bold leading-none">
                  <img
                    className=" w-40"
                    src="https://i.ibb.co/YNhpqnK/image-removebg-preview.png"
                    alt=""
                  />
                </a>
                <button
                  onClick={() => {
                    closeMobileView();
                  }}
                  className="navbar-close"
                >
                  <svg
                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div>
                <ul>
                  <li className="mb-1">
                    <Link
                      onClick={() => {
                        closeMobileView();
                      }}
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      onClick={() => {
                        closeMobileView();
                      }}
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                      href={"/dashboard"}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      onClick={() => {
                        closeMobileView();
                      }}
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                      href={"/dashboard/updateProfile"}
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      onClick={() => {
                        closeMobileView();
                      }}
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                      href={"/dashboard/rooms"}
                    >
                      Rooms
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      onClick={() => {
                        closeMobileView();
                      }}
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                      href={"/meal"}
                    >
                      Meal Plan
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      onClick={() => {
                        closeMobileView();
                      }}
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                      href={"/dashboard/payment"}
                    >
                      Payment
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <div className="pt-6">
                  {!userInfo?.email && (
                    <div>
                      <Link
                        onClick={() => {
                          closeMobileView();
                        }}
                        className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-[#1e2124] rounded-xl text-black"
                        href={"/login"}
                      >
                        Sign in
                      </Link>
                      <Link
                        onClick={() => {
                          closeMobileView();
                        }}
                        className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                        href={"/signup"}
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}
                  {userInfo?.email && (
                    <a
                      className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-red-600 hover:bg-red-700  rounded-xl"
                      onClick={logout}
                    >
                      Sign Out
                    </a>
                  )}
                </div>
                <p className="my-4 text-xs text-center text-gray-400">
                  <span>Copyright © 2023</span>
                </p>
              </div>
            </nav>
          </div>
        )} */}
      </div>
    </div>
  );
}
