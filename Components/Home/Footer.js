/* eslint-disable @next/next/no-img-element */
import {
  FaDribbble,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <div className="flex w-screen items-center justify-center flex-wrap py-5 text-center bg-[#12131c38] font-sansita">
      <ScrollToTop
        smooth
        top="500"
        color="#ffffff"
        viewBox="0 0 330 330"
        svgPath="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M255.606,205.606
        C252.678,208.535,248.839,210,245,210s-7.678-1.464-10.606-4.394l-69.396-69.393l-69.392,69.393c-5.857,5.858-15.355,5.858-21.213,0
        c-5.858-5.857-5.858-15.355,0-21.213l79.998-80c2.813-2.813,6.628-4.394,10.606-4.394c3.979,0,7.793,1.58,10.607,4.394l80.002,80
        C261.465,190.251,261.465,199.749,255.606,205.606z"
        style={{
          borderRadius: "20px",
          paddingLeft: "6px",
          backgroundColor: "#2bfde9",
          zIndex: "6",
          // backgroundColor: "#4f46e5",
        }}
      />
      <div className="lg:w-1/3 w-1/2 text-center lg:my-6 flex justify-center">
        <img
          className=" w-[300px]"
          src="https://i.ibb.co/Xy39ns9/super2.png"
          alt=""
        />
      </div>
      <div className="lg:w-1/3 w-screen text-sm text-gray-500 my-4">
        <h1>Christos Uster © 2023 All Rights Reserved</h1>
      </div>
      <div className="flex lg:w-1/3 md:w-1/2 w-full justify-center items-center pb-5 lg:py-0">
        <h1 className="text-gray-300 font-bold pr-2">FOLLOW US</h1>
        <a
          href="#"
          className="hover:bg-[#1e2124] hover:border-yellow-300 hover:text-yellow-300 bg-yellow-300 border-2 border-transparent h-fit w-fit p-3 rounded-full text-gray-800 mx-1"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="hover:bg-[#1e2124] hover:border-yellow-300 hover:text-yellow-300 bg-yellow-300 border-2 border-transparent h-fit w-fit p-3 rounded-full text-gray-800 mx-1"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="hover:bg-[#1e2124] hover:border-yellow-300 hover:text-yellow-300 bg-yellow-300 border-2 border-transparent h-fit w-fit p-3 rounded-full text-gray-800 mx-1"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="hover:bg-[#1e2124] hover:border-yellow-300 hover:text-yellow-300 bg-yellow-300 border-2 border-transparent h-fit w-fit p-3 rounded-full text-gray-800 mx-1"
        >
          <FaDribbble />
        </a>
      </div>
    </div>
  );
};

export default Footer;
