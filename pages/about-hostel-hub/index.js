import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

const HostelHub = () => {
  const hostelData = [
    {
      title: "Effortless Booking System",
      description:
        "Simplify the booking process with our intuitive reservation system. Residents can easily make book rooms and meals, and you can manage them hassle-free.",
    },
    {
      title: "Real-Time Insights",
      description:
        "Gain valuable insights with our real-time dashboard. Monitor occupancy, dues, meal selections and other critical metrics to make data-driven decisions.",
    },
    {
      title: "Secure Payments",
      description:
        "Ensure secure transactions with our robust payment processing system. Accept payments from multiple gateways, providing convenience to the residents.",
    },
    {
      title: "Important Notices",
      description:
        "Convey important messages globally to every resident on the system.",
    },
    {
      title: "Inventory Management",
      description:
        "Effortlessly manage your inventory of beds, rooms, and meals. Know what's available at a glance and avoid overbooking.",
    },
    {
      title: "Customizable",
      description:
        "Customize Hostel Hub to fit your unique needs. Tailor it to match your hostel's branding and specific requirements.",
    },
    {
      title: "System Misuse Protection",
      description:
        "Our system has strong satefy measures in place that prevents you from accidentally modifying existing data about residents and inventories.",
    },
    {
      title: "Overdue Protection",
      description:
        "Our system reminds residents to pay their rent in time. If rent is overdue, you will be notified and user won't have access to meal facilities anymore.",
    },
    {
      title: "Support and Training",
      description:
        "Access dedicated customer support for any questions or assistance. Benefit from training resources to maximize the effectiveness of Hostel Hub.",
    },
    {
      title: "Accessibility Anywhere",
      description:
        "Enjoy the flexibility to access Hostel Hub from anywhere with an internet connection. Manage your hostel on the go, ensuring you're always in control.",
    },
  ];
  return (
    <div className="hostel-hub min-h-screen bg-gray-100">
      <div className="w-full md:w-3/4 lg:w-3/5 h-full mx-auto  ">
        <div className="h-screen snap-start flex flex-col  items-center p-10">
          <div className="h-20">
            <img src="/logo2.png" alt="" className="h-full" />
          </div>
          <div className="m-auto text-center">
            <h1 className="text-6xl">Welcome to Hostel Hub</h1>
            <p>Your Premier Solution for Hostel Management</p>
          </div>
          <button className="bg-black font-semibold text-white p-3 border-2 border-transparent rounded-lg hover:text-black hover:bg-white hover:border-black">
            Book a Demo
          </button>
          <div className="mt-10 animate-bounce">
            <FaAngleDoubleDown />
          </div>
        </div>
        <div className="min-h-screen snap-start flex flex-col  items-center p-10">
          <h1 className="text-4xl font-bold my-10 underline">FEATURES</h1>
          <div className="flex flex-col">
            {hostelData.map((e, i) => {
              return (
                <div
                  className="flex odd:flex-row-reverse my-10 gap-10 w-full "
                  key={i}
                >
                  <div className=" w-1/2">
                    <h1
                      className={`font-semibold text-3xl ${
                        i % 2 == 1 && "text-right"
                      }`}
                    >
                      {e.title}
                    </h1>
                  </div>
                  <div className="w-1/2 ">
                    <h1 className={` ${i % 2 == 0 && "text-right"}`}>
                      {e.description}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="snap-start flex flex-col  items-center p-10">
          <h1 className="text-4xl font-bold my-10 underline">TESTIMONIAL</h1>
          <div>
            <div className="text-center">
              <h1 className="text-xl font-semibold">One Revolutionary Tool</h1>
              <p className="text-gray-500">
                <span className="text-3xl"> " </span>
                Hostel Hub has revolutionized the way we manage our hostel.
                Their user-friendly platform has made bookings a breeze, and the
                real-time insights have saved us countless hours of manual
                labor. It's a game-changer for any hostel owner!
                <span className="text-3xl leading-3"> " </span>
              </p>
              <img
                src="https://i.ibb.co/Xy39ns9/super2.png"
                alt=""
                width={200}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-gray-200 py-5">
        <div className="flex flex-row justify-center items-center gap-10">
          <div className="flex flex-col">
            <div className="text-center">
              <h1 className="text-2xl">EMAIL</h1>
            </div>
            <div>
              <h1>support@hostel-hub.com</h1>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-center">
              <h1 className="text-2xl">PHONE</h1>
            </div>
            <div>
              <h1>+880 1765 249768</h1>
            </div>
          </div>
        </div>
        <h1 className="pt-5">Hostel Hub © 2023 All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default HostelHub;
