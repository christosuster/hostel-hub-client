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
      <div className="px-8 py-5 text-white h-64 flex justify-center flex-col text-center">
        <p className="tracking-wide text-2xl font-bold pb-4">{room?.title}</p>
        <p className="text-xl text-gray-200 pb-6">
          <span className="text-xl text-orange-500">৳ </span>
          {room?.cost}
          <span className="text-base text-gray-500"> / month </span>
        </p>
        <div className="h-full flex items-end justify-center">
          <Link href={`/dashboard/rooms/${room._id}`}>
            <button className="button mt-4 m-1">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
