/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const HelloSection = () => {
  return (
    <div className="h-auto md:h-[90vh] w-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-full">
        <img
          src="https://i.ibb.co/McJymL2/room-9.jpg"
          alt=""
          sizes="100vw"
          className="w-full h-full object-cover -scale-x-100"
        />
      </div>
      <div className="w-full md:w-1/2 h-full p-16 flex flex-col justify-center my-auto">
        <h1 className=" text-orange-500 text-8xl animate-pulse italic font-bold font-sansita">
          Hello!
        </h1>
        <p className="text-gray-500 font-semibold py-5 mb-6">WELCOME THERE!</p>
        <p className="text-gray-300 md:w-3/4 text-xl font-sansita">
          Our hostel is not just a place to stay; it's a nurturing community
          designed especially for students who find themselves far from their
          homes. Our mission is to make this new chapter of your life as
          comfortable and enriching as possible.
        </p>
        <Link
          href="/about-us"
          className="transition duration-300 w-fit p-3 px-5 bg-gray-700 text-white font-bold mt-8 hover:bg-orange-500 "
        >
          MORE ABOUT US
        </Link>
      </div>
    </div>
  );
};

export default HelloSection;
