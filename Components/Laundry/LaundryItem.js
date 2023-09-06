const LaundryItem = ({ laundryDay, laundryTime }) => {
  const day = new Date(laundryDay);
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
    <div>
      <h1 className="bg-slate-500 my-2 text-center p-1">
        {day.getMonth() + 1}/{day.getDate()}, {days[day.getDay()]} {laundryTime}
      </h1>
    </div>
  );
};

export default LaundryItem;
