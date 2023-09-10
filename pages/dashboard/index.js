/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import MainAdminDashboardHome from "../../Components/Dashboard/AdminDashboardHome/MainAdminDashboardHome";
// import DashboardItem from "../../Components/Dashboard/Profile/DashboardItem";
import Layout from "../../Components/Dashboard/Layout";
import useAuth from "../../Components/Firebase/useAuth";
import AuthCheck from "../../Components/Firebase/AuthCheck";
import UserInformation from "../../Components/UserInformation";
import Loading from "../../Components/Loading/Loading";

const Dashboard = () => {
  const { user, userInfo } = useAuth();
  return (
    <div>
      <Layout>
        {!user && <Loading></Loading>}
        {user && userInfo?.role === "user" && <UserInformation />}
        {user && userInfo?.role === "admin" && (
          <MainAdminDashboardHome></MainAdminDashboardHome>
        )}
      </Layout>
    </div>
  );
};

export default AuthCheck(Dashboard);
