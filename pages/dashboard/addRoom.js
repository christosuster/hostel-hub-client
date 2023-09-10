import React from "react";
import AddRoomMain from "../../Components/Dashboard/AddRoom/AddRoomMain";
import Layout from "../../Components/Dashboard/Layout";
import adminCheck from "../../Components/Firebase/adminCheck";
import authCheck from "../../Components/Firebase/authCheck";

const AddRoom = () => {
  return (
    <>
      <Layout>
        <AddRoomMain></AddRoomMain>
      </Layout>
    </>
  );
};

export default authCheck(adminCheck(AddRoom));
