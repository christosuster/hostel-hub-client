import React from "react";
import Layout from "../../Components/Dashboard/Layout";
import Withdraw from "../../Components/Dashboard/Withdraw/Withdraw";
import adminCheck from "../../Components/Firebase/adminCheck";
import authCheck from "../../Components/Firebase/authCheck";

const withdraw = () => {
  return (
    <>
      <Layout>
        <Withdraw></Withdraw>
      </Layout>
    </>
  );
};

export default authCheck(adminCheck(withdraw));
