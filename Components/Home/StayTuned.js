const StayTuned = () => {
  return (
    <div className="bg-[#12131cd9] text-center py-10">
      <h1 className="font-sansita text-5xl italic text-white">
        Stay tuned with updates
      </h1>
      <div className="h-12 w-[90vw] mx-auto max-w-md my-8">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="h-full text-center bg-white text-gray-400 w-[75%]"
        />
        <button className="h-full bg-gray-700 text-white font-bold w-[25%]">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default StayTuned;
