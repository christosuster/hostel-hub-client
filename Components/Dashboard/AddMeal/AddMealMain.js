/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import adminCheck from "../../Firebase/adminCheck";
import swal from "sweetalert";
import { RiInformationLine } from "react-icons/ri";
import { Tooltip } from "react-tooltip";

const AddMealMain = () => {
  const router = useRouter();

  const [time, setTime] = useState("");
  const [mealData, setMealData] = useState([]);

  const handleTime = (event) => {
    setTime(event.target.value);
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  // Save User Information
  const submitHandler = (info) => {
    const roomInfo = {
      ...info,
      time: time,
      bookedBy: [],
    };
    if (!roomInfo?.time || !roomInfo?.about || !roomInfo?.cost) {
      console.log(roomInfo?.time, roomInfo?.about, roomInfo?.cost);
      swal("Please fill in all fields!", {
        icon: "warning",
      });
      return;
    }
    fetch("https://hostel-hub-yg4y.onrender.com/meals", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(roomInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Meal has been added!", {
            icon: "success",
          });
          router.replace("/dashboard");
        }
      });
  };

  useEffect(() => {
    fetch("https://hostel-hub-yg4y.onrender.com/meals")
      .then((res) => res.json())
      .then((data) => setMealData(data));
  }, []);

  const deleteItem = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://hostel-hub-yg4y.onrender.com/delete-meal/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() =>
            swal("Meal delete successful!", {
              icon: "success",
            })
          )
          .then((data) => console.log(data));

        const remainingMeal = mealData.filter((meal) => meal._id !== id);
        setMealData(remainingMeal);
      }
    });
  };

  let idx1 = 0;
  let idx2 = 0;
  let idx3 = 0;

  return (
    <div className="min-h-[85vh]">
      <div className="card w-full">
        <div className="relative my-5 flex w-full">
          <h1 className="text-3xl mx-auto">Add New Meal Plan</h1>
          <a className="my-anchor-element absolute right-0 text-2xl">
            <RiInformationLine />
          </a>
          <Tooltip
            anchorSelect=".my-anchor-element"
            variant="info"
            place="bottom"
            style={{ width: "300px" }}
          >
            Fill in the necessary information to add this meal plan to database.
          </Tooltip>
        </div>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="w-full p-3 mt-4"
        >
          <div className="grid grid-cols-12 gap-3 py-2">
            <div className="col-span-12 flex flex-col  md:col-span-6">
              <label htmlFor="time">Meal Type</label>
              <select
                value={time}
                onChange={handleTime}
                //   {...register("branch")}
                className=" h-14 w-full cursor-pointer rounded-lg  p-3 text-lg dark:border-0"
              >
                <option className="hidden" placeholder="Eg. Breakfast"></option>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
              </select>
            </div>
            <div className="col-span-12 flex flex-col  md:col-span-6">
              <label htmlFor="cost">Meal Price</label>
              <input
                className="rounded-md h-14  p-2 text-lg"
                type="number"
                placeholder="Eg. 70"
                {...register("cost")}
                //   defaultValue={data?.profession}
              />
            </div>
            <div className="col-span-12 flex flex-col">
              <label htmlFor="about">Meal Items</label>
              <textarea
                className="rounded-md  p-2 text-lg"
                type="text"
                rows={5}
                placeholder="Eg. Plain Rice \n Chicken Curry"
                {...register("about")}
                //   defaultValue={data?.profession}
              />
            </div>
          </div>
          <span className="">
            <input
              type="submit"
              className=" mt-5 rounded-lg cursor-pointer bg-indigo-500 px-6 py-3 text-lg font-semibold text-white"
              value="Add Meal"
            />
          </span>
        </form>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-indigo-500 mb-8 mt-20">
            BREAKFAST
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-8 ">
            {mealData?.map((meal) => {
              if (meal.time == "Breakfast") {
                const itemList = meal?.about?.split("\n");
                idx1++;
                return (
                  <div key={meal._id}>
                    <div className="card w-[300px] flex flex-col justify-between h-full">
                      <div>
                        <h1 className="pb-2 text-lg border-b-2 font-bold">
                          Package {idx1}
                        </h1>
                        <div className="py-3 ">
                          {itemList?.map((element, i) => {
                            return <h1 key={i}>{element}</h1>;
                          })}
                        </div>
                        <h1 className="pt-2 border-t-2 text-indigo-300">
                          ৳ {meal?.cost} / day
                        </h1>
                      </div>
                      <button
                        onClick={() => deleteItem(meal._id)}
                        className="button-danger mt-3 px-4"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              }
            })}
          </div>

          <h1 className="text-4xl font-bold text-indigo-500 mb-8 mt-20">
            LUNCH
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
            {mealData?.map((meal) => {
              if (meal.time == "Lunch") {
                const itemList = meal?.about?.split("\n");
                idx2++;
                return (
                  <div key={meal._id}>
                    <div className="card w-[300px] flex flex-col justify-between h-full">
                      <div>
                        <h1 className="pb-2 text-lg border-b-2 font-bold">
                          Package {idx2}
                        </h1>
                        <div className="py-3 ">
                          {itemList?.map((element, i) => {
                            return <h1 key={i}>{element}</h1>;
                          })}
                        </div>
                        <h1 className="pt-2 border-t-2 text-indigo-300">
                          ৳ {meal?.cost} / day
                        </h1>
                      </div>
                      <button
                        onClick={() => deleteItem(meal._id)}
                        className="button-danger mt-3 px-4"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              }
            })}
          </div>

          <h1 className="text-4xl font-bold text-indigo-500 mb-8 mt-20">
            DINNER
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
            {mealData?.map((meal) => {
              if (meal.time == "Dinner") {
                const itemList = meal?.about?.split("\n");
                idx3++;
                return (
                  <div key={meal._id}>
                    <div className="card w-[300px] flex flex-col justify-between h-full">
                      <div>
                        <h1 className="pb-2 text-lg border-b-2 font-bold">
                          Package {idx3}
                        </h1>
                        <div className="py-3 ">
                          {itemList?.map((element, i) => {
                            return <h1 key={i}>{element}</h1>;
                          })}
                        </div>
                        <h1 className="pt-2 border-t-2 text-indigo-300">
                          ৳ {meal?.cost} / day
                        </h1>
                      </div>
                      <button
                        onClick={() => deleteItem(meal._id)}
                        className="button-danger mt-3 px-4"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMealMain;
