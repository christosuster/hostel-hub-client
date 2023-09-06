import { useEffect } from "react";
import AddNoticeMain from "../../Components/Dashboard/AddNotice/AddNoticeMain";
import Layout from "../../Components/Dashboard/Layout";
import adminCheck from "../../Components/Firebase/adminCheck";
import authCheck from "../../Components/Firebase/authCheck";

const AddNotice = () => {
  return (
    <div>
      <Layout>
        <AddNoticeMain></AddNoticeMain>
      </Layout>
    </div>
  );
};

export default authCheck(adminCheck(AddNotice));
