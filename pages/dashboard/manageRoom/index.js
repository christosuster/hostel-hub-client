import React from "react";
import ManageRoomsMain from "../../../Components/Dashboard/ManageRoom/ManageRoomsMain";
import adminCheck from "../../../Components/Firebase/adminCheck";
import AuthCheck from "../../../Components/Firebase/AuthCheck";
import Layout from "../../../Components/Dashboard/Layout";

const ManageRoom = () => {
  return (
    <>
      <Layout>
        <ManageRoomsMain></ManageRoomsMain>
      </Layout>
    </>
  );
};

export default AuthCheck(adminCheck(ManageRoom));
