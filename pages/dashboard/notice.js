import React from "react";
import Layout from "../../Components/Dashboard/Layout";
import NoticeMain from "../../Components/Dashboard/Notice/NoticeMain";
import authCheck from "../../Components/Firebase/authCheck";

const notice = () => {
  return (
    <div>
      <Layout>
        <NoticeMain></NoticeMain>
      </Layout>
    </div>
  );
};

export default authCheck(notice);
