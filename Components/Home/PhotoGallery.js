/* eslint-disable @next/next/no-img-element */
import React from "react";

const PhotoGallery = () => {
  return (
    <div>
      <section className="my-28">
        <h1 className="text-5xl md:text-8xl font-sansita italic text-orange-500 text-center font-bold ">
          Photogallery
        </h1>
        <p className="text-center font-bold text-gray-500 my-5">
          OUR ACCOMMODATIONS
        </p>
        <div className="container mx-auto px-4 py-4 mt-10 max-w-screen-xl">
          <div className=" grid gap-4 md:grid-cols-3 grid-cols-1">
            <div className="col h-[750px]" data-aos="zoom-in">
              <img
                className="object-cover w-full h-full rounded-lg"
                data-src="img/gallery/full01.jpg"
                src="https://i.ibb.co/F0XX3Hx/full01.jpg"
                alt="media"
                data-ll-status="loaded"
              />
            </div>
            <div
              className="col h-[750px] gird grid-cols-1 gap-4"
              data-aos="zoom-in"
            >
              <div className="col h-[375px]">
                <img
                  className="object-cover w-full h-[370px] rounded-lg"
                  data-src="img/gallery/full09.jpg"
                  src="https://i.ibb.co/McJymL2/room-9.jpg"
                  alt="media"
                  data-ll-status="loaded"
                />
              </div>
              <div className="col h-[375px]">
                <img
                  className="object-cover w-full h-[370px] mt-[5px] rounded-lg"
                  data-src="img/index/gallery04.jpg"
                  src="https://i.ibb.co/bL7vBf8/gallery04.jpg"
                  alt="media"
                  data-ll-status="loaded"
                />
              </div>
            </div>
            <div className="col h-[750px]" data-aos="zoom-in">
              <img
                className="h-full object-cover rounded-lg w-full"
                data-src="img/gallery/full12.jpg"
                src="https://i.ibb.co/Zgk5bVz/full11.jpg"
                alt="media"
                data-ll-status="loaded"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoGallery;
