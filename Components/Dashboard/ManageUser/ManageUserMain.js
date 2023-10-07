import React, { useEffect, useState } from "react";
import ManageUserElement from "./ManageUserElement";
import Loading from "../../Loading/Loading";
import adminCheck from "../../Firebase/adminCheck";
import authCheck from "../../Firebase/authCheck";
import { Tooltip } from "react-tooltip";
import { RiInformationLine } from "react-icons/ri";

const ManageUserMain = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://hostel-hub-yg4y.onrender.com/users")
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
    <div className="min-h-[80vh]">
      <div className="flex items-center justify-center relative mb-3">
        <h1 className="text-center text-2xl ">Manage Users</h1>
      </div>

      <div className="overflow-x-auto w-full">
        <table className=" card-design w-full min-w-[700px] min-h-[100px] overflow-x-auto">
          <thead className="text-lg">
            <tr>
              <th className="text-left pl-20">USER</th>
              <th className="">ROOM STATUS</th>
              <th className="text-right pr-20">ACTION</th>
            </tr>
          </thead>
          <tbody className="">
            {users.map((user, i) => {
              return user.role == "user" ? (
                <ManageUserElement
                  remainingUsers={remainingUsers}
                  data={user}
                  key={user._id}
                  idx={i}
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

export default ManageUserMain;
