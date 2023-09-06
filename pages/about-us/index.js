import MainLayout from "../../Components/MainLayout/MainLayout";

export default function AboutUs() {
  return (
    <MainLayout>
      <div className="">
        <div className="relative h-60 bg-fixed bg-[url('https://images.squarespace-cdn.com/content/v1/5a983dee45776ed3e63d5f04/1665084411190-M39CTJI658E9JTSBH9C7/4+dorm.jpg')] bg-no-repeat bg-cover bg-bottom">
          <div className="bg-gray-800 h-full w-full opacity-80 "></div>
          <h1 className="absolute left-1/2 top-1/2 text-4xl font-bold text-white -translate-x-1/2 -translate-y-1/2">
            About Us
          </h1>
        </div>
        <div className="text-center h-screen flex flex-col justify-center items-center">
          <h1 className="text-6xl text-orange-500 font-bold pb-20">
            Super Hostel
          </h1>
          <p className="text-gray-300 w-3/4 md:w-1/2">
            Welcome to Universal Hostel, where travelers from around the world
            find a home away from home. Nestled in the heart of Dhaka, we are
            dedicated to providing a truly memorable and immersive experience
            for every guest who walks through our doors.
          </p>
          <br />
          <p className="text-gray-300 w-3/4 md:w-1/2">
            Universal Hostel began as a vision to create a space that transcends
            boundaries, connecting diverse cultures and fostering a sense of
            global community. Our founders, avid travelers themselves, realized
            the need for a place that not only offers comfortable accommodations
            but also celebrates the spirit of adventure and exploration. With
            this mission in mind, Universal Hostel was born.
          </p>
          <div className="bg-orange-500 p-5 rounded-full aspect-square text-white font-bold mt-10 border-dashed border-4 border-[#1e2124]">
            <h1>BEST</h1>
            <h1>HOSTEL</h1>
            <h1>2020</h1>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
