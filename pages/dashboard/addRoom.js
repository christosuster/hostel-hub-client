import React from "react";
import AddRoomMain from "../../Components/Dashboard/AddRoom/AddRoomMain";
import Layout from "../../Components/Dashboard/Layout";
import adminCheck from "../../Components/Firebase/adminCheck";
import AuthCheck from "../../Components/Firebase/AuthCheck";

const AddRoom = () => {
  return (
    <>
      <Layout>
        <AddRoomMain></AddRoomMain>
      </Layout>
    </>
  );
};

export default AuthCheck(adminCheck(AddRoom));
