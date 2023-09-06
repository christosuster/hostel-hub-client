/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";

export default function RoomInfo(props) {
  const room = props.data.room;
  const people = [];

  if (room?.category == "Economic") {
    for (var i = 0; i < room?.seat; i++) {
      people.push(<BsFillPersonFill />);
    }
  }

  return (
    <div
      style={{
        backgroundColor: "#36393e52",
      }}
      className="shadow-xl rounded-lg overflow-hidden"
    >
      <div
        className="bg-cover bg-center h-64 p-4"
        style={{
          backgroundImage: `url(${room?.image})`,
        }}
      >
        {room?.category == "Business" && (
          <h1 className="font-bold bg-[#f973168f] w-fit p-1 rounded-lg">
            Private
          </h1>
        )}
        {room?.category == "Economic" && (
          <h1 className="font-bold bg-[#1656f98f] w-fit p-1 rounded-lg">
            Shared
          </h1>
        )}
      </div>
      <div className="py-10 relative text-white flex flex-col text-center ">
        <div className="h-[230px]">
          <p className="uppercase tracking-wide text-xl font-bold ">
            {room?.title}
          </p>
          <p className="text-xs uppercase font-bold text-gray-200 pb-3">
            per month{" "}
            <span className="text-xl text-orange-500 mx-2">{room?.cost}৳</span>
          </p>
          <p className="text-sm text-gray-500">Branch</p>
          <p className="text-lg leading-3">{room?.branch}</p>
          <div className="py-4">
            <p>{room?.category === "Economic" ? "Available Seats" : ""}</p>
            <div className="flex justify-center py-1 text-2xl">
              {people.map((e, i) => {
                return <div key={i}>{e}</div>;
              })}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            className="button-danger mt-4 m-1"
            onClick={() => {
              props.deleteItem(room._id);
            }}
          >
            Delete
          </button>

          <Link href={`/dashboard/manageRoom/rooms/${room._id}`}>
            <button className="button mt-4 m-1">Room Details</button>
          </Link>
          <Link href={`/dashboard/manageRoom/occupants/${room._id}`}>
            <button className="button mt-4 m-1">Occupants</button>
          </Link>
        </div>
      </div>
    </div>
    // <div className=" card" id={room._id}>
    //   <img
    //     src={room.image}
    //     className="object-cover m-5 aspect-[4/3]"
    //     alt="roomImage"
    //   />
    //   <h1>Attached bathroom: {room.attachedBathroom}</h1>
    //   <h1>Attached balcony: {room.attachedBalcony}</h1>
    //   <h1>Floor: {room.floor}</h1>
    //   <h1>Rent per week: {room.cost} ৳</h1>

    //   <div>
    //     <button
    //       className="button mt-4 m-1"
    //       onClick={() => {
    //         props.data.setSelectedRoom(room);
    //       }}
    //     >
    //       Select room
    //     </button>

    //     <Link href={`/rooms/${room._id}`}>
    //       <button className="button mt-4 m-1">View Details</button>
    //     </Link>
    //   </div>
    // </div>
  );
}
