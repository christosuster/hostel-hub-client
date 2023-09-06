import React from "react";

const Occupants = ({ user }) => {
  const date1 = new Date(user.bookedOn);
  const date2 = new Date(user.bookedTill);
  console.log(date1);
  return (
    <tr>
      <td>{user.displayName}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        {date1.toDateString() == "Invalid Date" ? "" : date1.toDateString()}
      </td>
      <td>
        {date2.toDateString() == "Invalid Date" ? "" : date2.toDateString()}
      </td>
    </tr>
  );
};

export default Occupants;
