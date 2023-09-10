import { useEffect, useState } from "react";
import Layout from "../../../Components/Dashboard/Layout";
import adminCheck from "../../../Components/Firebase/adminCheck";
import authCheck from "../../../Components/Firebase/authCheck";

const MealOrders = () => {
  const [orders, setOrders] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/meals")
      .then((res) => res.json())
      .then((data) => setOrders(data));

    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  const breakfast = orders.filter((e) => {
    return e.time == "Breakfast";
  });

  const lunch = orders.filter((e) => {
    return e.time == "Lunch";
  });

  const dinner = orders.filter((e) => {
    return e.time == "Dinner";
  });

  const findUser = (id) => {
    let data = {};
    userData.forEach((user) => {
      if (user._id == id) {
        data = user;
      }
    });
    return data;
  };
  let idx1 = 0;
  let idx2 = 0;
  let idx3 = 0;
  return (
    <Layout>
      <div className="min-h-[80vh]">
        <h1 className="text-3xl text-center my-4 ">Meal Orders</h1>

        <div className="w-full ">
          <div className="w-full my-5 overflow-x-auto">
            <h1 className="text-center  rounded-none w-full text-xl my-2">
              BREAKFAST
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {breakfast.map((item) => {
                idx1++;
                return (
                  <div className="card p-0 border-2 border-gray-500/30  ">
                    <div className="bg-zinc-900 w-full rounded-t-lg p-2 text-center">
                      <h1 className="font-bold">Breakfast #{idx1}</h1>
                      <p className="text-sm ">
                        Total Orders: {item?.bookedBy?.length}
                      </p>
                    </div>

                    {item.bookedBy?.map((e, i) => {
                      const data = findUser(e.uid);

                      const date = new Date(e.mealDay);
                      console.log(e);
                      return (
                        <div
                          className={`grid grid-cols-3 text-center ${
                            i % 2 == 0 && "bg-zinc-600/20"
                          } w-full gap-2
                          `}
                        >
                          <div className="flex justify-center items-center flex-col p-1">
                            <h1 className="font-semibold">
                              {data?.displayName}
                            </h1>
                            <h1 className="text-gray-400 text-sm">
                              {data?.phone}
                            </h1>
                          </div>
                          <div className="flex flex-col justify-center items-center p-1">
                            <h1>{data?.room?.branch}</h1>
                            <h1 className="text-sm">
                              Room #{data?.room?.roomNo}
                            </h1>
                          </div>
                          <div className="flex justify-center items-center p-1">
                            <h1 className="text-sm text-gray-400">
                              {date.toDateString()}
                            </h1>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" w-full my-5 overflow-x-auto">
            <h1 className="text-center  rounded-none w-full text-xl my-2">
              LUNCH
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {lunch.map((item) => {
                idx2++;
                return (
                  <div className="card p-0 border-2 border-gray-500/30">
                    <div className="bg-zinc-900 w-full rounded-t-lg p-2 text-center">
                      <h1 className="font-bold">Lunch #{idx2}</h1>
                      <p className="text-sm ">
                        Total Orders: {item?.bookedBy?.length}
                      </p>
                    </div>

                    {item.bookedBy?.map((e, i) => {
                      const data = findUser(e.uid);

                      const date = new Date(e.mealDay);
                      console.log(e);
                      return (
                        <div
                          className={`grid grid-cols-3 text-center ${
                            i % 2 == 0 && "bg-zinc-600/20"
                          } w-full gap-2
                          `}
                        >
                          <div className="flex justify-center items-center flex-col p-1">
                            <h1 className="font-semibold">
                              {data?.displayName}
                            </h1>
                            <h1 className="text-gray-400 text-sm">
                              {data?.phone}
                            </h1>
                          </div>
                          <div className="flex flex-col justify-center items-center p-1">
                            <h1>{data?.room?.branch}</h1>
                            <h1 className="text-sm">
                              Room #{data?.room?.roomNo}
                            </h1>
                          </div>
                          <div className="flex justify-center items-center p-1">
                            <h1 className="text-sm text-gray-400">
                              {date.toDateString()}
                            </h1>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" w-full my-5 overflow-x-auto">
            <h1 className="text-center  rounded-none w-full text-xl my-2">
              DINNER
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {breakfast.map((item) => {
                idx3++;
                return (
                  <div className="card p-0 border-2 border-gray-500/30">
                    <div className="bg-zinc-900 w-full rounded-t-lg p-2 text-center">
                      <h1 className="font-bold">Dinner #{idx3}</h1>
                      <p className="text-sm ">
                        Total Orders: {item?.bookedBy?.length}
                      </p>
                    </div>

                    {item.bookedBy?.map((e, i) => {
                      const data = findUser(e.uid);

                      const date = new Date(e.mealDay);
                      console.log(e);
                      return (
                        <div
                          className={`grid grid-cols-3 text-center ${
                            i % 2 == 0 && "bg-zinc-600/20"
                          } w-full gap-2
                          `}
                        >
                          <div className="flex justify-center items-center flex-col p-1">
                            <h1 className="font-semibold">
                              {data?.displayName}
                            </h1>
                            <h1 className="text-gray-400 text-sm">
                              {data?.phone}
                            </h1>
                          </div>
                          <div className="flex flex-col justify-center items-center p-1">
                            <h1>{data?.room?.branch}</h1>
                            <h1 className="text-sm">
                              Room #{data?.room?.roomNo}
                            </h1>
                          </div>
                          <div className="flex justify-center items-center p-1">
                            <h1 className="text-sm text-gray-400">
                              {date.toDateString()}
                            </h1>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default authCheck(adminCheck(MealOrders));
