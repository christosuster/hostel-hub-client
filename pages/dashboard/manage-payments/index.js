import { useEffect, useState } from "react";
import Layout from "../../../Components/Dashboard/Layout";
import adminCheck from "../../../Components/Firebase/adminCheck";
import authCheck from "../../../Components/Firebase/authCheck";

const ManagePayments = () => {
  const [paymentRecords, setPaymentRecords] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://hostel-hub-yg4y.onrender.com/payments")
      .then((res) => res.json())
      .then((data) => setPaymentRecords(data))
      .then(
        fetch("https://hostel-hub-yg4y.onrender.com/users")
          .then((r) => r.json())
          .then((data) => setUsers(data))
      );
  }, []);

  console.log(paymentRecords);
  console.log(users);
  return (
    <Layout>
      <div className="min-h-[90vh]">
        <h1>Hello</h1>
        <table className="table-auto card-design w-full text-center">
          <tbody>
            <tr className="card-design">
              <th>Name</th>
              <th>Email</th>
              <th>Room</th>
              <th>Rent Due</th>
              <th>Meal Charge</th>
            </tr>
            {paymentRecords.map((record) => {
              return users.map((user) => {
                if (record.uid == user._id) {
                  return (
                    <tr key={user._id}>
                      <td>{user.displayName}</td>
                      <td>{user.email}</td>
                      <td>
                        {Object.keys(user.room).length > 0 ? "YES" : "NO"}
                      </td>
                      <td>{record.rent}</td>
                      <td>{record.due}</td>
                    </tr>
                  );
                }
              });
            })}
            {/* <tr key={e.uid}>
              <td>{idx1}</td>
              <td>{data.displayName}</td>
              <td>{data.room?.branch}</td>
              <td>{data.room?.roomNo}</td>
              <td>{data.phone}</td>
              <td>{date.toDateString()}</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default authCheck(adminCheck(ManagePayments));
