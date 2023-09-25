import React from "react";

const RoomLeaving = ({ orders }) => {
  return (
    <>
      <div className=" bg-[#36393e52] shadow-lg rounded-lg p-4 sm:p-6 xl:p-8 ">
        <h3 className="text-xl leading-none font-bold text-white mb-10">
          Latest Payments
        </h3>
        <div className="block w-full h-[17rem] overflow-auto rounded-lg">
          <table className="items-center w-full bg-transparent border-collapse bg-zinc-800 rounded">
            <thead className="bg-zinc-900">
              <tr>
                <th className="px-4  text-gray-50 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                  EMAIL
                </th>
                <th className="px-4  text-gray-50 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                  Payment amount
                </th>
                <th className="px-4  text-gray-50 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-[#36393e52]">
              {/* {payments?.map((payment, i) => {
                const idx = payment?.paymentHistory?.length - 1;
                return payment?.paymentHistory?.length > 0 ? (
                  <tr key={payment?._id} className="text-gray-50">
                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                      {payment?.email}
                    </th>
                    <td className="border-t-0 px-4 align-middle text text-xs font-medium text-gray-90 whitespace-nowrap p-4">
                      ৳ {payment?.paymentHistory[idx]?.amount}
                    </td>
                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-90 whitespace-nowrap p-4">
                      {payment?.paymentHistory[idx]?.date}
                    </td>
                  </tr>
                ) : (
                  ""
                );
              })} */}

              {orders?.map((order) => {
                return (
                  order?.paidStatus && (
                    <tr key={order?._id} className="text-gray-50">
                      <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                        {order?.reqBody?.user?.email}
                      </th>
                      <td className="border-t-0 px-4 align-middle text text-xs font-medium text-gray-90 whitespace-nowrap p-4">
                        ৳ {order?.reqBody?.invoice}
                      </td>
                      <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-90 whitespace-nowrap p-4">
                        {order?.date}
                      </td>
                    </tr>
                  )
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RoomLeaving;
