import React from "react";
import AdminProfileMain from "../../Components/Dashboard/AdminProfile/AdminProfileMain";
import Layout from "../../Components/Dashboard/Layout";
import adminCheck from "../../Components/Firebase/adminCheck";
import AuthCheck from "../../Components/Firebase/AuthCheck";

const adminProfile = () => {
  return (
    <>
      <Layout>
        <AdminProfileMain></AdminProfileMain>
      </Layout>
    </>
  );
};

export default AuthCheck(adminCheck(adminProfile));
