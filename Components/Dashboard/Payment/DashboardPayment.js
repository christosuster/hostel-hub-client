import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import useAuth from "../../Firebase/useAuth";

const DashboardPayment = ({ payInfo }) => {
  const { user, userInfo } = useAuth();
  console.log(payInfo);
  const router = useRouter();
  const handleSubmit = (event) => {
    if (userInfo) {
      swal({
        title: "Are you sure?",
        text: "You want to pay?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          const form = event.target;
          event.preventDefault();
          const paymentData = {
            id: payInfo?._id,
            amount: parseInt(payInfo?.rent) + parseInt(payInfo?.due),
          };
          fetch("https://hostel-hub-yg4y.onrender.com/payments", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(paymentData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                swal("Payment successful!", {
                  icon: "success",
                }).then(() => {
                  form.reset();
                  router.replace("/dashboard");
                });
              }
            })
            .catch((error) => console.error(error));
        }
      });
    } else {
      swal("User not found! Please refresh the page and try again.", {
        icon: "warning",
      });
    }
    event.preventDefault();
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <div className="py-5 px-3 container mx-auto my-10">
        <div className="">
          <div className=" card">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col md:flex-row items-center">
                <div className="px-3 md:w-1/2 w-full">
                  <h3 className="pb-5 text-3xl font-bold ">Billing</h3>
                  <div className="px-3 w-full pt-5 pb-10 mx-auto">
                    {payInfo && (
                      <h1 className="flex justify-between text-2xl">
                        <span>Room rent: </span>
                        <span>
                          {payInfo?.rent}
                          <span className=" text-orange-500">৳</span>
                        </span>
                      </h1>
                    )}
                    {payInfo && (
                      <h1 className="flex justify-between text-2xl">
                        <span>Meal Due:</span>
                        <span>
                          {payInfo?.due}
                          <span className=" text-orange-500">৳</span>
                        </span>
                      </h1>
                    )}
                    <hr className="my-1" />
                    {payInfo && (
                      <h1 className="flex justify-between text-2xl">
                        <span>Total </span>
                        <span>
                          {parseInt(payInfo?.rent) + parseInt(payInfo?.due)}
                          <span className=" text-orange-500">৳</span>
                        </span>
                      </h1>
                    )}
                  </div>
                </div>
                <div className="px-3 md:w-1/2">
                  <h3 className="pb-5 text-3xl font-bold ">Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i
                      className="fa fa-cc-visa p-2 rounded-l bg-white"
                      style={{ color: "navy" }}
                    ></i>
                    <i
                      className="fa fa-cc-amex p-2 bg-white"
                      style={{ color: "blue" }}
                    ></i>
                    <i
                      className="fa fa-cc-mastercard p-2 bg-white"
                      style={{ color: "red" }}
                    ></i>
                    <i
                      className="fa fa-cc-discover p-2 rounded-r bg-white"
                      style={{ color: "orange" }}
                    ></i>
                  </div>
                  <label htmlFor="cname">Cardholder Name</label>
                  <input
                    type="text"
                    className="w-full p-3 mb-4 border rounded mt-1"
                    id="cname"
                    name="cardname"
                    placeholder="John Doe"
                    required
                  />
                  <label htmlFor="ccnum">Card Number</label>
                  <input
                    type="text"
                    className="w-full p-3 mb-4 border rounded mt-1"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    required
                  />
                  {/* <label htmlFor="expmonth">Exp Month</label>
                  <select
                    name="expmonth"
                    className=" h-14 w-full cursor-pointer rounded-lg border-2 p-3 text-lg "
                  >
                    <option className="hidden">Select Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select> */}
                  {/* <input
                    type="text"
                    className="w-full p-3 mb-4 border rounded mt-1"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                    required
                  /> */}
                  <div className="flex flex-col md:flex-row">
                    <div className="md:pr-2 md:w-1/2">
                      <label htmlFor="expyear">Expiry Date</label>
                      <input
                        type="text"
                        className="w-full p-3 mb-4 border rounded mt-1"
                        id="expyear"
                        name="expyear"
                        placeholder="MM / YY"
                        required
                      />
                    </div>
                    <div className="md:pl-2 md:w-1/2">
                      <label htmlFor="cvv">CVC / CVV</label>
                      <input
                        type="text"
                        className="w-full p-3 mb-4 border rounded mt-1"
                        id="cvv"
                        name="cvv"
                        placeholder="xxx"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <label className="p-3">
                <input type="checkbox" name="sameadr" /> Shipping address same
                as billing
              </label> */}
              <input
                type="submit"
                value="Continue to checkout"
                className="btn  uppercase transition duration-300 bg-gray-700 font-bold hover:bg-orange-500"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPayment;
