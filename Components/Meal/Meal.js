const Meal = ({ itemPack, price, items, handleClick, id, type }) => {
  const itemList = items.split("\n");
  return (
    <div className="card w-[300px] flex flex-col justify-between h-full border-transparent border-2">
      <div>
        <h1 className="pb-2 text-lg border-b-2 font-bold">
          Package {itemPack}
        </h1>
        <div className="py-3 ">
          {itemList.map((element, i) => {
            return <h1 key={i}>{element}</h1>;
          })}
        </div>
        <h1 className="text-xl pt-2 border-t-2 text-indigo-300">
          ৳ {price} / day
        </h1>
      </div>
      <button
        onClick={() => handleClick(id, type, itemPack, price)}
        className="button mt-3 px-4"
      >
        Select
      </button>
    </div>
  );
};

export default Meal;
