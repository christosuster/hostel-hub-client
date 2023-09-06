/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../Shared/Loading/Loading";
import useAuth from "./useAuth";

const adminCheck = (WrappedComponent) => {
  const PrivateRoute = () => {
    const { user, userInfo } = useAuth();
    const router = useRouter();

    useEffect(() => {
      // console.log(userInfo);
      if (userInfo?.email && userInfo?.role !== "admin") {
        router.replace("/");
      }
      // if (!user?.email) {
      //   router.replace("/");
      // }
    }, [userInfo]);

    if (userInfo?.email && userInfo?.role === "admin") {
      return <WrappedComponent />;
    }

    return <Loading />;
  };
  return PrivateRoute;
};

export default adminCheck;
