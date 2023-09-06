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
        <h1 className="text-3xl text-center my-3">Meal Orders</h1>

        <div className="w-full">
          <div className="card-design w-full my-3 overflow-x-auto">
            <h1 className="text-center  rounded-none w-full text-xl my-2">
              BREAKFAST
            </h1>
            <table className="table-auto card-design w-full text-center">
              <tbody>
                <tr className="card-design">
                  <th>Package</th>
                  <th>Name</th>
                  <th>Branch</th>
                  <th>Room No</th>
                  <th>Phone No</th>
                  <th>Date</th>
                </tr>
                {breakfast.map((item) => {
                  idx1++;
                  return item.bookedBy?.map((e) => {
                    const data = findUser(e.uid);

                    const date = new Date(e.mealDay);
                    console.log(e);
                    return (
                      <tr key={e.uid}>
                        <td>{idx1}</td>
                        <td>{data.displayName}</td>
                        <td>{data.room?.branch}</td>
                        <td>{data.room?.roomNo}</td>
                        <td>{data.phone}</td>
                        <td>{date.toDateString()}</td>
                      </tr>
                    );
                  });
                })}
              </tbody>
            </table>
          </div>
          <div className="card-design w-full my-3 overflow-x-auto">
            <h1 className="text-center  rounded-none w-full text-xl my-2">
              LUNCH
            </h1>
            <table className="table-auto  w-full text-center">
              <tbody>
                <tr className="card-design">
                  <th>Package</th>
                  <th>Name</th>
                  <th>Branch</th>
                  <th>Room No</th>
                  <th>Phone No</th>
                  <th>Date</th>
                </tr>
                {lunch.map((item) => {
                  idx2++;
                  return item.bookedBy?.map((e) => {
                    const data = findUser(e.uid);

                    const date = new Date(e.mealDay);
                    console.log(e);
                    return (
                      <tr key={e.uid}>
                        <td>{idx2}</td>
                        <td>{data.displayName}</td>
                        <td>{data.room?.branch}</td>
                        <td>{data.room?.roomNo}</td>
                        <td>{data.phone}</td>
                        <td>{date.toDateString()}</td>
                      </tr>
                    );
                  });
                })}
              </tbody>
            </table>
          </div>
          <div className="card-design w-full my-3 overflow-x-auto">
            <h1 className="text-center  rounded-none w-full text-xl my-2">
              DINNER
            </h1>
            <table className="table-auto text-center w-full">
              <tbody className="">
                <tr className="card-design">
                  <th>Package</th>
                  <th>Name</th>
                  <th>Branch</th>
                  <th>Room No</th>
                  <th>Phone No</th>
                  <th>Date</th>
                </tr>
                {dinner.map((item) => {
                  idx3++;
                  return item.bookedBy?.map((e) => {
                    const data = findUser(e.uid);

                    const date = new Date(e.mealDay);
                    console.log(e);
                    return (
                      <tr key={e.uid}>
                        <td>{idx3}</td>
                        <td>{data.displayName}</td>
                        <td>{data.room?.branch}</td>
                        <td>{data.room?.roomNo}</td>
                        <td>{data.phone}</td>
                        <td>{date.toDateString()}</td>
                      </tr>
                    );
                  });
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default authCheck(adminCheck(MealOrders));
