import React, { useEffect, useState } from "react";
import adminCheck from "../../Firebase/adminCheck";
import authCheck from "../../Firebase/authCheck";
import Loading from "../../Loading/Loading";
import ManageAdminElement from "./ManageAdminElement";

const ManageAdmins = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setUsers(data);
      });
  }, []);

  const remainingUsers = (id) => {
    const remaining = users.filter((user) => user._id !== id);
    setUsers(remaining);
  };
  return (
    <div className="md:p-10 p-2">
      <div className="flex items-center justify-center">
        <h1 className="text-center text-2xl mb-3">Manage Admins</h1>
      </div>
      <div className="mx-auto overflow-x-auto w-full">
        <table className="table-auto text-left border-collapse mx-auto card-design w-full min-h-[100px]">
          <thead className="">
            <tr className="border-b-2 py-3">
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody className="">
            {users.map((user) => {
              return user.role == "admin" ? (
                <ManageAdminElement
                  data={user}
                  key={user._id}
                  remainingUsers={remainingUsers}
                />
              ) : (
                ""
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default authCheck(adminCheck(ManageAdmins));
