export const PriceCard = () => {
  return (
    <div className="card flex items-center gap-6 bg-white rounded-md px-2 py-2">
      <div className="text-lg">
        <p>Model:</p>
        <p className="font-semibold">Hdas</p>
      </div>
      <div className="mr-[150px] text-lg">
        <p>Price:</p>
        <p className="font-semibold">$999,99</p>
      </div>
      <button
        id="addCart"
        className="bg-[#fe3605] h-[56px] w-[56px] flex justify-center items-center text-[30pt] font-thin rounded-md text-white"
      >
        +
      </button>
    </div>
  );
};
