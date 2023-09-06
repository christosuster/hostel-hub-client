import Link from "next/link";
import React from "react";

const Meal = () => {
  return (
    <section
      style={{
        background: `url(https://i.ibb.co/k1cRfpB/image.png) no-repeat center center / cover`,
        // minHeight: "750px",
      }}
    >
      <div className="container font-sansita mx-auto px-4 py-14 flex flex-row items-center text-white h-[750px]">
        <div className="lg:w-1/2 flex justify-center">
          <div>
            <h1 className=" text-7xl font-bold">
              Breakfast <br /> Lunch & Dinner
            </h1>
            <p className=" py-10 tracking-[3px] font-bold">
              ORDER BREAKFAST JUST FOR{" "}
              <span className="text-orange-400">100৳</span>
              <br />
              WITH YOUR BOOKING
            </p>
            <Link
              href="/meal"
              className="transition duration-300 w-fit py-4 px-6 bg-gray-500 text-white font-bold mt-8 hover:bg-orange-500 "
            >
              BOOK NOW
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 hidden lg:flex items-center justify-center">
          <div className=" bg-orange-500 w-40 h-40 rounded-full flex flex-col justify-center items-center">
            <h1 className=" tracking-[3px] text-sm font-bold">FROM</h1>
            <h1 className="text-4xl font-semibold text-yellow-300">100৳</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meal;
