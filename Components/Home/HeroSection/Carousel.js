/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 5000);
  });

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => {
          return (
            /* (condition) ? true : false */

            <div
              key={index}
              className={
                index == current
                  ? "carousel_card font-bold carousel_card-active"
                  : "carousel_card font-bold"
              }
            >
              <img className="card_image" src={image.image} alt="" />
              <div className="card_overlay">
                <div className="container mx-auto p-4">
                  <div className="card_title">
                    <h2 className="md:text-[100px] text-[50px]">
                      {image.title}
                      <br />
                      {image.title1}
                    </h2>
                    <br />
                    <br />
                    <p className="text-xl">
                      From{" "}
                      <span className="text-4xl text-orange-500">
                        ৳{image.price}
                      </span>{" "}
                      / month
                    </p>
                    <br />
                    <br />
                    <Link href="/dashboard/rooms">
                      <button
                        style={{
                          transition: "0.5s ease-in-out",
                        }}
                        className="border p-3 hover:bg-orange-400 hover:border-orange-400"
                      >
                        BOOK NOW!
                      </button>
                    </Link>
                  </div>
                </div>

                <br />
                {/* <h2 className="card_title">{image.title}</h2><br/>
                <h2 className="card_title">{image.title}</h2><br/> */}
              </div>
            </div>
          );
        })}
        {/* <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div> */}
        <div className="carousel_pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
