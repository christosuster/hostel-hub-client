import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReviewData } from "./ReviewData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

const ReviewSlider = () => {
  return (
    <div style={{ width: "-webkit-fill-available" }}>
      <div className="px-2">
        <h1 className="text-6xl float-left font-sansita italic text-white text-center font-bold ">
          Guests say:
        </h1>
      </div>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {ReviewData.map((r) => {
          return (
            <SwiperSlide key={r.name}>
              <div className="text-left px-2 font-sansita">
                <h1 className=" font-bold text-orange-300 text-3xl">
                  {r.name}
                </h1>
                <p className="text-2xl">“{r.review}”</p>
              </div>
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide>
          <div className="text-left px-2 font-sansita">
            <h1 className=" font-bold text-orange-300 text-3xl">Robin hood</h1>
            <p className="text-2xl">
              “Inventore placeat similique error molestias! Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Voluptas amet incidunt
              velit, a ratione quia.”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-left px-2 font-sansita">
            <h1 className=" font-bold text-orange-300 text-3xl">Hood Rovin</h1>
            <p className="text-2xl">
              “Voluptas amet incidunt velit, a ratione quia. Lorem ipsum dolor
              sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Inventore placeat similique error molestias! ”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-left px-2 font-sansita">
            <h1 className=" font-bold text-orange-300 text-3xl">Tita saat</h1>
            <p className="text-2xl">
              “Thank you for a perfect stay, every thing was very clean and
              tidy. We were in a private room with a private restroom. Breakfast
              included, very active bar space and funny people, atmosfere was
              really nice.”
            </p>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
