import { useRouter } from "next/router";
import { useEffect } from "react";
import Loading from "../Shared/Loading/Loading";
import useAuth from "./useAuth";

const authCheck = (WrappedComponent) => {
  const PrivateRoute = () => {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    const userInfo = user;
    // user info
    // const user = useSelector((state) => state?.reducers?.user?.userInfoFromDB);

    if (isLoading) {
      return (
        <div className="my-5 py-5">
          <div className="d-flex justify-content-center my-5 py-5">
            {/* <Spinner animation="border" variant="danger" /> */}
            <Loading></Loading>
          </div>
        </div>
      );
    }

    // if (user?.email) {
    //   return <WrappedComponent />;
    // }
    if (user?.email) {
      return <WrappedComponent />;
    } else {
      router.replace("/login");
    }

    // return router.replace("/login");
  };
  return PrivateRoute;
};

export default authCheck;
