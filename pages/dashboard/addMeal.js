import React from 'react';
import AddMealMain from '../../Components/Dashboard/AddMeal/AddMealMain';
import Layout from '../../Components/Dashboard/Layout';
import adminCheck from '../../Components/Firebase/adminCheck';
import authCheck from '../../Components/Firebase/authCheck';

const AddMeal = () => {
    return (
      <>
        <Layout>
          <AddMealMain></AddMealMain>
        </Layout>
      </>
    );
};

export default authCheck(adminCheck(AddMeal));