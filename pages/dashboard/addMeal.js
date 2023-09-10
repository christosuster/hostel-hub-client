import React from "react";
import AddMealMain from "../../Components/Dashboard/AddMeal/AddMealMain";
import Layout from "../../Components/Dashboard/Layout";
import adminCheck from "../../Components/Firebase/adminCheck";
import AuthCheck from "../../Components/Firebase/AuthCheck";

const AddMeal = () => {
  return (
    <>
      <Layout>
        <AddMealMain></AddMealMain>
      </Layout>
    </>
  );
};

export default AuthCheck(adminCheck(AddMeal));
