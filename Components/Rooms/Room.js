/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Room(props) {
  const room = props.data.room;
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
        {room?.category == "Economic" && (
          <h1 className="font-bold bg-[#1656f98f] w-fit p-1 rounded-lg">
            Shared
          </h1>
        )}
        {room?.category == "Business" && (
          <h1 className="font-bold bg-[#f973168f] w-fit p-1 rounded-lg">
            Private
          </h1>
        )}
      </div>
      <div className="py-10 px-10 text-white h-64 flex justify-center flex-col text-center">
        <p className="uppercase tracking-wide text-xl font-bold pb-4">
          {room?.title}
        </p>
        <p className="text-xl uppercase font-bold text-gray-200 pb-6">
          per month{" "}
          <span className="text-3xl text-orange-500">{room?.cost}৳</span>
        </p>
        <div>
          <Link href={`/dashboard/rooms/${room._id}`}>
            <button className="button mt-4 m-1">View Details</button>
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
    //     <Link href={`/rooms/${room._id}`}>
    //       <button className="button mt-4 m-1">View Details</button>
    //     </Link>
    //   </div>
    // </div>
  );
}
