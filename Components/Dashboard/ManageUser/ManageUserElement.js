import Link from "next/link";
import { useEffect, useState } from "react";

const ManageUserElement = ({ data, remainingUsers, idx }) => {
  const [payments, setPayments] = useState({});
  const [roomBookedTill, setRoomBookedTill] = useState();
  const [today, setToday] = useState(new Date(new Date().setHours(0, 0, 0, 0)));
  const [overdueDate, setOverdueDate] = useState();

  useEffect(() => {
    fetch(`https://hostel-hub-yg4y.onrender.com/payments/${data._id}`)
      .then((res) => res.json())
      .then((data) => {
        setPayments(data);
      });

    const now = new Date(data.bookedTill);
    now.setMonth(now.getMonth() - 1);
    now.setDate(now.getDate() + 10);

    setOverdueDate(now);
  }, [data]);

  console.log(payments, data, overdueDate, today);

  const deleteItem = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        remainingUsers(data._id);
        fetch(`https://hostel-hub-yg4y.onrender.com/users/${data._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() =>
            swal("User delete successful!", {
              icon: "success",
            })
          )
          .then((data) => console.log(data));
      }
    });
  };
  return (
    <tr className={idx % 2 == 0 ? "bg-neutral-800" : "bg-neutral-900"}>
      <td className="">
        <div className="flex items-center">
          <img src={data.image} alt="" className="rounded-full w-10 h-10" />
          <div className="mx-2">
            <h1 className="font-bold">{data.displayName}</h1>
            <h1 className="text-gray-400">{data.email}</h1>
            <h1 className="text-gray-400">{data.phone}</h1>
          </div>
        </div>
      </td>
      <td className="text-center">
        {data?.room != "" &&
          data?.room != {} &&
          data?.room?.category == "Economic" &&
          "Shared Room"}
        {data?.room != "" &&
          data?.room != {} &&
          data?.room?.category == "Business" &&
          "Private Room"}
        <br />
        {parseInt(payments?.due) >= parseInt(payments?.advance) && (
          <span className="text-red-500 animate-pulse">OVERDUE!</span>
        )}
      </td>
      <td className="text-right ">
        <Link href={`/dashboard/manage-user/${data._id}`}>
          <button className="mx-2 bg-green-400 py-1 px-3 text-gray-800 font-bold rounded hover:bg-green-600">
            View
          </button>
        </Link>

        <button
          className="mx-2 bg-red-400 py-1 px-3 text-gray-800 font-bold rounded hover:bg-red-500"
          onClick={deleteItem}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageUserElement;
