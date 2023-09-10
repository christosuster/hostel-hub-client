import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import authCheck from "../../../Components/Firebase/authCheck";
import useAuth from "../../../Components/Firebase/useAuth";
import MainLayout from "../../../Components/MainLayout/MainLayout";
import MainPayment from "../../../Components/Payment/MainPayment";
import Loading from "../../../Components/Shared/Loading/Loading";

const PaymentInstallation = () => {
  const { user, userInfo } = useAuth();
  const router = useRouter();
  const id = router.query.paymentId;
  const [room, setRoom] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [payInfo, setPayInfo] = useState();
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://hostel-hub-yg4y.onrender.com/rooms/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRoom(data);
        console.log(data);
      })
      .then(() => {
        fetch(`https://hostel-hub-yg4y.onrender.com/payments/${userInfo?._id}`)
          .then((res) => res.json())
          .then((data) => {
            setPayInfo(data);
            setIsLoading(false);
            console.log(data);
          });
      });
  }, [userInfo, id]);
  return (
    <MainLayout>
      <div className=" font-sansita">
        <div className="relative h-40 bg-fixed bg-[url('https://i.ibb.co/mF5GQj9/image.png')] bg-no-repeat bg-cover bg-center ">
          <div className="bg-gray-800 h-full w-full opacity-80 "></div>
          <h1 className="absolute left-1/2 top-1/2 text-4xl font-bold text-white -translate-x-1/2 -translate-y-1/2">
            Payment
          </h1>
        </div>
        {isLoading && <Loading></Loading>}
        {!isLoading && (
          <MainPayment payInfo={payInfo} room={room}></MainPayment>
        )}
      </div>
    </MainLayout>
  );
};

export default authCheck(PaymentInstallation);
