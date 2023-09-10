import { useRouter } from "next/router";
import Layout from "../../../../../Components/Dashboard/Layout";
import authCheck from "../../../../../Components/Firebase/authCheck";
import { useEffect, useState } from "react";
import useAuth from "../../../../../Components/Firebase/useAuth";

const RoomBooking = () => {
  const [room, setRoom] = useState({});
  const [payInfo, setPayInfo] = useState({});
  const { user, userInfo } = useAuth();
  const router = useRouter();
  const id = router.query.roomBookingId;
  useEffect(() => {
    fetch(`https://hostel-hub-yg4y.onrender.com/rooms/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRoom(data);
        // console.log(data);
      })
      .then(() => {
        fetch(`https://hostel-hub-yg4y.onrender.com/payments/${userInfo?._id}`)
          .then((res) => res.json())
          .then((data) => {
            setPayInfo(data);
            // console.log(data);
          });
      });
  }, [userInfo, id]);

  const order = () => {
    const invoicePrice =
      parseInt(room.cost) +
      5000 -
      parseInt(payInfo?.advance) +
      parseInt(payInfo?.due);
    const data = {
      room: room,
      payInfo: payInfo,
      user: userInfo,
      invoice: invoicePrice,
      productCategory: "Room Booking",
    };
    console.log(data);
    fetch("https://hostel-hub-yg4y.onrender.com/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => window.location.replace(result.url));
  };
  return (
    <Layout>
      <div className="min-h-[80vh]">
        <div className="relative h-40 bg-fixed bg-[url('https://i.ibb.co/p3qb5xF/back12.jpg')] bg-no-repeat bg-cover bg-bottom mb-10">
          <div className="bg-gray-800 h-full opacity-80 "></div>
          <h1 className="absolute left-1/2 top-1/2 text-4xl font-bold text-white -translate-x-1/2 -translate-y-1/2">
            Book Room
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="text-center card w-full mx-auto">
            <h1 className="text-2xl mb-3">ROOM INFO</h1>
            <div className="grid grid-cols-2 gap-12">
              <div className="text-right">
                <h1>Room Type</h1>
                <h1>Branch</h1>
                <h1>Rent</h1>
                <h1>Bathroom</h1>
                <h1>Balcony</h1>
              </div>
              <div className="text-left">
                <h1>{room?.category == "Economic" ? "Shared" : "Private"}</h1>
                <h1>{room?.branch}</h1>
                <h1>৳ {room?.cost}</h1>
                <h1>{room?.attachedBathroom}</h1>
                <h1>{room?.attachedBalcony}</h1>
              </div>
            </div>
          </div>
          <div className="text-center card w-full mx-auto">
            <h1 className="text-2xl mb-3">BILL</h1>
            <div className="grid grid-cols-2 gap-12 border-b-2">
              <div className="text-right">
                <h1>Room Rent</h1>
                <h1>Security Deposit</h1>
                <h1>Previous Dues</h1>
              </div>
              <div className="text-left">
                <h1>৳ {parseInt(room?.cost)}</h1>
                <h1>৳ {5000 - parseInt(payInfo?.advance)}</h1>
                <h1>৳ {parseInt(payInfo?.due)}</h1>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12 text-xl font-extrabold">
              <div className="text-right">
                <h1>Total</h1>
              </div>
              <div className="text-left">
                <h1>
                  ৳{" "}
                  {parseInt(room.cost) +
                    5000 -
                    parseInt(payInfo?.advance) +
                    parseInt(payInfo?.due)}
                </h1>
              </div>
            </div>
            <button className="button my-3" onClick={order}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default authCheck(RoomBooking);
