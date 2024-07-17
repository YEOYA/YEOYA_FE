import { useEffect, useState } from "react";
import { Arrow } from "../../assets";

const ages = [10, 20, 30, 40, 50, 60, 70, 80, 90];

export const Second = ({ data, setData }) => {
  const [num, setNum] = useState(1);
  const downNumber = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  const upNumber = () => {
    if (num < 8) {
      setNum(num + 1);
    }
  };

  useEffect(() => {
    console.log(num);
  }, [num]);

  return (
    <div className="w-full h-full shrink-0 flex flex-col gap-20 ">
      <span className="text-regular16 text-gray-400 block">
        나이대를 선택해 주세요
      </span>
      <div className="w-full h-full justify-center items-center gap-6 flex">
        <p className="text-semibold36 text-white">대</p>
        <div className="flex relative flex-col gap-5 items-center justify-center">
          <div
            onClick={downNumber}
            className="w-full h-1/3 absolute top-0 z-10"
          />
          <Arrow
            direction="top"
            className={`${num == 0 ? "text-gray-400" : ""}`}
          />
          <div className="relative flex flex-col gap-2 items-center h-[302px] overflow-hidden">
            <div className="h-[115px] w-1" />
            <div
              className="relative flex flex-col items-center transition-transform duration-300 py-[96px]"
              style={{ transform: `translateY(-${num * 96}px)` }}
            >
              {ages.map((i, index) => (
                <p
                  key={index}
                  className={`font-semibold text-[96px] leading-none transition-colors duration-300 ${
                    ages[num] === i ? "text-black" : "text-gray-300"
                  }`}
                >
                  {i}
                </p>
              ))}
            </div>
            <div className="h-[115px] w-1" />
          </div>
          <div
            onClick={upNumber}
            className="w-full h-1/3 absolute bottom-0 z-20"
          />
          <Arrow
            onClick={upNumber}
            direction="bottom"
            className={`${num == 8 ? "text-gray-400" : ""}`}
          />
        </div>
        <p className="text-semibold36">대</p>
      </div>
    </div>
  );
};
