import React, { useEffect, useState } from "react";
import Layout from "../../Components/Dashboard/Layout";
import AuthCheck from "../../Components/Firebase/AuthCheck";
import MainPayment from "../../Components/Payment/MainPayment";
import swal from "sweetalert";
import useAuth from "../../Components/Firebase/useAuth";
import { useRouter } from "next/router";
import DashboardPayment from "../../Components/Dashboard/Payment/DashboardPayment";
import Loading from "../../Components/Shared/Loading/Loading";

const Payment = () => {
  const { user, userInfo } = useAuth();
  const router = useRouter();
  const id = router.query.paymentId;
  const [isLoading, setIsLoading] = useState(false);
  const [payInfo, setPayInfo] = useState({});
  const [paymentAmount, setPaymentAmount] = useState(0);

  const handleChange = (event) => {
    setPaymentAmount(event.target.value);
  };
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://hostel-hub-yg4y.onrender.com/payments/${userInfo?._id}`)
      .then((res) => res.json())
      .then((data) => {
        setPayInfo(data);
        setIsLoading(false);
      });
  }, [userInfo, id]);

  const makePayment = () => {
    if (paymentAmount <= 0) {
      swal("Please enter a valid amount!", {
        icon: "error",
      });
    } else {
      const invoicePrice =
        parseInt(paymentAmount) > parseInt(payInfo?.due)
          ? parseInt(payInfo?.due)
          : parseInt(paymentAmount);

      const data = {
        payInfo: payInfo,
        user: userInfo,
        invoice: invoicePrice,
        productCategory: "Payment",
      };
      console.log(data);
      fetch("https://hostel-hub-yg4y.onrender.com/order", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => window.location.replace(result.url));
    }
  };

  return (
    <Layout>
      <div className="min-h-[80vh]">
        <div className="relative h-40 bg-fixed bg-[url('https://i.ibb.co/mF5GQj9/image.png')] bg-no-repeat bg-cover bg-center ">
          <div className="bg-gray-800 h-full w-full opacity-80 "></div>
          <h1 className="absolute left-1/2 top-1/2 text-4xl font-bold text-white -translate-x-1/2 -translate-y-1/2">
            Payment
          </h1>
        </div>
        <div className="my-2">
          <div className="card w-full grid grid-cols-4 gap-2">
            <div className="flex justify-center items-center flex-col p-3 rounded-lg text-center bg-slate-900 h-full">
              <h1 className="underline underline-offset-2">Total Dues</h1>
              <h1 className=" py-2 text-2xl text-red-600">
                ৳ {parseInt(payInfo?.due)}
              </h1>
            </div>
            <div className="bg-slate-900 flex flex-col col-span-3 p-3 rounded-lg">
              <h1>I want to pay ৳:</h1>
              <div className="w-full gap-2 flex items-center justify-center">
                <input
                  onChange={handleChange}
                  value={paymentAmount}
                  className="m-0 p-2 w-3/4 bg-black"
                  type="number"
                  placeholder="Enter your payment amount"
                />
                <button className="w-1/4 button" onClick={makePayment}>
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="card my-2">
            <div className="h-[400px] overflow-y-scroll relative w-full">
              <table className="w-full text-center bg-slate-900">
                <thead className="sticky top-0 w-full">
                  <tr className="bg-black">
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {payInfo?.paymentHistory?.toReversed().map((e, i) => {
                    return (
                      <tr key={i} className="border-b-2">
                        <td className="flex flex-col items-center justify-center">
                          {e.date} <span className="text-xs">{e.time}</span>
                        </td>
                        {e?.type == "Payment" ? (
                          <td className="text-green-500 font-bold">
                            ( ৳{e.amount} )
                          </td>
                        ) : (
                          <td className="text-red-500 font-bold">
                            {" "}
                            ৳{e.amount}{" "}
                          </td>
                        )}

                        {e?.type == "Payment" ? (
                          <td>{e.type}</td>
                        ) : (
                          <td className="flex flex-col items-center justify-center">
                            <span className="text-xs leading-3 text-red-600 m-0 p-0">
                              INVOICE
                            </span>
                            {e.type}
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthCheck(Payment);
