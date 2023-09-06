import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import adminCheck from "../../Firebase/adminCheck";
import authCheck from "../../Firebase/authCheck";
import swal from "sweetalert";
import Loading from "../../Shared/Loading/Loading";
import { useRouter } from "next/router";

const AddNoticeMain = () => {
  const router = useRouter();
  const [noticeCount, setNoticeCount] = useState(0);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (info) => {
    let time = new Date();
    const date = new Date().toLocaleDateString();
    const currentTime = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const roomInfo = {
      ...info,
      date: date,
      time: currentTime,
    };
    fetch("http://localhost:5000/notice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(roomInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Notice has been submitted!", {
            icon: "success",
          });
        }
      })
      .then(() => reset())
      .then(setNoticeCount(noticeCount + 1));
    // .then(router.push("/dashboard/addNotice"));
  };
  const [notices, setNotices] = useState([]);
  const [notice, setNotice] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/notices")
      .then((res) => res.json())
      .then((data) => {
        setNotices(data);
        setNotice(data[0]);
      });
  }, [noticeCount]);
  console.log(notices);
  console.log(notice);
  const noticeList = notice?.notice?.split("\n");
  const date = new Date(notice?.date);

  const deleteItem = (id) => {
    if (notices?.length > 0) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          fetch(`http://localhost:5000/delete-notice/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                console.log(data);
                swal("Notice delete successful!", {
                  icon: "success",
                });

                const remainingRoom = notices?.filter(
                  (room) => room._id !== id
                );
                setNotices(remainingRoom);
                setNotice(remainingRoom[0]);
              }
            })
            .then((data) => console.log(data));
        }
      });
    } else {
      swal({
        title: "Error!",
        text: "No notice to delete!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(router.push("/dashboard/addNotice"));
    }
  };

  return (
    <div className="min-h-[80vh]">
      <div className=" font-sansita">
        <form
          onSubmit={handleSubmit(submitHandler)}
          style={{
            // boxShadow: "0 0 2rem 0 rgb(136 152 170 / 15%)",
            backgroundColor: "#36393e52",
          }}
          className="my-5 rounded shadow-xl bg-slate-200 dark:bg-darkBlue p-6 text-Dark dark:text-white"
        >
          <div className="grid grid-cols-12 gap-3 py-2">
            <div className="col-span-12 flex flex-col  md:col-span-6">
              <label htmlFor="cost">Notice Title</label>
              <input
                required
                className="rounded-md h-14 border-2 p-2 text-lg"
                type="text"
                placeholder="Title"
                {...register("title")}
                //   defaultValue={data?.profession}
              />
            </div>
            <div className="col-span-12 flex flex-col">
              <label htmlFor="about">Notice Body</label>
              <textarea
                required
                name="postContent"
                className="rounded-md border-2 p-2 text-lg"
                type="text"
                rows={8}
                placeholder="Notice"
                {...register("notice")}
                //   defaultValue={data?.profession}
              />
            </div>
          </div>
          <span className="">
            <input
              type="submit"
              className=" mt-5 rounded-lg cursor-pointer bg-indigo-500 px-6 py-3 text-lg font-semibold text-white"
              value="Add Notice"
            />
          </span>
        </form>
      </div>
      {!notices && <Loading></Loading>}
      {notices.length > 0 && (
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
            <div className="flex justify-between">
              <div>
                <h1 className="mt-10 text-sm">{date?.toDateString()}</h1>
                <h1 className=" text-sm">{notice?.time}</h1>
              </div>
              <button
                className="button-danger mt-10 px-4"
                onClick={() => {
                  deleteItem(notice?._id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
          <div className=" bg-[#36393e52] shadow-lg rounded-lg p-4 sm:p-6 xl:p-8 ">
            <h1 className="text-3xl font-bold mb-4">Notices</h1>
            {notices?.map((note) => {
              const noteDate = new Date(note?.date);
              return (
                <div
                  onClick={() => setNotice(note)}
                  className={`${
                    note?._id === notice?._id
                      ? "p-2 bg-[#36393e82] shadow-lg rounded-lg mb-2 border-2 border-indigo-500 cursor-pointer"
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
      )}
    </div>
  );
};

export default authCheck(adminCheck(AddNoticeMain));
