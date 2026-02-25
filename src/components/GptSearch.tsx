const GptSearch = () => {
  return (
    <div className="flex flex-col w-full h-fit">
      <form
        action=""
        className=" w-2/3 gap-2 items-center grid grid-cols-12 p-2 mx-auto"
      >
        <input
          type="text"
          className="col-span-10 bg-white p-2 rounded-sm "
          placeholder="Shoot your Question"
        />
        <input
          type="button"
          value="Submit"
          className="bg-red-700  text-lg text-white p-2 rounded-sm col-span-2 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default GptSearch;
