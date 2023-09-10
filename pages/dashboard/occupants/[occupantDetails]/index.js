import { useRouter } from "next/router";
import Layout from "../../../../Components/Dashboard/Layout";
import { useEffect, useState } from "react";
import useAuth from "../../../../Components/Firebase/useAuth";
import Loading from "../../../../Components/Loading/Loading";
import Occupants from "../../../../Components/Occupants/Occupants";
import adminCheck from "../../../../Components/Firebase/adminCheck";
import AuthCheck from "../../../../Components/Firebase/AuthCheck";
const OccupantDetails = () => {
  const router = useRouter();
  const [id, setId] = useState(router.query.occupantDetails);
  const { userInfo, user } = useAuth();
  const [room, setRoom] = useState({});
  const [userData, setUserData] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [privateRoomUser, setPrivateRoomUser] = useState({});
  //   const [sharedRoomUsers, setSharedRoomUsers] = useState([]);
  let privateRoomUser = {};
  let sharedRoomUsers = [];

  useEffect(() => {
    if (router.isReady) {
      //   console.log(id);
      setId(router.query.occupantDetails);
      fetch(`https://hostel-hub-yg4y.onrender.com/rooms/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setRoom(data);
          console.log(data);
        });

      fetch("https://hostel-hub-yg4y.onrender.com/users")
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
          //   console.log(data);
        });

      //   console.log(userData);
      //   console.log(room);
    }
  }, [router.isReady]);

  if (room.category === "Business") {
    const uid = room.bookedBy;
    // console.log("uid:", uid);
    userData?.forEach((user) => {
      //   console.log("user: ", user._id);
      if (user._id == uid) {
        // console.log("matched");
        privateRoomUser = user;
        return;
      }
    });
  } else {
    room.bookedBy?.map((element) => {
      userData?.forEach((user) => {
        if (element.uid == user._id) {
          sharedRoomUsers = [...sharedRoomUsers, user];
          //   console.log(sharedRoomUsers);
          return;
        }
      });
    });
  }
  //   console.log("shared room:", sharedRoomUsers);
  return (
    <Layout>
      <div>
        <h1 className="text-2xl text-center my-3">
          {room.category === "Economic"
            ? "Shared Room Occupants"
            : "Private Room Occupants"}
        </h1>
        <div className="mx-auto overflow-x-auto w-full">
          <table className="table-auto text-left border-collapse mx-auto card-design w-full min-h-[100px]">
            <thead className="">
              <tr className="border-b-2 py-3">
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Booked From</th>
                <th>Booked Till</th>
              </tr>
            </thead>
            <tbody className="">
              {room.category === "Economic" ? (
                sharedRoomUsers.map((e) => {
                  return <Occupants user={e} key={e._id} />;
                })
              ) : (
                <Occupants user={privateRoomUser} />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default AuthCheck(adminCheck(OccupantDetails));
