import React, { useEffect, useState } from "react";
import MainProfile from "../../../Components/Dashboard/Profile/MainProfile";
import authCheck from "../../../Components/Firebase/authCheck";
import useAuth from "../../../Components/Firebase/useAuth";
import MainLayout from "../../../Components/MainLayout/MainLayout";

const Profile = () => {
  const { user } = useAuth();
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`https://hostel-hub-yg4y.onrender.com/users-data/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error.message);
      });
  }, [data, user?.email]);
  return (
    <MainLayout>
      <div>{data && <MainProfile data={data}></MainProfile>}</div>
    </MainLayout>
  );
};

export default authCheck(Profile);
