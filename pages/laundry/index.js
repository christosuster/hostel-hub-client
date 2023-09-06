import { useEffect, useState } from "react";
import LaundryItem from "../../Components/Laundry/LaundryItem";
import MainLayout from "../../Components/MainLayout/MainLayout";

export default function Laundry() {
  const [laundryList, setLaundryList] = useState([]);
  const [today, setToday] = useState();
  const [tomorrow, setTomorrow] = useState();

  useEffect(() => {
    const date = new Date();
    setToday(date);
    console.log(date);
    const dateTomorrow = new Date(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`
    );

    setTomorrow(dateTomorrow);
  }, []);

  const getTime = () => {
    const laundryDay = document.getElementById("laundryDay").value;
    const laundryTime = document.getElementById("laundryTime").value;

    setLaundryList([
      ...laundryList,
      <LaundryItem
        key={laundryDay}
        laundryDay={laundryDay}
        laundryTime={laundryTime}
      />,
    ]);
  };

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <MainLayout>
      <div className="mb-60">
        <div className="relative h-40 bg-fixed bg-[url('https://i.ibb.co/CWgrhcy/laundrycoronaviruas-lowres-2x1-i-Stock-160528106.jpg')] bg-no-repeat bg-cover bg-bottom mb-10 w-screen">
          <div className="bg-gray-800 h-full w-full opacity-80 "></div>
          <h1 className="absolute left-1/2 top-1/2 text-4xl font-bold text-white -translate-x-1/2 -translate-y-1/2">
            Laundry
          </h1>
        </div>
        <div className="flex flex-col card w-3/4 max-w-lg mx-auto">
          <h1 className="my-3">Please select your time slot</h1>
          <div className="flex mb-6">
            <select
              name="laundryDay"
              id="laundryDay"
              className="mx-3 bg-indigo-900"
            >
              <option value={today}>
                {today?.getMonth() + 1}/{today?.getDate()},{" "}
                {days[today?.getDay()]}
              </option>
              <option value={tomorrow}>
                {today?.getMonth() + 1}/{today?.getDate() + 1},{" "}
                {days[today?.getDay() + 1]}
              </option>
            </select>
            <select
              name="laundryTime"
              id="laundryTime"
              className="mx-3 bg-indigo-900"
            >
              <option value="10AM">10AM</option>
              <option value="12PM">12PM</option>
              <option value="2PM">2PM</option>
              <option value="4PM">4PM</option>
              <option value="6PM">6PM</option>
              <option value="8PM">8PM</option>
            </select>
          </div>

          <button onClick={getTime} className="button">
            Select Slot
          </button>
          <h1 className="text-center mt-10">Slot Selected:</h1>
          <div>{laundryList}</div>
        </div>
      </div>
    </MainLayout>
  );
}
