export const Third = ({ data, setData }) => {
  return (
    <div className="w-full h-full shrink-0 flex flex-col gap-10 ">
      <span className="text-regular16 text-gray-400 block">
        성별을 선택해주세요
      </span>
      <div className="w-full h-fit flex gap-2 pt-5">
        <button
          className={`w-full py-5 bg-gray-100 ${
            data.gender === "male" && "invert"
          } text-medium20 rounded-[8px]`}
          onClick={() => setData({ ...data, gender: "male" })}
        >
          남성
        </button>
        <button
          className={`w-full py-5 bg-gray-100 ${
            data.gender === "female" && "invert"
          } text-medium20 rounded-[8px]`}
          onClick={() => setData({ ...data, gender: "female" })}
        >
          여성
        </button>
      </div>
    </div>
  );
};
