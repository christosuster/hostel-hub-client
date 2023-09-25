/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import DashboardItem from "./Dashboard/Profile/DashboardItem";
import useAuth from "./Firebase/useAuth";
import Link from "next/link";
import { useRouter } from "next/router";
const UserInformation = () => {
  const { userInfo } = useAuth();

  const [bookedOn, setBookedOn] = useState("");
  const [bookedTill, setBookedTill] = useState("");
  const [lastDay, setLastDay] = useState();
  const [lastMonth, setLastMonth] = useState();
  const [user, setUser] = useState({});
  const [allMeals, setAllMeals] = useState([]);
  const [currentUserPayment, setCurrentUserPayment] = useState({});
  const [notices, setNotices] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`https://hostel-hub-yg4y.onrender.com/users-data/${userInfo.email}`)
      .then((res) => res.json())
      .then((data) => setUser(data));

    // console.log(user);

    const now = new Date(user?.bookedTill);
    now.setMonth(now.getMonth() - 1);
    now.setDate(now.getDate() + 7);
    setLastDay(now);

    const month = new Date(user?.bookedTill);
    setLastMonth(month);

    const date1 = new Date(userInfo?.bookedOn);
    setBookedOn(date1.toDateString());

    const date2 = new Date(userInfo?.bookedTill);
    setBookedTill(date2.toDateString());

    fetch("https://hostel-hub-yg4y.onrender.com/notices")
      .then((res) => res.json())
      .then((data) => setNotices(data));

    fetch(`https://hostel-hub-yg4y.onrender.com/payments/${userInfo._id}`)
      .then((res) => res.json())
      .then((data) => setCurrentUserPayment(data));

    const noticeList = notices?.notice?.split("\n");
  }, [userInfo?.room, userInfo?.email, userInfo?.bookedTill, userInfo]);
  // console.log(lastDay);
  let total = 0;

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  // console.log(today);
  // console.log(today.toString());

  const cancelRoom = () => {
    swal({
      title: "Are you sure?",
      text: "Once canceled you will lose access to your room and meal plan if you select OK!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch("https://hostel-hub-yg4y.onrender.com/cancelRoom", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            roomId: userInfo.room._id,
            currentUser: userInfo._id,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              swal("Room has been removed!", {
                icon: "success",
              });
            }
          });
      }
    });
  };

  let idx1 = 0;
  let idx2 = 0;
  let idx3 = 0;

  const p = parseInt(((5000 - parseInt(currentUserPayment?.due)) / 5000) * 100);
  return (
    <div className="grid gap-3 grid-cols-12 ">
      <div className="px-5 card w-full flex justify-between col-span-12 sm:col-span-7">
        <h1 className="text-3xl underline mb-3">Profile</h1>
        <div className="flex flex-row items-center justify-center w-full">
          <div className="">
            <img
              src={userInfo.image}
              className="aspect-square object-cover rounded-full max-w-[200px] w-3/4 m-auto"
              alt=""
            />
          </div>
          <div className="my-5 flex flex-row justify-center">
            <div className="">
              {userInfo.displayName && (
                <div className="flex items-center flex-col my-4">
                  <h1 className="text-xs text-gray-500">NAME</h1>
                  <h1 className="text-xl leading-5">{userInfo.displayName}</h1>
                </div>
              )}

              {userInfo.phone && (
                <div className="flex items-center flex-col my-4">
                  <h1 className="text-xs text-gray-500">PHONE</h1>
                  <h1 className="text-xl leading-5">{userInfo.phone}</h1>
                </div>
              )}

              {userInfo.email && (
                <div className="flex items-center flex-col my-4">
                  <h1 className="text-xs text-gray-500">EMAIL</h1>
                  <h1 className="text-xl leading-5">{userInfo.email}</h1>
                </div>
              )}
            </div>
          </div>
        </div>
        <Link href="/dashboard/updateProfile">
          <button className="button my-3">Edit Profile</button>
        </Link>
      </div>

      <div className="px-5 card w-full flex col-span-12 sm:col-span-5">
        <h1 className="text-3xl underline mb-3">Notices</h1>
        <div className="overflow-y-auto h-[212px] w-full">
          {notices?.map((note) => {
            const noteDate = new Date(note?.date);
            return (
              <div
                key={note?._id}
                className="p-2 bg-[#36393e82] shadow-lg rounded-lg my-2"
              >
                <div className="w-full grid grid-cols-5 gap-4">
                  <h1 className="col-span-3">{note?.title}</h1>
                  <h1 className="col-span-2 text-sm text-right">
                    {noteDate?.toDateString()} <br />
                    {note?.time}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <Link href="/dashboard/notice">
          <button className="button my-3">View All</button>
        </Link>
      </div>

      <div className="col-span-12 md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-3">
        <div className="card w-full col-span-2 md:col-span-1 flex justify-between">
          <div className="h-full flex flex-col items-center w-full">
            <h1 className="text-3xl underline mb-3">Meal Plan</h1>

            <h1 className="font-bold text-indigo-400 leading-5">
              For Tomorrow
            </h1>
            <h1 className="mb-3 font-bold text-indigo-400 leading-5">
              {tomorrow.toDateString()}
              {/* {tomorrow.toString()} */}
            </h1>
            <div className="overflow-x-auto w-full">
              <table className="bg-slate-800 dashboard-meal w-full min-h-[200px]">
                <thead className="bg-slate-900">
                  <tr>
                    <th className="">Breakfast</th>
                    <th>Lunch</th>
                    <th>Dinner</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className="text-center ">
                    <td className="text-xs whitespace-pre-line ">
                      {user?.mealPlan && user?.mealPlan[0]?.about}
                    </td>
                    <td className="text-xs whitespace-pre-line">
                      {user?.mealPlan && user?.mealPlan[1]?.about}
                    </td>
                    <td className="text-xs whitespace-pre-line">
                      {user?.mealPlan && user?.mealPlan[2]?.about}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <Link href={"/dashboard/meal"}>
            <button className="button my-3">View Meal Plan</button>
          </Link>
        </div>
        <div className="card w-full col-span-2 md:col-span-1 flex justify-between">
          <h1 className="text-3xl underline mb-3">Current Room</h1>
          {userInfo?.room?._id && (
            <>
              <div className="flex flex-col items-center">
                <DashboardItem
                  first={"Room No"}
                  second={userInfo?.room?.roomNo}
                />
                <DashboardItem
                  first={"Room Type"}
                  second={
                    userInfo?.room?.category === "Business"
                      ? "Private"
                      : "Shared"
                  }
                />
                <DashboardItem
                  first={"Branch"}
                  second={userInfo?.room?.branch}
                />

                <DashboardItem
                  color={"teal"}
                  first={"From"}
                  second={bookedOn}
                />
                <DashboardItem
                  color={"red"}
                  first={"Till"}
                  second={bookedTill}
                />
                {/* <h1 className=" mt-5 text-xl text-indigo-500">
                  {bookedOn} - {bookedTill}
                </h1> */}
              </div>
              <div>
                <Link href={`/dashboard/rooms/${userInfo?.room?._id}`}>
                  <button className="button my-3 mx-2">View Room</button>
                </Link>
                <button
                  className="button my-3 mx-2 border-red-500 text-red-500 hover:bg-red-500"
                  onClick={() => cancelRoom()}
                >
                  Cancel Room
                </button>
              </div>
            </>
          )}{" "}
          {!userInfo?.room?._id && (
            <div className="h-full flex justify-center items-center">
              <h1 className="text-2xl">NO ROOM SELECTED!</h1>
            </div>
          )}
          {!userInfo?.room?._id && (
            <Link href={"/dashboard/rooms"}>
              <button className="button my-3">View Rooms</button>
            </Link>
          )}
        </div>
      </div>
      <div className="card w-full col-span-12 md:col-span-7 flex ">
        <h1 className="text-3xl text-center underline mb-5">Payment & Dues</h1>
        <div className="w-full my-3 grid grid-cols-3 gap-2">
          <div className="flex flex-col justify-end col-span-1 p-5  mb-5  bg-orange-700 rounded-lg">
            <h1 className="text-2xl py-2">Total Dues</h1>
            <h1 className="text-4xl font-bold ">
              ৳ {currentUserPayment?.due ? currentUserPayment?.due : 0}
            </h1>
          </div>
          <div className="flex flex-col justify-end col-span-1 p-5  mb-5 bg-teal-700 rounded-lg">
            <h1 className="text-2xl py-2">Room Rent</h1>
            <h1 className="text-4xl font-bold ">
              ৳ {user?.room?.cost ? user?.room?.cost : 0}
            </h1>
          </div>
          <div className="flex flex-col justify-end col-span-1 p-5 mb-5 bg-green-700 rounded-lg">
            <h1 className="text-2xl py-2">Security Deposit</h1>
            <h1 className="text-4xl font-bold ">
              ৳ {currentUserPayment?.advance ? currentUserPayment?.advance : 0}
            </h1>
          </div>
        </div>
        <div className="mb-8 flex flex-col items-center ">
          {currentUserPayment?.due &&
          parseInt(currentUserPayment?.due) >=
            parseInt(parseInt(currentUserPayment?.advance)) ? (
            <h1 className="text-2xl animate-pulse font-bold text-red-500">
              Pay rent by {lastDay?.toDateString()}
            </h1>
          ) : (
            ""
          )}

          {currentUserPayment?.due &&
          parseInt(currentUserPayment?.due) <
            parseInt(parseInt(currentUserPayment?.advance)) ? (
            <h1 className="text-2xl animate-pulse font-bold text-red-500">
              Pay rent by {lastDay?.toDateString()}
            </h1>
          ) : (
            ""
          )}

          <Link className="button block my-4" href={"/dashboard/payment"}>
            Make Payment
          </Link>
        </div>
        <div className="w-full">
          {currentUserPayment && (
            <div className="overflow-x-auto mt-2 mb-4 h-[300px] rounded-lg bg-neutral-800 ">
              <div className="align-middle  w-full">
                <div className="shadow overflow-hidden  w-full ">
                  <table className="text-center w-full divide-y divide-gray-200 text-white ">
                    <thead className=" bg-neutral-900 rounded-b-none">
                      <tr className="rounded-b-none">
                        <th
                          scope="col"
                          className="p-4 text-center  font-medium text-white uppercase tracking-wider"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-center  font-medium text-white uppercase tracking-wider"
                        >
                          TYPE
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-center font-medium text-white uppercase tracking-wider"
                        >
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className=" bg-stone-900 overflow-y-scroll">
                      {currentUserPayment?.paymentHistory
                        ?.toReversed()
                        .map((singlePay, i) => {
                          // console.log(singlePay);
                          const payDate = new Date(singlePay?.date);
                          return (
                            <tr
                              className={`${!(i % 2) && "bg-[#36393e82]"}`}
                              key={i}
                            >
                              <td className="p-4 whitespace-nowrap text-sm font-normal text-white">
                                {payDate.toDateString()}
                                <br />
                                {singlePay?.time}
                              </td>
                              <td className="p-4 whitespace-nowrap text-sm font-normal text-white">
                                {singlePay?.type}
                              </td>
                              <td className="p-4 text-center whitespace-nowrap text-sm font-semibold text-white">
                                {singlePay?.type &&
                                (singlePay.type == "Payment" ||
                                  singlePay.type == "Room Booking")
                                  ? `( ৳${singlePay?.amount} )`
                                  : `৳${singlePay?.amount}`}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
