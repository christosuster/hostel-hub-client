import React, { useState } from "react";
import AddAdminMain from "../../Components/Dashboard/AddAdmin/AddAdminMain";
import Layout from "../../Components/Dashboard/Layout";
import ManageAdmins from "../../Components/Dashboard/ManageAdmins/ManageAdmins";
import adminCheck from "../../Components/Firebase/adminCheck";
import authCheck from "../../Components/Firebase/authCheck";

const AddAdmin = () => {
  return (
    <>
      <Layout>
        <div className="card-design p-5 min-h-[80vh]">
          <ManageAdmins></ManageAdmins>
          <AddAdminMain></AddAdminMain>
        </div>
      </Layout>
    </>
  );
};

export default authCheck(adminCheck(AddAdmin));
