import React from "react";
import HelloSection from "../HelloSection";
import Carousel from "../HeroSection/Carousel";
import { banner_images } from "../HeroSection/Data";
import Facilities from "../Facilities/Facilities";
import Contacts from "../Contacts";
import StayTuned from "../StayTuned";
import Rooms from "../Rooms/Rooms";
import Reviews from "../Reviews/Reviews";
import Rating from "../Rating";
import BookingStages from "../BookingStages";
import Meal from "../Meal";
import PhotoGallery from "../PhotoGallery";

const MainHome = () => {
  return (
    <div className="text-white">
      <Carousel images={banner_images}></Carousel>
      <Rating></Rating>
      <HelloSection></HelloSection>
      <BookingStages></BookingStages>
      {/* <Rooms></Rooms> */}
      <Reviews></Reviews>
      <Facilities />
      <Meal></Meal>
      <PhotoGallery></PhotoGallery>
      <StayTuned />
      <Contacts />
    </div>
  );
};

export default MainHome;
