import React, { useState } from "react";
import adminCheck from "../../Firebase/adminCheck";
import authCheck from "../../Firebase/authCheck";
import swal from "sweetalert";

const AddAdminMain = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };

    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount) {
          //   setSuccess(true);
          swal("Successful!", {
            icon: "success",
          });
          document.getElementById("make-admin").reset();
        } else {
          swal("Unsuccessful!", {
            icon: "error",
          });
          document.getElementById("make-admin").reset();
        }
      });

    e.preventDefault();
  };
  return (
    <div className="card-design w-full md:w-2/3 lg:w-1/2 p-3 m-auto my-5">
      <div className="pt-5 ">
        <h2 className=" text-xl text-center">Add New Admin</h2>
        <form
          id="make-admin"
          className="my-5 text-center mx-auto"
          onSubmit={handleAdminSubmit}
          style={{ maxWidth: "25rem" }}
        >
          <input
            required
            placeholder="Enter email of new admin"
            className="text-xl bg-auto p-2 border-slate-500 border rounded-lg w-full"
            type="email"
            onBlur={handleOnBlur}
          />
          <br />
          <br />
          <button className="button mx-auto" type="submit">
            Make Admin
          </button>
          <br />
          <br />
          {/* {success && alert("Made Admin successfully!")} */}
        </form>
      </div>
    </div>
  );
};

export default authCheck(adminCheck(AddAdminMain));
