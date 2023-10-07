import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";
import Loading from "../../Shared/Loading/Loading";
import swal from "sweetalert";
import { RiInformationLine } from "react-icons/ri";
import { Tooltip } from "react-tooltip";

const Withdraw = () => {
  const [isLoading, setIsLoading] = useState();
  const [payments, setPayments] = useState();
  const [payData, setPayData] = useState();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setIsLoading(true);
    fetch("https://hostel-hub-yg4y.onrender.com/payments")
      .then((res) => res.json())
      .then((data) => setPayments(data))
      .then(() => setIsLoading(false));
  }, []);

  const submitHandler = (info) => {
    console.log(info);
    const pay = payments?.find(
      (singlePay) => singlePay?.email === info?.search
    );
    setPayData(pay);
    if (!pay) {
      swal("Pay account doesn't exist!", {
        icon: "warning",
      });
    }
    reset();
  };

  const handleWithdraw = (id) => {
    if (parseInt(payData?.advance) - parseInt(payData?.due) <= 0) {
      swal("Invalid withdraw amount!", {
        icon: "error",
      });
    } else {
      swal({
        title: "Are you sure?",
        text: "User won't be able to use system without security deposit",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((yes) => {
        if (yes) {
          fetch(`https://hostel-hub-yg4y.onrender.com/withdraw/${id}`, {
            method: "PUT",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                console.log(data);
                swal("Withdrawn amount successfully", {
                  icon: "success",
                });

                const remainingPay = payments?.filter(
                  (payCheck) => payCheck._id !== id
                );
                setPayments(remainingPay);
                setPayData(null);
              }
            })
            .then((data) => console.log(data));
        }
      });
    }
  };

  return (
    <div className="min-h-[85vh]">
      {isLoading && <Loading></Loading>}
      {!isLoading && (
        <div className="flex card flex-col justify-center items-center w-full rounded-lg p-4">
          <div className="relative w-full flex my-2 mb-10 items-center">
            <h1 className="mx-auto  text-3xl ">Withdraw Security Deposit</h1>
          </div>

          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex justify-center items-center"
          >
            <input
              required
              className="rounded-md h-10 min-w-[300px] p-2 text-lg"
              type="text"
              name="search"
              {...register("search")}
              placeholder="Email of user"
            />
            <input
              className="rounded-md h-10 ml-1 button cursor-pointer border-2 p-2 text-lg"
              type="submit"
              value="Submit"
            />
          </form>
          {payData && (
            <div className=" w-full card py-8">
              <div className="w-full md:w-1/2">
                <h1 className="text-sm text-gray-500 leading-3 text-center mb-4">
                  User Information
                </h1>
                <h1 className="text-center text-2xl ">{payData?.name}</h1>
                <h1 className="text-center">{payData?.email}</h1>
                <h1 className="text-center mb-4">{payData?.phone}</h1>

                <div className=" w-full p-5 mx-auto bg-neutral-900">
                  <h1 className="flex justify-between text-xl">
                    <span>Security Deposit</span>
                    <span>
                      <span className=" text-orange-500">৳</span>{" "}
                      {payData?.advance}
                    </span>
                  </h1>
                  <h1 className="flex justify-between text-xl">
                    <span>Dues </span>
                    <span>
                      ( <span className=" text-orange-500">৳</span>{" "}
                      {payData?.due} )
                    </span>
                  </h1>
                  <hr className="my-1" />
                  <h1 className="flex justify-between text-xl">
                    <span>Withdraw Amount </span>
                    <span>
                      <span className=" text-orange-500">৳</span>{" "}
                      {parseInt(payData?.advance) - parseInt(payData?.due)}
                    </span>
                  </h1>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    onClick={() => {
                      handleWithdraw(payData?._id);
                    }}
                    className="button mt-3"
                  >
                    Confirm Withdraw
                  </button>
                </div>
              </div>
              {/* <div className="bg-[#36393e82] lg:w-1/2 w-full shadow-lg rounded-lg p-4 mt-2">
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      User's Payment History
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="overflow-x-auto rounded-lg h-60 border border-gray-700">
                    <div className="align-middle inline-block min-w-full">
                      <div className="shadow overflow-hidden sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 text-white">
                          <thead className=" bg-[#36393e52]">
                            <tr>
                              <th
                                scope="col"
                                className="p-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                              >
                                Date
                              </th>
                              <th
                                scope="col"
                                className="p-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                              >
                                Time
                              </th>
                              <th
                                scope="col"
                                className="p-4 text-right text-xs font-medium text-white uppercase tracking-wider"
                              >
                                Amount
                              </th>
                            </tr>
                          </thead>
                          <tbody className=" bg-[#36393e52]">
                            {payData?.paymentHistory?.map((singlePay, i) => {
                              const payDate = new Date(singlePay?.date);
                              return (
                                <tr
                                  className={`${!(i % 2) && "bg-[#36393e82]"}`}
                                  key={i}
                                >
                                  <td className="p-4 whitespace-nowrap text-sm font-normal text-white">
                                    {payDate.toDateString()}
                                  </td>
                                  <td className="p-4 whitespace-nowrap text-sm font-normal text-white">
                                    {singlePay?.time}
                                  </td>
                                  <td className="p-4 text-right whitespace-nowrap text-sm font-semibold text-white">
                                    {singlePay?.amount}৳
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          )}
          <div className="flex flex-col my-8 w-full">
            <div className="overflow-x-auto rounded-lg h-[550px] border border-gray-700">
              <div className="align-middle inline-block min-w-full">
                <div className="shadow overflow-hidden sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 text-white">
                    <thead className=" bg-[#36393e52]">
                      <tr>
                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                          Phone
                        </th>

                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                          Dues
                        </th>
                      </tr>
                    </thead>
                    <tbody className=" bg-[#36393e52]">
                      {payments?.map((singlePayment, i) => {
                        const firstPay = new Date(
                          singlePayment?.paymentHistory[0]?.date
                        );
                        return (
                          <tr
                            className={`${i % 2 && "bg-[#36393e82]"}`}
                            key={singlePayment?._id}
                          >
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-white">
                              {singlePayment?.email}
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-white">
                              {singlePayment?.name}
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-white">
                              {singlePayment?.phone}
                            </td>

                            <td className="p-4 whitespace-nowrap text-sm font-normal text-white">
                              ৳ {singlePayment?.due}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Withdraw;
