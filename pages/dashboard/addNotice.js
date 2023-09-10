import { useEffect } from "react";
import AddNoticeMain from "../../Components/Dashboard/AddNotice/AddNoticeMain";
import Layout from "../../Components/Dashboard/Layout";
import adminCheck from "../../Components/Firebase/adminCheck";
import AuthCheck from "../../Components/Firebase/AuthCheck";

const AddNotice = () => {
  return (
    <div>
      <Layout>
        <AddNoticeMain></AddNoticeMain>
      </Layout>
    </div>
  );
};

export default AuthCheck(adminCheck(AddNotice));
