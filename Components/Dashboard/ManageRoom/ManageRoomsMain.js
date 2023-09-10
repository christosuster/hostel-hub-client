import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import RoomContext from "../../contexts/RoomContext";
import RoomInfo from "./RoomInfo";
import { BsFillPersonFill } from "react-icons/bs";
import { RiInformationLine } from "react-icons/ri";
import { Tooltip } from "react-tooltip";

const ManageRoomsMain = () => {
  // const [branchValue, setBranchValue] = useState("Mirpur 2");
  const router = useRouter();
  const [bookStatusValue, setBookStatusValue] = useState("all");
  const [unoccupiedRooms, setUnoccupiedRooms] = useState([]);
  const [occupiedRooms, setOccupiedRooms] = useState([]);
  const [fullRooms, setFullRooms] = useState([]);
  useEffect(() => {
    fetch("https://hostel-hub-yg4y.onrender.com/unoccupiedRooms")
      .then((res) => res.json())
      .then((data) => setUnoccupiedRooms(data));

    fetch("https://hostel-hub-yg4y.onrender.com/occupiedRooms")
      .then((res) => res.json())
      .then((data) => setOccupiedRooms(data));

    fetch("https://hostel-hub-yg4y.onrender.com/fullRooms")
      .then((res) => res.json())
      .then((data) => setFullRooms(data));
  }, [router?.isReady]);
  const { roomData, deleteItem } = useContext(RoomContext);
  return (
    <div className="card min-h-[85vh]">
      <div className="relative pb-5 w-full flex justify-center items-center">
        <h1 className="text-center text-3xl ">Manage Rooms</h1>
        <a className="my-anchor-element absolute right-0 text-2xl">
          <RiInformationLine />
        </a>
        <Tooltip
          anchorSelect=".my-anchor-element"
          variant="info"
          place="bottom"
          style={{ width: "300px" }}
        >
          To delete a room, make sure that the room doesn't have any residents.
          <br />
          <br />
          Occupants show the current residents of a particular room.
        </Tooltip>
      </div>
      <div className="flex items-center flex-col pb-10">
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
            <option value="full">Full</option>
            <option value="occupied">Unoccupied Shared</option>
            <option value="unoccupied">Unoccupied Private</option>
          </select>
          <label htmlFor="bookStatus">Rooms</label>
        </div>
        <div className="roomContent container mx-auto px-3">
          <div className="rooms">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-4">
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
