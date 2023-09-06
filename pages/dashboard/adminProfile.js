import React from "react";
import AdminProfileMain from "../../Components/Dashboard/AdminProfile/AdminProfileMain";
import Layout from "../../Components/Dashboard/Layout";
import adminCheck from "../../Components/Firebase/adminCheck";
import authCheck from "../../Components/Firebase/authCheck";

const adminProfile = () => {
  return (
    <>
      <Layout>
        <AdminProfileMain></AdminProfileMain>
      </Layout>
    </>
  );
};

export default authCheck(adminCheck(adminProfile));
