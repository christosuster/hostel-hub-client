import React from "react";

const Counting = ({ users, meals, rooms }) => {
  // console.log(users);
  let occupiedPrivateRooms = 0;
  let unoccupiedPrivateRooms = 0;
  let occupiedSeats = 0;
  let unoccupiedSeats = 0;

  for (const i in rooms) {
    if (rooms[i].category == "Business") {
      if (rooms[i].bookedBy == "") {
        unoccupiedPrivateRooms += 1;
      } else {
        occupiedPrivateRooms += 1;
      }
    } else {
      unoccupiedSeats += rooms[i].seat;
      occupiedSeats += 4 - rooms[i].seat;
    }
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className=" bg-[#36393e52] shadow-lg rounded-lg p-2 sm:p-3 xl:p-5 text-center">
        <div className="flex items-center justify-center">
          <div className="w-full lg:w-3/4">
            <h3 className="text-xl text-gray-500 text-center">Private Rooms</h3>
            <div className="flex justify-between">
              <div className="p-2">
                <h3 className="text-base font-normal text-red-500 text-center">
                  Occupied
                </h3>
                <h3 className="text-base font-normal text-red-500 text-center">
                  {occupiedPrivateRooms}
                </h3>
              </div>
              <div className="p-2">
                <h3 className="text-base font-normal text-green-500 text-center">
                  Unoccupied
                </h3>
                <h3 className="text-base font-normal text-green-500 text-center">
                  {unoccupiedPrivateRooms}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#36393e52] shadow-lg rounded-lg p-2 sm:p-3 xl:p-5 text-center  ">
        <div className="flex items-center justify-center">
          <div className="w-full lg:w-3/4">
            <h3 className="text-xl text-gray-500 text-center">Shared Seats</h3>
            <div className="flex justify-between">
              <div className="p-2">
                <h3 className="text-base font-normal text-red-500 text-center">
                  Occupied
                </h3>
                <h3 className="text-base font-normal text-red-500 text-center">
                  {occupiedSeats}
                </h3>
              </div>
              <div className="p-2">
                <h3 className="text-base font-normal text-green-500 text-center">
                  Unoccupied
                </h3>
                <h3 className="text-base font-normal text-green-500 text-center">
                  {unoccupiedSeats}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#36393e52] shadow-lg rounded-lg p-2 sm:p-3 xl:p-5 text-center">
        <div className="flex items-center justify-center">
          <div className="w-3/4">
            <h3 className="text-xl text-gray-500 text-center">
              Current Residents
            </h3>
            <h1 className="text-2xl py-2">
              {occupiedPrivateRooms + occupiedSeats}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counting;
