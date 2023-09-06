const FacilitiesIcon = ({ icon, iconText }) => {
  return (
    <div className="flex flex-col justify-center items-center lg:w-1/6 md:w-1/4 w-1/2 my-5">
      <div className="bg-yellow-300 text-gray-800 w-fit p-6 text-4xl rounded-full my-3 hover:bg-orange-300 transition  duration-300">
        {icon}
      </div>
      <div className="font-semibold text-center text-gray-300">{iconText}</div>
    </div>
  );
};

export default FacilitiesIcon;
