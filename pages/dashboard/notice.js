import React from "react";
import Layout from "../../Components/Dashboard/Layout";
import NoticeMain from "../../Components/Dashboard/Notice/NoticeMain";
import AuthCheck from "../../Components/Firebase/AuthCheck";

const notice = () => {
  return (
    <div>
      <Layout>
        <NoticeMain></NoticeMain>
      </Layout>
    </div>
  );
};

export default AuthCheck(notice);
