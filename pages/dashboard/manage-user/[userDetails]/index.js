import { useRouter } from "next/router";
import Layout from "../../../../Components/Dashboard/Layout";
import { useEffect, useState } from "react";
import Loading from "../../../../Components/Loading/Loading";
import adminCheck from "../../../../Components/Firebase/adminCheck";
import authCheck from "../../../../Components/Firebase/authCheck";
import Link from "next/link";

// export default function UserDetailsPage({}) {
const UserDetailsPage = ({}) => {
  const router = useRouter();
  const id = router.query.userDetails;
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [payments, setPayments] = useState({});
  const [room, setRoom] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .then(
        fetch(`http://localhost:5000/roomsByUid/${id}`)
          .then((res) => res.json())
          .then((data) => setRoom(data))
      )
      .then(
        fetch(`http://localhost:5000/payments/${id}`)
          .then((res) => res.json())
          .then((data) => setPayments(data))
      );
  }, [id]);
  console.log(user, payments, room);

  let bday = new Date(user?.birthDate);
  console.log(bday);
  var bookedOn = new Date(room?.bookedOn);
  var bookedTill = new Date(room?.bookedTill);
  // console.log(bookedOn);
  // console.log(
  //   bookedOn.getFullYear(),
  //   bookedOn.getMonth() + 1,
  //   bookedOn.getDate()
  // );
  return (
    <Layout>
      <div className=" flex flex-wrap gap-2">
        <div className="w-full card ">
          <div className="w-full flex justify-center flex-wrap items-center text-center sm:text-left">
            <div className="w-full sm:w-1/4 flex justify-center flex-col items-center md:border-r-2 border-[#1e2124] py-5">
              <img src={user?.image} height={150} width={150} />
              <h1 className="text-xl py-2">{user.displayName}</h1>
            </div>
            <div className="w-full sm:w-3/4 text-center">
              <h1 className="heading pb-5 text-center mt-10 sm:mt-0">
                BASIC INFORMATION
              </h1>
              <div className="w-full flex flex-wrap">
                <div className="w-1/2 md:w-1/3 p-2">
                  <h4 className="text-sm text-gray-500">EMAIL</h4>
                  <h2 className="text-lg">{user?.email}</h2>
                </div>
                <div className="w-1/2 md:w-1/3 p-2">
                  <h4 className="text-sm text-gray-500">PHONE</h4>
                  <h2 className="text-lg">{user?.phone}</h2>
                </div>
                <div className="w-1/2 md:w-1/3 p-2">
                  <h4 className="text-sm text-gray-500">GENDER</h4>
                  <h2 className="text-lg">
                    {user?.gender ? user.gender : "Unavailable"}
                  </h2>
                </div>
                <div className="w-1/2 md:w-1/3 p-2">
                  <h4 className="text-sm text-gray-500">BIRTHDAY</h4>
                  <h2 className="text-lg">
                    {user?.birthDate ? bday.toDateString() : "Unavailable"}
                  </h2>
                </div>

                <div className="w-1/2 md:w-1/3 p-2">
                  <h4 className="text-sm text-gray-500">PROFESSION</h4>
                  <h2 className="text-lg">
                    {user?.profession ? user.profession : "Unavailable"}
                  </h2>
                </div>
                <div className="w-1/2 md:w-1/3 p-2">
                  <h4 className="text-sm text-gray-500">PERMANET ADDRESS</h4>
                  <h2 className="text-lg">{user?.address}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 w-full flex-wrap md:flex-nowrap">
          <div className="card w-full md:w-1/3">
            <h1 className="heading pb-5 text-center">ROOM INFORMATION</h1>
            {Object.keys(room).length == 0 ? (
              "No room booked"
            ) : (
              <div className="flex flex-col justify-center items-center h-full">
                <div className="flex lg:gap-20 gap-12">
                  <div>
                    <h1 className="text-gray-400">Room Type:</h1>
                    <h1 className="text-gray-400">Branch:</h1>
                    <h1 className="text-gray-400">Room No:</h1>
                    <h1 className="text-gray-400">Rent:</h1>
                    <h1 className="text-green-300">Booked On:</h1>
                    <h1 className="text-red-300">Booked Till:</h1>
                  </div>
                  <div>
                    <h1 className="font-bold">{room?.category}</h1>
                    <h1 className="font-bold">{room?.branch}</h1>
                    <h1 className="font-bold">{room?.roomNo}</h1>
                    <h1 className="font-bold">৳{room?.rent}</h1>
                    <h1 className="font-bold text-green-400">
                      {room?.bookedOn
                        ? `${bookedOn.getDate()}/
                  ${bookedOn.getMonth() + 1}/
                    ${bookedOn.getFullYear()}`
                        : "Room not booked"}
                    </h1>
                    <h1 className="font-bold text-red-400">
                      {room?.bookedTill
                        ? `${bookedTill.getDate()}/
                  ${bookedTill.getMonth() + 1}/
                    ${bookedTill.getFullYear()}`
                        : "Room not booked"}
                    </h1>
                  </div>
                </div>
                <Link
                  href={`/dashboard/manageRoom/rooms/${room._id}`}
                  className="my-3 mx-auto button"
                >
                  View Room
                </Link>
              </div>
            )}
          </div>
          <div className="card w-full md:w-2/3">
            <h1 className="heading pb-5">MEAL INFORMATION</h1>
            <div className="w-full text-center">
              <div className="">
                <h1 className="text-purple-500 text-lg">
                  Selected Meal For Tomorrow
                </h1>
                {!user?.mealPlan ? (
                  "No meal plan selected"
                ) : (
                  <div className="flex gap-2">
                    <div className="w-1/3 bg-[#452b6f]  rounded-xl">
                      <h1 className="">BREAKFAST</h1>

                      {user?.mealPlan[0]?.cost ? (
                        <div className="bg-[#7053aa] rounded-b-lg text-sm h-12">
                          <Link href={"/dashboard/addMeal"} className="w-full">
                            <h1>Package {user.mealPlan[0].mealNo}</h1>
                            <h1>৳{user.mealPlan[0]?.cost}</h1>
                          </Link>
                        </div>
                      ) : (
                        <div className="bg-[#7053aa] rounded-b-lg h-12 text-sm">
                          NOT SELECTED
                        </div>
                      )}
                    </div>
                    <div className="w-1/3 bg-[#452b6f]  rounded-xl">
                      <h1 className="">LUNCH</h1>

                      {user?.mealPlan[1]?.cost ? (
                        <div className="bg-[#7053aa] rounded-b-lg text-sm h-12">
                          <Link href={"/dashboard/addMeal"} className="w-full">
                            <h1>Package {user.mealPlan[1].mealNo}</h1>
                            <h1>৳{user.mealPlan[1]?.cost}</h1>
                          </Link>
                        </div>
                      ) : (
                        <div className="bg-[#7053aa] rounded-b-lg h-12 text-sm">
                          NOT SELECTED
                        </div>
                      )}
                    </div>
                    <div className="w-1/3 bg-[#452b6f]  rounded-xl">
                      <h1 className="">DINNER</h1>

                      {user?.mealPlan[2]?.cost ? (
                        <div className="bg-[#7053aa] rounded-b-lg text-sm h-12">
                          <Link href={"/dashboard/addMeal"} className="w-full">
                            <h1>Package {user.mealPlan[2].mealNo}</h1>
                            <h1>৳{user.mealPlan[2]?.cost}</h1>
                          </Link>
                        </div>
                      ) : (
                        <div className="bg-[#7053aa] rounded-b-lg h-12 text-sm">
                          NOT SELECTED
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="pt-8">
                <h1 className="text-red-500 text-lg">
                  Confirmed Meal For Today
                </h1>
                {!user?.confirmedMealPlan ? (
                  "No meal plan confirmed"
                ) : (
                  <div className="flex gap-2">
                    <div className="w-1/3 bg-[#741a1a]  rounded-xl">
                      <h1 className="">BREAKFAST</h1>

                      {user?.confirmedMealPlan[0]?.cost ? (
                        <div className="bg-[#9f4646] rounded-b-lg text-sm h-12">
                          <Link href={"/dashboard/addMeal"} className="w-full">
                            <h1>Package {user.confirmedMealPlan[0].mealNo}</h1>
                            <h1>৳{user.confirmedMealPlan[0]?.cost}</h1>
                          </Link>
                        </div>
                      ) : (
                        <div className="bg-[#9f4646] rounded-b-lg h-12 text-sm">
                          NOT SELECTED
                        </div>
                      )}
                    </div>
                    <div className="w-1/3 bg-[#741a1a]  rounded-xl">
                      <h1 className="">LUNCH</h1>

                      {user?.confirmedMealPlan[1]?.cost ? (
                        <div className="bg-[#9f4646] rounded-b-lg text-sm h-12">
                          <Link href={"/dashboard/addMeal"} className="w-full">
                            <h1>Package {user.confirmedMealPlan[1].mealNo}</h1>
                            <h1>৳{user.confirmedMealPlan[1]?.cost}</h1>
                          </Link>
                        </div>
                      ) : (
                        <div className="bg-[#9f4646] rounded-b-lg h-12 text-sm">
                          NOT SELECTED
                        </div>
                      )}
                    </div>
                    <div className="w-1/3 bg-[#741a1a]  rounded-xl">
                      <h1 className="">DINNER</h1>

                      {user?.confirmedMealPlan[2]?.cost ? (
                        <div className="bg-[#9f4646] rounded-b-lg text-sm h-12">
                          <Link href={"/dashboard/addMeal"} className="w-full">
                            <h1>Package {user.confirmedMealPlan[2].mealNo}</h1>
                            <h1>৳{user.confirmedMealPlan[2]?.cost}</h1>
                          </Link>
                        </div>
                      ) : (
                        <div className="bg-[#9f4646] rounded-b-lg h-12 text-sm">
                          NOT SELECTED
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="card w-full">
          <h1 className="heading mb-5">DUES AND PAYMENTS</h1>
          <div className="w-full grid grid-cols-12 gap-2">
            <div className="col-span-12 md:col-span-4 flex flex-row md:flex-col gap-2">
              <div className="text-left w-1/2 md:w-full bg-neutral-900 rounded-md p-4">
                <h1 className="mb-7  text-lg text-red-500">DUES</h1>
                <h1 className="text-4xl font-bold text-red-300">
                  ৳{" "}
                  {parseInt(payments?.due) + parseInt(payments?.rent)
                    ? parseInt(payments?.due) + parseInt(payments?.rent)
                    : 0}
                </h1>
                <p className="text-sm">total pending payment</p>
              </div>
              <div className="w-1/2 md:w-full text-left bg-neutral-900 rounded-md p-4">
                <h1 className="mb-7  text-lg text-green-500">
                  SECURITY DEPOSIT
                </h1>
                <h1 className="text-4xl font-bold text-green-300">
                  ৳ {payments?.advance ? payments?.advance : 0}
                </h1>
                <p className="text-sm">paid as advance</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 ">
              <div className=" h-[300px] overflow-auto">
                <table className="w-full table-auto rounded-lg border-collapse">
                  <thead className=" bg-neutral-900 sticky top-0 w-full">
                    <tr className="w-full">
                      <th className="p-4 text-center font-medium text-white uppercase tracking-wider w-1/3">
                        Time
                      </th>
                      <th className="p-4 text-center  font-medium text-white uppercase tracking-wider  w-1/3">
                        TYPE
                      </th>
                      <th className="p-4 text-center font-medium text-white uppercase  tracking-wider w-1/3">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" bg-stone-900 w-full">
                    {payments?.paymentHistory
                      ?.toReversed()
                      .map((singlePay, i) => {
                        // console.log(singlePay);
                        const payDate = new Date(singlePay?.date);
                        const payTime = new Date(singlePay?.time);
                        return (
                          <tr
                            className={`${!(i % 2) && "bg-[#36393e82]"}`}
                            key={i}
                          >
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-white text-center">
                              {payDate.toDateString()} <br />
                              {singlePay?.time}
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-white text-center">
                              {singlePay?.type}
                            </td>
                            <td className="p-4  whitespace-nowrap text-sm font-semibold text-white text-center">
                              {singlePay?.type && singlePay.type == "Payment"
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
        </div>
      </div>
    </Layout>
  );
};

export default authCheck(adminCheck(UserDetailsPage));
