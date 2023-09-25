import { useEffect, useState } from "react";
import Layout from "../../../Components/Dashboard/Layout";
import adminCheck from "../../../Components/Firebase/adminCheck";
import authCheck from "../../../Components/Firebase/authCheck";

const MealOrders = () => {
  const [orders, setOrders] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://hostel-hub-yg4y.onrender.com/meals")
      .then((res) => res.json())
      .then((data) => setOrders(data));

    fetch("https://hostel-hub-yg4y.onrender.com/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  let breakfast = [[], [], [], [], [], [], [], [], [], []];
  let lunch = [[], [], [], [], [], [], [], [], [], []];
  let dinner = [[], [], [], [], [], [], [], [], [], []];

  const today = new Date();

  userData.map((user) => {
    user?.room?._id &&
      user?.confirmedMealPlan &&
      user?.confirmedMealPlan[0]?._id &&
      breakfast[user.confirmedMealPlan[0].mealNo].push({
        displayName: user.displayName,
        phone: user.phone,
        roomNo: user.room?.roomNo,
        branch: user.room?.branch,
      });

    user?.room?._id &&
      user?.confirmedMealPlan &&
      user?.confirmedMealPlan[1]?._id &&
      lunch[user.confirmedMealPlan[1].mealNo].push({
        displayName: user.displayName,
        phone: user.phone,
        roomNo: user.room?.roomNo,
        branch: user.room?.branch,
      });

    user?.room?._id &&
      user?.confirmedMealPlan &&
      user?.confirmedMealPlan[2]?._id &&
      dinner[user.confirmedMealPlan[0].mealNo].push({
        displayName: user.displayName,
        phone: user.phone,
        roomNo: user.room?.roomNo,
        branch: user.room?.branch,
      });
  });

  console.log(breakfast, lunch, dinner);

  return (
    <Layout>
      <div className="min-h-[80vh]">
        <h1 className="text-3xl text-center mt-4 ">Meal Orders</h1>
        <h1 className=" text-center mb-4 text-gray-300">
          {today.toDateString()}
        </h1>

        <div className="w-full ">
          <div className="w-full my-5 overflow-x-auto bg-neutral-900 p-3 rounded-lg">
            <h1 className="text-center  rounded-none w-full text-xl mb-2 font-bold">
              BREAKFAST
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {breakfast.map((item, index) => {
                return (
                  item.length > 0 && (
                    <div
                      className="card p-0 border-2 border-gray-500/30 "
                      key={index}
                    >
                      <div className="bg-zinc-900 w-full rounded-t-lg p-2 text-center">
                        <h1 className="font-bold">Breakfast #{index}</h1>
                        <p className="text-sm ">Total Orders: {item?.length}</p>
                      </div>

                      {item.map((e, i) => {
                        return (
                          <div
                            className={`grid grid-cols-3 text-center ${
                              i % 2 == 0 && "bg-zinc-600/20"
                            } w-full gap-2
                          `}
                            key={i}
                          >
                            <div className="flex justify-center items-center flex-col p-1">
                              <h1 className="font-semibold">
                                {e?.displayName}
                              </h1>
                              <h1 className="text-gray-400 text-sm">
                                {e?.phone}
                              </h1>
                            </div>
                            <div className="flex flex-col justify-center items-center p-1">
                              <h1>{e?.branch}</h1>
                            </div>
                            <div className="flex justify-center items-center p-1">
                              <h1 className="text-sm">
                                Room <br />#{e?.roomNo}
                              </h1>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )
                );
              })}
            </div>
          </div>

          <div className="w-full my-5 overflow-x-auto bg-neutral-900 p-3 rounded-lg">
            <h1 className="text-center  rounded-none w-full text-xl mb-2 font-bold">
              LUNCH
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {lunch.map((item, index) => {
                return (
                  item.length > 0 && (
                    <div
                      className="card p-0 border-2 border-gray-500/30 "
                      key={index}
                    >
                      <div className="bg-zinc-900 w-full rounded-t-lg p-2 text-center">
                        <h1 className="font-bold">Lunch #{index}</h1>
                        <p className="text-sm ">Total Orders: {item?.length}</p>
                      </div>

                      {item.map((e, i) => {
                        return (
                          <div
                            className={`grid grid-cols-3 text-center ${
                              i % 2 == 0 && "bg-zinc-600/20"
                            } w-full gap-2
                          `}
                            key={i}
                          >
                            <div className="flex justify-center items-center flex-col p-1">
                              <h1 className="font-semibold">
                                {e?.displayName}
                              </h1>
                              <h1 className="text-gray-400 text-sm">
                                {e?.phone}
                              </h1>
                            </div>
                            <div className="flex flex-col justify-center items-center p-1">
                              <h1>{e?.branch}</h1>
                            </div>
                            <div className="flex justify-center items-center p-1">
                              <h1 className="text-sm">
                                Room <br />#{e?.roomNo}
                              </h1>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )
                );
              })}
            </div>
          </div>

          <div className="w-full my-5 overflow-x-auto bg-neutral-900 p-3 rounded-lg">
            <h1 className="text-center  rounded-none w-full text-xl font-bold mb-2">
              DINNER
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {dinner.map((item, index) => {
                return (
                  item.length > 0 && (
                    <div
                      className="card p-0 border-2 border-gray-500/30 "
                      key={index}
                    >
                      <div className="bg-zinc-900 w-full rounded-t-lg p-2 text-center">
                        <h1 className="font-bold">Dinner #{index}</h1>
                        <p className="text-sm ">Total Orders: {item?.length}</p>
                      </div>

                      {item.map((e, i) => {
                        return (
                          <div
                            className={`grid grid-cols-3 text-center ${
                              i % 2 == 0 && "bg-zinc-600/20"
                            } w-full gap-2
                          `}
                            key={i}
                          >
                            <div className="flex justify-center items-center flex-col p-1">
                              <h1 className="font-semibold">
                                {e?.displayName}
                              </h1>
                              <h1 className="text-gray-400 text-sm">
                                {e?.phone}
                              </h1>
                            </div>
                            <div className="flex flex-col justify-center items-center p-1">
                              <h1>{e?.branch}</h1>
                            </div>
                            <div className="flex justify-center items-center p-1">
                              <h1 className="text-sm">
                                Room <br />#{e?.roomNo}
                              </h1>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )
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
