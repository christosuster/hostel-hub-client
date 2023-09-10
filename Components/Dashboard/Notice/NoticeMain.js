import React, { useEffect, useState } from "react";
import authCheck from "../../Firebase/authCheck";
import Loading from "../../Shared/Loading/Loading";

const NoticeMain = () => {
  const [notices, setNotices] = useState();
  const [notice, setNotice] = useState();
  useEffect(() => {
    fetch("https://hostel-hub-yg4y.onrender.com/notices")
      .then((res) => res.json())
      .then((data) => {
        setNotices(data.reverse());
        setNotice(data[0]);
      });
  }, []);
  const noticeList = notice?.notice?.split("\n");
  const date = new Date(notice?.date);
  return (
    <div className="min-h-[80vh]">
      {!notices && <Loading></Loading>}
      {notices?.length > 0 ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className=" bg-[#36393e52] shadow-lg rounded-lg p-4 sm:p-6 xl:p-8  md:col-span-2">
            <h1 className="text-3xl mb-8 font-bold underline">
              {notice?.title}
            </h1>
            {noticeList?.map((element, i) => {
              return (
                <h1 className="text-lg" key={i}>
                  {element}
                </h1>
              );
            })}
            <h1 className="mt-10 text-sm">{date?.toDateString()}</h1>
            <h1 className=" text-sm">{notice?.time}</h1>
          </div>
          <div className=" bg-[#36393e52] shadow-lg rounded-lg p-4 sm:p-6 xl:p-8 ">
            <h1 className="text-2xl font-bold mb-4 underline">Notices</h1>
            {notices?.map((note) => {
              const noteDate = new Date(note?.date);
              return (
                <div
                  onClick={() => setNotice(note)}
                  className={`${
                    note?._id === notice?._id
                      ? "p-2 bg-[#36393e82] shadow-lg rounded-lg mb-2 border border-orange-400 cursor-pointer"
                      : "p-2 bg-[#36393e82] shadow-lg rounded-lg mb-2 border border-[#36393e82] cursor-pointer"
                  }`}
                  // className="  p-2 bg-[#36393e82] shadow-lg rounded-lg mb-1"
                  key={note?._id}
                >
                  <div className="w-full grid grid-cols-3 gap-4">
                    <h1 className="col-span-2">{note?.title}</h1>
                    <h1 className="col-span-1 text-sm text-right">
                      {noteDate?.toDateString()} <br />
                      {note?.time}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h1 className="text-center text-2xl text-red-600">
          No Notice Available
        </h1>
      )}
    </div>
  );
};

export default authCheck(NoticeMain);
