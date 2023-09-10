/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const BookingStages = () => {
  return (
    <section className=" bg-[#12131c40]">
      <div className="container mx-auto px-4 py-24 grid lg:gap-10 lg:grid-cols-2 grid-cols-1 items-center text-white font-sansita">
        <div className="col flex items-center justify-center">
          <div className="about_stages-main max-w-lg lg:float-right ">
            <h2
              className=" pb-5 sm:text-5xl text-3xl underline font-bold"
              data-aos="fade-right"
            >
              Stages of booking a room
            </h2>
            <ul className="about_stages-main_list">
              <li
                className="grid gap-4  grid-cols-4 item-center my-5"
                data-aos="fade-up"
              >
                <div className="media col-span-1">
                  <img src="/step1.svg" alt="" />
                </div>
                <div className="flex flex-col justify-center col-span-3">
                  <h4 className="font-bold text-lg">Register</h4>
                  <p className="text-sm">
                    Create an account and login to our Hostel Hub portal
                  </p>
                </div>
              </li>
              <li
                className="grid gap-4 grid-cols-4 item-center my-5"
                data-aos="fade-up"
              >
                <div className="media col-span-1">
                  <img src="/step2.svg" alt="" />
                </div>
                <div className="flex flex-col justify-center col-span-3">
                  <h4 className="font-bold text-lg">Choose a room</h4>
                  <p className="text-sm">
                    Browse through all our available rooms and pick one that
                    suits you
                  </p>
                </div>
              </li>
              <li
                className="grid gap-4  grid-cols-4 item-center my-5"
                data-aos="fade-up"
              >
                <div className="media col-span-1">
                  <img src="/step3.svg" alt="" className="" />
                </div>
                <div className="flex flex-col justify-center col-span-3">
                  <h4 className="font-bold text-lg">Make payment</h4>
                  <p className="text-sm">
                    Pay the rent along with a refundable safety deposit fee
                  </p>
                </div>
              </li>
              <li
                className="grid gap-4  grid-cols-4 item-center my-5"
                data-aos="fade-up"
              >
                <div className="media col-span-1">
                  <img src="/step4.svg" alt="" className="" />
                </div>
                <div className="flex flex-col justify-center col-span-3">
                  <h4 className="font-bold text-lg">Enjoy your stay</h4>
                  <p className="text-sm">
                    Go to your selected branch and our receptionist will guide
                    you to your room
                  </p>
                </div>
              </li>
            </ul>
            <div className="my-10" data-aos="fade-up">
              <Link
                className="rounded-lg w-fit p-3 bg-[#235784] text-lg hover:bg-cyan-700"
                href="/dashboard/rooms"
              >
                Book Room
              </Link>
            </div>
          </div>
        </div>
        <div className="col flex items-center mt-5 lg:mt-0 justify-center p-2">
          <img
            className=" object-cover rounded-lg min-w-0 max-w-lg"
            data-src="https://i.ibb.co/PmjFV71/image.png"
            src="https://i.ibb.co/PmjFV71/image.png"
            alt="media"
            data-ll-status="loaded"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingStages;
