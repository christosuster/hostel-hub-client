import React from "react";
import useAuth from "../../Firebase/useAuth";
import Link from "next/link";

const AdminProfileMain = () => {
  const { userInfo } = useAuth();
  console.log(userInfo);
  return (
    <div className="px-5 min-h-[85vh] flex-col flex items-center justify-center">
      <div className="card min-w-[450px] flex flex-col sm:flex-row items-center justify-center lg:w-1/2">
        <div className="sm:w-1/2">
          <img
            src={userInfo.image}
            className="aspect-square object-cover rounded-full max-w-[200px] w-3/4 m-auto"
            alt=""
          />
        </div>
        <div className="sm:w-1/2 my-5 flex flex-row justify-center">
          <div className="">
            {userInfo.displayName && (
              <div className="flex items-center flex-col my-1">
                <h1 className="text-xs text-gray-500">NAME</h1>
                <h1 className="text-lg">{userInfo.displayName}</h1>
              </div>
            )}

            {userInfo.phone && (
              <div className="flex items-center flex-col my-1">
                <h1 className="text-xs text-gray-500">PHONE</h1>
                <h1 className="text-lg">{userInfo.phone}</h1>
              </div>
            )}

            {userInfo.email && (
              <div className="flex items-center flex-col my-1">
                <h1 className="text-xs text-gray-500">EMAIL</h1>
                <h1 className="text-lg">{userInfo.email}</h1>
              </div>
            )}

            {userInfo.gender && (
              <div className="flex items-center flex-col my-1">
                <h1 className="text-xs text-gray-500">GENDER</h1>
                <h1 className="text-lg">{userInfo.gender}</h1>
              </div>
            )}

            {userInfo.profession && (
              <div className="flex items-center flex-col my-1">
                <h1 className="text-xs text-gray-500">PROFESSION</h1>
                <h1 className="text-lg">{userInfo.profession}</h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <Link href="/dashboard/updateProfile">
        <button className="button my-3">Modify Profile</button>
      </Link>
    </div>
  );
};

export default AdminProfileMain;
