import React from "react";
import Layout from "../../../Components/Dashboard/Layout";
import ManageUserMain from "../../../Components/Dashboard/ManageUser/ManageUserMain";
import adminCheck from "../../../Components/Firebase/adminCheck";
import AuthCheck from "../../../Components/Firebase/AuthCheck";

const ManageUser = () => {
  return (
    <div>
      <Layout>
        <ManageUserMain />
      </Layout>
    </div>
  );
};

export default AuthCheck(adminCheck(ManageUser));
