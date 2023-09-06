import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import RoomContext from "../../contexts/RoomContext";
import RoomInfo from "./RoomInfo";
import { BsFillPersonFill } from "react-icons/bs";

const ManageRoomsMain = () => {
  // const [branchValue, setBranchValue] = useState("Mirpur 2");
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

    fetch("http://localhost:5000/fullRooms")
      .then((res) => res.json())
      .then((data) => setFullRooms(data));
  }, [router?.isReady]);
  const { roomData, deleteItem } = useContext(RoomContext);
  return (
    <div>
      <h1 className="text-center text-5xl pb-5">Manage Rooms</h1>
      <div className="flex items-center flex-col pb-10">
        <div className="roomSubmit mb-8">
          {/* <label htmlFor="branch">Choose a branch: </label>
          <select
            id="branch"
            name="branch"
            value={branchValue}
            onChange={(e) => {
              setBranchValue(e.target.value);
            }}
          >
            <option value="Mirpur 2">Mirpur 2</option>
            <option value="Dhanmondi">Dhanmondi</option>
          </select> */}
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
            <option value="full">Full</option>
            <option value="occupied">Unoccupied Shared</option>
            <option value="unoccupied">Unoccupied Private</option>
          </select>
          <label htmlFor="bookStatus">Rooms</label>
        </div>
        <div className="roomContent container mx-auto px-3">
          <div className="rooms">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-4">
              {bookStatusValue === "all"
                ? roomData?.map((room, i) => {
                    return (
                      <RoomInfo
                        key={i}
                        data={{ room }}
                        deleteItem={deleteItem}
                      />
                    );
                  })
                : ""}

              {bookStatusValue === "unoccupied"
                ? unoccupiedRooms.map((room, i) => {
                    return (
                      <RoomInfo
                        key={room._id}
                        data={{ room }}
                        deleteItem={deleteItem}
                      />
                    );
                  })
                : ""}

              {bookStatusValue === "occupied"
                ? occupiedRooms.map((room, i) => {
                    return (
                      <RoomInfo
                        key={room._id}
                        data={{ room }}
                        deleteItem={deleteItem}
                      />
                    );
                  })
                : ""}

              {bookStatusValue === "full"
                ? fullRooms.map((room, i) => {
                    return (
                      <RoomInfo
                        key={room._id}
                        data={{ room }}
                        deleteItem={deleteItem}
                      />
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageRoomsMain;
