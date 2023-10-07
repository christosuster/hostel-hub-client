import { useEffect, useState } from "react";
import MainLayout from "../../../Components/MainLayout/MainLayout";
import Meal from "../../../Components/Meal/Meal";
import useAuth from "../../../Components/Firebase/useAuth";
import Layout from "../../../Components/Dashboard/Layout";
import { useRouter } from "next/router";
import Loading from "../../../Components/Shared/Loading/Loading";
import authCheck from "../../../Components/Firebase/authCheck";
import { RiInformationLine } from "react-icons/ri";
import { Tooltip } from "react-tooltip";

const Meals = () => {
  const [breakfast, setBreakfast] = useState({ price: "0" });
  const [lunch, setLunch] = useState({ price: "0" });
  const [dinner, setDinner] = useState({ price: "0" });
  const [mealData, setMealData] = useState([]);
  const [payInfo, setPayInfo] = useState({});
  const { userInfo } = useAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [lastDay, setLastDay] = useState();

  const router = useRouter();
  useEffect(() => {
    fetch("https://hostel-hub-yg4y.onrender.com/meals")
      .then((res) => res.json())
      .then((data) => setMealData(data));

    fetch(`https://hostel-hub-yg4y.onrender.com/users-data/${userInfo?.email}`)
      .then((res) => res.json())
      .then((data) => setUser(data));

    fetch(`https://hostel-hub-yg4y.onrender.com/payments/${userInfo?._id}`)
      .then((res) => res.json())
      .then((data) => setPayInfo(data));

    const now = new Date(user?.bookedTill);
    now.setMonth(now.getMonth() - 1);
    now.setDate(now.getDate() + 10);
    setLastDay(now);

    mealData.map((meal) => {
      if (meal.time === "Breakfast") {
        if (meal.bookedBy.some((element) => element.uid === userInfo?._id)) {
          setBreakfast({
            id: meal._id,
            price: meal.cost,
            itemPack: meal.mealNo,
            type: meal.time,
          });
        }
      }

      if (meal.time === "Lunch") {
        if (meal.bookedBy.some((element) => element.uid === userInfo?._id)) {
          setLunch({
            id: meal._id,
            price: meal.cost,
            itemPack: meal.mealNo,
            type: meal.time,
          });
        }
      }

      if (meal.time === "Dinner") {
        if (meal.bookedBy.some((element) => element.uid === userInfo?._id)) {
          setDinner({
            id: meal._id,
            price: meal.cost,
            itemPack: meal.mealNo,
            type: meal.time,
          });
        }
      }
    });

    const today = new Date();
    const todayDate = today.toDateString();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const tomorrowDate = tomorrow.toDateString();
    // console.log(userInfo);
  }, [userInfo?.email, userInfo, userInfo?.bookedTill, user?.bookedTill]);
  // console.log(lunch);

  console.log(user);

  const handleClick = (id, type, itemPack, price) => {
    if (type === "Breakfast") {
      setBreakfast({ id, price, itemPack, type });
    }
    if (type === "Lunch") {
      setLunch({ id, price, itemPack, type });
    }
    if (type === "Dinner") {
      setDinner({ id, price, itemPack, type });
    }
  };

  const clearMealPlan = () => {
    setBreakfast({ price: "0" });
    setLunch({ price: "0" });
    setDinner({ price: "0" });
  };

  const confimrMealPlan = () => {
    const nowTime = new Date();
    if (userInfo) {
      if (Object.keys(userInfo.room).length == 0 || userInfo.room == "") {
        swal("You need to book a room first to be able to book meals!", {
          icon: "error",
        });
      } else {
        if (
          parseInt(payInfo?.advance) > parseInt(payInfo?.due) ||
          nowTime.getTime() < lastDay.getTime()
        ) {
          setIsLoading(true);
          fetch("https://hostel-hub-yg4y.onrender.com/meals", {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              breakfast,
              lunch,
              dinner,
              currentUser: userInfo._id,
            }),
          })
            .then((res) => res.json())
            .then(() => setIsLoading(false));

          swal("Order Placed!", {
            icon: "success",
          });
          // router.replace("/dashboard");
        } else {
          swal("Pay your rent to be able to book meals!", {
            icon: "error",
          });
        }
      }
    } else {
      swal("User not found. Please refresh the page and try again.", {
        icon: "error",
      });
    }
  };

  let idx1 = 0;
  let idx2 = 0;
  let idx3 = 0;

  return (
    <Layout>
      {!mealData && <Loading></Loading>}
      {mealData && (
        <div className="pb-10">
          <div className="relative h-40 bg-fixed bg-[url('https://i.ibb.co/F0WC8Rv/image.png')] bg-no-repeat bg-cover bg-center ">
            <div className="bg-gray-800 h-full w-full opacity-80 "></div>
            <h1 className="absolute left-1/2 top-1/2 text-4xl font-bold text-white -translate-x-1/2 -translate-y-1/2">
              Meal Plan
            </h1>
          </div>
          <div className="h-full card flex flex-col items-center w-full my-10">
            <div className=" my-2 relative w-full flex">
              <h1 className="text-2xl mx-auto">Today&apos;s Meal Plan</h1>
            </div>

            <div className="overflow-x-auto w-full">
              <table className="bg-slate-800 w-full table-fixed min-h-[150px]">
                <thead className="bg-slate-900">
                  <tr>
                    <th className="border-2 border-slate-900">Breakfast</th>
                    <th className="border-2 border-slate-900">Lunch</th>
                    <th className="border-2 border-slate-900">Dinner</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="text-xs whitespace-pre-line border-2  border-slate-900">
                      {user?.confirmedMealPlan &&
                        user?.confirmedMealPlan[0]?.about}
                    </td>
                    <td className="text-xs whitespace-pre-line border-2 border-slate-900">
                      {user?.confirmedMealPlan &&
                        user?.confirmedMealPlan[1]?.about}
                    </td>
                    <td className="text-xs whitespace-pre-line border-2 border-slate-900">
                      {user?.confirmedMealPlan &&
                        user?.confirmedMealPlan[2]?.about}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* {userInfo && <h1>User found</h1>} */}
          <div className=" text-center w-2/3 md:w-1/2 max-w-lg mx-auto mt-10">
            <h1 className="text-2xl">Tomorrow&apos;s Meal Plan</h1>
            <div className="flex justify-between items-center my-3">
              <div>
                <h1 className="text-2xl text-indigo-300 font-bold">
                  Breakfast:
                </h1>
              </div>

              {JSON.stringify(breakfast) !== JSON.stringify({}) ? (
                <div>
                  <h1 className="text-xs text-gray-400 leading-3">
                    Package {breakfast.itemPack}
                  </h1>
                  <h1 className="text-xl ">{breakfast.price} ৳ / day</h1>
                </div>
              ) : (
                <h1 className="text-lg text-red-400">Not selected!</h1>
              )}
            </div>

            <div className="flex justify-between items-center my-3">
              <div>
                <h1 className="text-2xl text-indigo-300 font-bold">Lunch:</h1>
              </div>

              {JSON.stringify(lunch) !== JSON.stringify({}) ? (
                <div>
                  <h1 className="text-xs text-gray-400 leading-3">
                    Package {lunch.itemPack}
                  </h1>
                  <h1 className="text-xl text-gray-400">
                    {lunch.price} ৳ / day
                  </h1>
                </div>
              ) : (
                <h1 className="text-lg text-red-400">Not selected!</h1>
              )}
            </div>

            <div className="flex justify-between items-center my-3">
              <div>
                <h1 className="text-2xl text-indigo-300 font-bold">Dinner:</h1>
              </div>

              {JSON.stringify(dinner) !== JSON.stringify({}) ? (
                <div>
                  <h1 className="text-xs text-gray-400 leading-3">
                    Package {dinner.itemPack}
                  </h1>
                  <h1 className="text-xl text-gray-400">
                    {dinner.price} ৳ / day
                  </h1>
                </div>
              ) : (
                <h1 className="text-lg text-red-400">Not selected!</h1>
              )}
            </div>
            <div className="flex border-t-2 justify-between text-2xl">
              <h1 className="font-bold">Total:</h1>
              <h1 className="text-xl">
                {parseInt(breakfast?.price) +
                  parseInt(lunch?.price) +
                  parseInt(dinner?.price)}{" "}
                ৳ / day
              </h1>
            </div>
            {userInfo?.role == "user" && (
              <div className="my-5">
                <button onClick={clearMealPlan} className="button m-2">
                  Clear
                </button>
                <button onClick={confimrMealPlan} className="button m-2">
                  Confirm
                </button>
              </div>
            )}
          </div>
          {/* {isLoading && <h1>IS LOADING</h1>} */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-indigo-500 mb-8 mt-20">
              BREAKFAST
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {mealData?.map((meal) => {
                // console.log(meal);
                if (meal.time == "Breakfast") {
                  idx1++;
                  if (meal._id == breakfast.id) {
                    return (
                      <div key={meal._id} className="active-meal">
                        <Meal
                          items={meal.about}
                          price={meal.cost}
                          itemPack={idx1}
                          handleClick={handleClick}
                          id={meal._id}
                          type={meal.time}
                        />
                      </div>
                    );
                  } else {
                    {
                      return (
                        <div key={meal._id}>
                          <Meal
                            items={meal.about}
                            price={meal.cost}
                            itemPack={idx1}
                            handleClick={handleClick}
                            id={meal._id}
                            type={meal.time}
                          />
                        </div>
                      );
                    }
                  }
                }
              })}
            </div>

            <h1 className="text-4xl font-bold text-indigo-500 mb-8 mt-20">
              LUNCH
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {mealData?.map((meal) => {
                if (meal.time == "Lunch") {
                  idx2++;
                  if (meal._id == lunch.id) {
                    return (
                      <div key={meal._id} className="active-meal">
                        <Meal
                          items={meal.about}
                          price={meal.cost}
                          itemPack={idx2}
                          handleClick={handleClick}
                          id={meal._id}
                          type={meal.time}
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div key={meal._id}>
                        <Meal
                          items={meal.about}
                          price={meal.cost}
                          itemPack={idx2}
                          handleClick={handleClick}
                          id={meal._id}
                          type={meal.time}
                        />
                      </div>
                    );
                  }
                }
              })}
            </div>

            <h1 className="text-4xl font-bold text-indigo-500 mb-8 mt-20">
              DINNER
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {mealData?.map((meal, i) => {
                if (meal.time == "Dinner") {
                  idx3++;
                  if (meal._id == dinner.id) {
                    return (
                      <div key={meal._id} className="active-meal">
                        <Meal
                          items={meal.about}
                          price={meal.cost}
                          itemPack={idx3}
                          handleClick={handleClick}
                          id={meal._id}
                          type={meal.time}
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div key={meal._id}>
                        <Meal
                          items={meal.about}
                          price={meal.cost}
                          itemPack={idx3}
                          handleClick={handleClick}
                          id={meal._id}
                          type={meal.time}
                        />
                      </div>
                    );
                  }
                }
              })}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default authCheck(Meals);
