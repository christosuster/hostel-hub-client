import { useContext, useEffect, useState } from "react";
import Room from "../../../Components/Rooms/Room";
import authCheck from "../../../Components/Firebase/authCheck.js";
import MainLayout from "../../../Components/MainLayout/MainLayout.js";
import RoomContext from "../../../Components/contexts/RoomContext";
import Layout from "../../../Components/Dashboard/Layout";
import { useRouter } from "next/router";

const Rooms = () => {
  const [branchValue, setBranchValue] = useState("Mirpur 2");
  const { roomData } = useContext(RoomContext);
  const router = useRouter();
  const [bookStatusValue, setBookStatusValue] = useState("all");
  const [unoccupiedRooms, setUnoccupiedRooms] = useState([]);
  const [occupiedRooms, setOccupiedRooms] = useState([]);
  const [fullRooms, setFullRooms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/unoccupiedRooms")
      .then((res) => res.json())
      .then((data) => setUnoccupiedRooms(data));

    fetch("http://localhost:5000/occupiedRooms")
      .then((res) => res.json())
      .then((data) => setOccupiedRooms(data));
  }, [router?.isReady]);

  return (
    <Layout>
      <div className="flex w-full items-center flex-col pb-10 min-h-[85vh]">
        <div className="relative h-40 bg-fixed bg-[url('https://i.ibb.co/p3qb5xF/back12.jpg')] bg-no-repeat bg-cover bg-bottom mb-10 w-full">
          <div className="bg-gray-800 h-full opacity-80 "></div>
          <h1 className="absolute left-1/2 top-1/2 text-4xl font-bold text-white -translate-x-1/2 -translate-y-1/2">
            Rooms
          </h1>
        </div>
        <div className="flex items-center flex-col pb-10 w-full">
          <div className="roomSubmit mb-8">
            <label htmlFor="bookStatus">Showing</label>
            <select
              className="text-center mx-1"
              id="bookStatus"
              name="bookStatus"
              value={bookStatusValue}
              onChange={(e) => {
                setBookStatusValue(e.target.value);
              }}
            >
              <option value="all">All</option>
              <option value="occupied">Unoccupied Shared</option>
              <option value="unoccupied">Unoccupied Private</option>
            </select>
            <label htmlFor="bookStatus">Rooms</label>
          </div>
          <div className="roomContent mx-auto px-3 w-full">
            <div className="rooms w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-4 w-full">
                {bookStatusValue === "all"
                  ? roomData?.map((room, i) => {
                      return <Room key={i} data={{ room }} />;
                    })
                  : ""}

                {bookStatusValue === "unoccupied"
                  ? unoccupiedRooms.map((room, i) => {
                      return <Room key={room._id} data={{ room }} />;
                    })
                  : ""}

                {bookStatusValue === "occupied"
                  ? occupiedRooms.map((room, i) => {
                      return <Room key={room._id} data={{ room }} />;
                    })
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default authCheck(Rooms);
