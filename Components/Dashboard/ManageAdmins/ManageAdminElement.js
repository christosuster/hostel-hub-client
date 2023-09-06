import Link from "next/link";

const ManageAdminElement = ({ data, remainingUsers }) => {
  const removeAdmin = () => {
    swal({
      title: "Are you sure?",
      text: "Once remove, user role will be changed!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        remainingUsers(data._id);
        fetch(`http://localhost:5000/users`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then(() =>
            swal("Admin removed successfully!", {
              icon: "success",
            })
          )
          .then((data) => console.log(data));

        // const remainingRoom = roomData.filter((room) => room._id !== id);
        // setRoomData(remainingRoom);
      }
    });
    //   const agree = window.confirm(
    //     "Are you sure you want to remove this user from Admin position?"
    //   );

    //   if (agree) {
    //     remainingUsers(data._id);
    //     fetch(`http://localhost:5000/users`, {
    //       method: "PUT",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify(data),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => console.log(data));
    //   }
  };
  return (
    <tr>
      <td>{data.displayName}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
      <td className="float-right">
        <Link href={`/dashboard/manage-user/${data._id}`}>
          <button className="mx-2 bg-green-400 py-1 px-3 text-gray-800 font-bold rounded hover:bg-green-600">
            View
          </button>
        </Link>

        <button
          className="mx-2 bg-red-400 py-1 px-3 text-gray-800 font-bold rounded hover:bg-red-600"
          onClick={removeAdmin}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default ManageAdminElement;
