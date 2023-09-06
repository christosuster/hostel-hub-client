import FacilitiesIcon from "./FacilitiesIcon";
import {
  FaBatteryFull,
  FaCoffee,
  FaDumbbell,
  FaShower,
  FaTv,
  FaWifi,
} from "react-icons/fa";
import { GiConverseShoe, GiLockers, GiWashingMachine } from "react-icons/gi";
import { MdCleaningServices, MdIron } from "react-icons/md";
import { BiCctv } from "react-icons/bi";

const Facilities = () => {
  return (
    <div className="my-28">
      <h1 className="text-5xl md:text-8xl font-sansita italic text-orange-500 text-center font-bold ">
        Facilities
      </h1>
      <p className="text-center font-bold text-gray-500 my-5">
        WHAT WE OFFER YOU
      </p>

      <div className="flex flex-wrap w-3/4 m-auto">
        <FacilitiesIcon icon={<FaCoffee />} iconText={"TEA & COFFEE"} />
        <FacilitiesIcon icon={<FaShower />} iconText={"HOT SHOWERS"} />
        <FacilitiesIcon icon={<GiWashingMachine />} iconText={"LAUNDRY"} />
        <FacilitiesIcon icon={<FaWifi />} iconText={"FREE WIFI"} />
        <FacilitiesIcon icon={<MdIron />} iconText={"IRON"} />
        <FacilitiesIcon icon={<FaTv />} iconText={"TV"} />
        <FacilitiesIcon icon={<FaDumbbell />} iconText={"GYM"} />
        <FacilitiesIcon
          icon={<MdCleaningServices />}
          iconText={"CLEANING SERVICE"}
        />
        <FacilitiesIcon icon={<GiLockers />} iconText={"LOCKERS"} />
        <FacilitiesIcon icon={<BiCctv />} iconText={"CCTV"} />
        <FacilitiesIcon icon={<GiConverseShoe />} iconText={"SHOW POLISHER"} />
        <FacilitiesIcon icon={<FaBatteryFull />} iconText={"POWER BACKUP"} />
      </div>
    </div>
  );
};

export default Facilities;
