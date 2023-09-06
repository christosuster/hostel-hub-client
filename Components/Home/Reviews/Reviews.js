/* eslint-disable @next/next/no-img-element */
import React from "react";
import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
  return (
    <div
      style={{ backgroundColor: "#12131cd9", minHeight: "500px" }}
      className="mt-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row text-center py-20">
          <div className="md:basis-1/4 flex items-center justify-center py-10">
            <div className="flex flex-col items-center font-bold">
              <div className="text-center flex flex-col items-center h-fit bg-white w-48 p-11 text-8xl rounded-full border border-white">
                <h1
                  style={{
                    color: "#12131cd9",
                  }}
                >
                  9.2
                </h1>
              </div>
              <br />
              <small>
                SCORE FROM 356
                <br />
                REVIEWS
              </small>
            </div>
          </div>
          <div
            className="md:basis-1/2 flex justify-center items-center"
            style={{ maxWidth: "800px", minWidth: "300px" }}
          >
            <div style={{ maxWidth: "550px", minWidth: "300px" }}>
              <div className="flex justify-center items-center">
                <ReviewSlider></ReviewSlider>
              </div>
            </div>
          </div>
          <div className="md:basis-1/4 flex items-center justify-center py-10">
            <div style={{ maxWidth: "400px", minWidth: "200px" }} className="">
              <img
                className="object-cover border rounded-full"
                src="https://i.ibb.co/3mxcCzW/Ok-amico.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
