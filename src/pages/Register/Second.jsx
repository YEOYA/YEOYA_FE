import { default as Arrow } from "../../assets/Arrow_Left.svg?react";

const ages = [10, 20, 30, 40, 50, 60, 70, 80, 90];

export const Second = ({ data, setData }) => {
  return (
    <div className="w-full h-full shrink-0 flex flex-col gap-20 ">
      <span className="text-regular16 text-gray-400 block">
        나이대를 선택해 주세요
      </span>
      <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
        <Arrow className="rotate-90" />
        <div className="relative flex flex-col gap-3 items-center h-[302px] overflow-scroll">
          {ages.map((i) => (
            <span
              className={`font-semibold text-[96px] leading-none ${
                data.age === i ? "text-black" : "text-gray-300"
              }`}
              onClick={() => setData({ ...data, age: i })}
            >
              {i}
            </span>
          ))}
          <div className="absolute h-[96px] w-full grayscale" />
        </div>
        <Arrow className="rotate-[270deg]" />
      </div>
    </div>
  );
};
