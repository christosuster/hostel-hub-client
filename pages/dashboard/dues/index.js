import Layout from "../../../Components/Dashboard/Layout";
import { useState, useEffect } from "react";

import React from "react";
import AuthCheck from "../../../Components/Firebase/AuthCheck";
import adminCheck from "../../../Components/Firebase/adminCheck";

const Dues = () => {
  const [dueList, setDueList] = useState([]);

  useEffect(() => {
    fetch("https://hostel-hub-yg4y.onrender.com/payments")
      .then((res) => res.json())
      .then((data) => setDueList(data));
  }, []);

  return (
    <Layout>
      <div>
        <h1>DUES</h1>
        <div>
          <table className="table-auto card-design w-full text-center">
            <tbody>
              <tr className="card-design">
                <th>Name</th>
                <th>Email</th>
                <th>Meal Dues</th>
                <th>Rent Dues</th>
                <th>Advance Payment</th>
              </tr>
              {dueList.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{}</td>
                    <td>{item.email}</td>
                    <td>{item.due}</td>
                    <td>{item.rent}</td>
                    <td>{item.advance}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default AuthCheck(adminCheck(Dues));
