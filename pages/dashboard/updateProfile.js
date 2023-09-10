import React, { useEffect, useState } from "react";
import Layout from "../../Components/Dashboard/Layout";
import MainProfile from "../../Components/Dashboard/Profile/MainProfile";
import AuthCheck from "../../Components/Firebase/AuthCheck";
import useAuth from "../../Components/Firebase/useAuth";
import Loading from "../../Components/Shared/Loading/Loading";

const UpdateProfile = () => {
  const { user } = useAuth();
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`https://hostel-hub-yg4y.onrender.com/users-data/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <Layout>
      {!data && <Loading></Loading>}
      <div>{data && <MainProfile data={data}></MainProfile>}</div>
    </Layout>
  );
};

export default AuthCheck(UpdateProfile);
