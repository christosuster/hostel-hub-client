import { useContext, useState } from "react";
import Room from "../../../Components/Rooms/Room";
import AuthCheck from "../../../Components/Firebase/AuthCheck.js";
import RoomContext from "../../../Components/contexts/RoomContext";
import Layout from "../../../Components/Dashboard/Layout";

const Rooms = () => {
  const [branchValue, setBranchValue] = useState("Mirpur 2");
  const { roomData } = useContext(RoomContext);

  return (
    <Layout>
      <div className="flex items-center flex-col pb-10 font-sansita">
        <div className="relative h-40 bg-fixed bg-[url('https://i.ibb.co/p3qb5xF/back12.jpg')] bg-no-repeat bg-cover bg-bottom mb-10 w-full">
          <div className="bg-gray-800 h-full opacity-80 "></div>
          <h1 className="absolute left-1/2 top-1/2 text-4xl font-bold text-white -translate-x-1/2 -translate-y-1/2">
            Rooms
          </h1>
        </div>
        <div className="roomSubmit mb-8">
          <label className="text-xl" htmlFor="branch">
            Choose a branch:{" "}
          </label>
          <select
            className="px-2 py-1 rounded border"
            id="branch"
            name="branch"
            value={branchValue}
            onChange={(e) => {
              setBranchValue(e.target.value);
            }}
          >
            <option value="Mirpur 2">Mirpur 2</option>
            <option value="Dhanmondi">Dhanmondi</option>
          </select>
        </div>
        <div className="roomContent container mx-auto px-3">
          <div className="rooms">
            <h1 className="text-center text-3xl mb-5">
              Rooms and Seats in {branchValue}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
              {roomData?.map((room) => {
                if (room.branch === branchValue) {
                  return <Room key={room._id} data={{ room }} />;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthCheck(Rooms);
