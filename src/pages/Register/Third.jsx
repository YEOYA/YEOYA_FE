export const Third = ({ data, setData }) => {
  return (
    <div className="w-full h-full shrink-0 flex flex-col gap-10 ">
      <span className="text-regular16 text-gray-400 block">
        성별을 선택해주세요
      </span>
      <div className="w-full h-fit flex justify-between">
        <button
          className={`w-[48%] py-5 bg-[#FAFAFA] ${
            data.gender === "male" && "invert"
          } text-medium20 bg-[#FAFAFA] rounded-[8px]`}
          onClick={() => setData({ ...data, gender: "male" })}
        >
          남성
        </button>
        <button
          className={`w-[48%] py-5 bg-[#FAFAFA] ${
            data.gender === "female" && "invert"
          } text-medium20 bg-[#FAFAFA] rounded-[8px]`}
          onClick={() => setData({ ...data, gender: "female" })}
        >
          여성
        </button>
      </div>
    </div>
  );
};
