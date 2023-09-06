import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import RoomContext from "../../contexts/RoomContext";
import Link from "next/link";
import Loading from "../../Shared/Loading/Loading";

const Rooms = () => {
  const { roomData } = useContext(RoomContext);
  return (
    <div>
      <div className="mt-20">
        <h1 className="text-8xl font-sansita italic text-orange-500 text-center font-bold ">
          Rooms
        </h1>
        <p className="text-center font-bold text-gray-500 my-5">
          MORE ACCOMODATIONS
        </p>
      </div>
      {!roomData && <Loading></Loading>}
      {roomData && (
        <div className="container mx-auto p-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              // dynamicBullets: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {roomData?.map((singleData) => {
              return (
                <SwiperSlide key={singleData?._id}>
                  <div
                    style={{
                      backgroundColor: "#36393e52",
                    }}
                    className="shadow-xl font-sansita rounded-lg overflow-hidden"
                  >
                    <div
                      className="bg-cover bg-center h-64 p-4"
                      style={{
                        backgroundImage: `url(${singleData?.image})`,
                      }}
                    ></div>
                    <div className="py-10 px-10 text-white h-64 flex justify-center flex-col">
                      <p className="uppercase tracking-wide text-xl font-bold pb-4">
                        {singleData?.title}
                      </p>
                      <p className="text-xl uppercase font-bold text-gray-200 pb-6">
                        per month{" "}
                        <span className="text-3xl text-orange-500">
                          {singleData?.cost}৳
                        </span>
                      </p>
                      <p>
                        <Link href={`/dashboard/rooms/${singleData._id}`}>
                          <button className="border-[#92a4db] border-2 text-[#92a4db] font-bold hover:bg-[#92a4db] hover:text-black hover:border-[#bad9f9] px-5 py-3 rounded mt-4 m-1">
                            More Info
                          </button>
                        </Link>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            {/* <SwiperSlide>
              <div
                style={{
                  backgroundColor: "#36393e52",
                }}
                className="shadow-xl rounded-lg overflow-hidden"
              >
                <div
                  className="bg-cover bg-center h-64 p-4"
                  style={{
                    backgroundImage:
                      "url(https://cityhostel.axiomthemes.com/wp-content/uploads/2016/12/room-4-740x566.jpg)",
                  }}
                ></div>
                <div className="py-10 px-10 text-white h-64 flex justify-center flex-col">
                  <p className="uppercase tracking-wide text-xl font-bold pb-4">
                    Double Room 2 bed
                  </p>
                  <p className="text-xl uppercase font-bold text-gray-200 pb-6">
                    per month{" "}
                    <span className="text-3xl text-orange-500">$750</span>
                  </p>
                  <p>
                    <button className="border py-3 px-5 uppercase hover:bg-orange-400">
                      More Info
                    </button>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  backgroundColor: "#36393e52",
                }}
                className="shadow-xl rounded-lg overflow-hidden"
              >
                <div
                  className="bg-cover bg-center h-64 p-4"
                  style={{
                    backgroundImage:
                      "url(https://cityhostel.axiomthemes.com/wp-content/uploads/2016/12/room-8-740x566.jpg)",
                  }}
                ></div>
                <div className="py-10 px-10 text-white h-64 flex justify-center flex-col">
                  <p className="uppercase tracking-wide text-xl font-bold pb-4">
                    Double Room 2 bed
                  </p>
                  <p className="text-xl uppercase font-bold text-gray-200 pb-6">
                    per month{" "}
                    <span className="text-3xl text-orange-500">$750</span>
                  </p>
                  <p>
                    <button className="border py-3 px-5 uppercase hover:bg-orange-400">
                      More Info
                    </button>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  backgroundColor: "#36393e52",
                }}
                className="shadow-xl rounded-lg overflow-hidden"
              >
                <div
                  className="bg-cover bg-center h-64 p-4"
                  style={{
                    backgroundImage:
                      "url(https://cityhostel.axiomthemes.com/wp-content/uploads/2016/12/room-9-740x566.jpg)",
                  }}
                ></div>
                <div className="py-10 px-10 text-white h-64 flex justify-center flex-col">
                  <p className="uppercase tracking-wide text-xl font-bold pb-4">
                    Double Room 2 bed
                  </p>
                  <p className="text-xl uppercase font-bold text-gray-200 pb-6">
                    per month{" "}
                    <span className="text-3xl text-orange-500">$750</span>
                  </p>
                  <p>
                    <button className="border py-3 px-5 uppercase hover:bg-orange-400">
                      More Info
                    </button>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  backgroundColor: "#36393e52",
                }}
                className="shadow-xl rounded-lg overflow-hidden"
              >
                <div
                  className="bg-cover bg-center h-64 p-4"
                  style={{
                    backgroundImage:
                      "url(https://cityhostel.axiomthemes.com/wp-content/uploads/2016/12/room-4-740x566.jpg)",
                  }}
                ></div>
                <div className="py-10 px-10 text-white h-64 flex justify-center flex-col">
                  <p className="uppercase tracking-wide text-xl font-bold pb-4">
                    Double Room 2 bed
                  </p>
                  <p className="text-xl uppercase font-bold text-gray-200 pb-6">
                    per month{" "}
                    <span className="text-3xl text-orange-500">$750</span>
                  </p>
                  <p>
                    <button className="border py-3 px-5 uppercase hover:bg-orange-400">
                      More Info
                    </button>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  backgroundColor: "#36393e52",
                }}
                className="shadow-xl rounded-lg overflow-hidden"
              >
                <div
                  className="bg-cover bg-center h-64 p-4"
                  style={{
                    backgroundImage:
                      "url(https://cityhostel.axiomthemes.com/wp-content/uploads/2016/12/room-8-740x566.jpg)",
                  }}
                ></div>
                <div className="py-10 px-10 text-white h-64 flex justify-center flex-col">
                  <p className="uppercase tracking-wide text-xl font-bold pb-4">
                    Double Room 2 bed
                  </p>
                  <p className="text-xl uppercase font-bold text-gray-200 pb-6">
                    per month{" "}
                    <span className="text-3xl text-orange-500">$750</span>
                  </p>
                  <p>
                    <button className="border py-3 px-5 uppercase hover:bg-orange-400">
                      More Info
                    </button>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  backgroundColor: "#36393e52",
                }}
                className="shadow-xl rounded-lg overflow-hidden"
              >
                <div
                  className="bg-cover bg-center h-64 p-4"
                  style={{
                    backgroundImage:
                      "url(https://cityhostel.axiomthemes.com/wp-content/uploads/2016/12/room-9-740x566.jpg)",
                  }}
                ></div>
                <div className="py-10 px-10 text-white h-64 flex justify-center flex-col">
                  <p className="uppercase tracking-wide text-xl font-bold pb-4">
                    Double Room 2 bed
                  </p>
                  <p className="text-xl uppercase font-bold text-gray-200 pb-6">
                    per month{" "}
                    <span className="text-3xl text-orange-500">$750</span>
                  </p>
                  <p>
                    <button className="border py-3 px-5 uppercase hover:bg-orange-400">
                      More Info
                    </button>
                  </p>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
          {/* <Swiper {...swiperParams}>
            {roomData?.map((data) => {
              return (
                <div key={data._id}>
                  <h1>{data.title}</h1>
                </div>
              );
            })}
          </Swiper> */}
        </div>
      )}
    </div>
  );
};

export default Rooms;
