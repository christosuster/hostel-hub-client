import React from "react";
import Layout from "../../Components/Dashboard/Layout";
import Withdraw from "../../Components/Dashboard/Withdraw/Withdraw";
import adminCheck from "../../Components/Firebase/adminCheck";
import AuthCheck from "../../Components/Firebase/AuthCheck";

const withdraw = () => {
  return (
    <>
      <Layout>
        <Withdraw></Withdraw>
      </Layout>
    </>
  );
};

export default AuthCheck(adminCheck(withdraw));
