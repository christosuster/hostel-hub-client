import React, { useEffect, useState } from "react";
import Layout from "../../Components/Dashboard/Layout";
import MainProfile from "../../Components/Dashboard/Profile/MainProfile";
import authCheck from "../../Components/Firebase/authCheck";
import useAuth from "../../Components/Firebase/useAuth";
import Loading from "../../Components/Shared/Loading/Loading";

const UpdateProfile = () => {
  const { user } = useAuth();
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/users-data/${user?.email}`)
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

export default authCheck(UpdateProfile);
