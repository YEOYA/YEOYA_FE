import { useEffect, useState } from "react";
import { Arrow } from "../../assets";

const ages = [10, 20, 30, 40, 50, 60, 70, 80, 90];

export const Second = ({ data, setData }) => {
  const [num, setNum] = useState(1);
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
        <div className="flex flex-col gap-5 items-center justify-center">
          <Arrow onClick={() => setNum(num - 1)} direction="top" />
          <div className="relative flex flex-col gap-2 items-center h-[302px] overflow-hidden">
            <div className="h-[115px] w-1" />
            {ages.map((i) => (
              <span
                className={`font-semibold text-[96px] leading-none ${
                  ages[num] === i ? "text-black" : "text-gray-300"
                }`}
              >
                {i}
              </span>
            ))}
            <div className="h-[115px] w-1" />
          </div>
          <Arrow onClick={() => setNum(num + 1)} direction="bottom" />
        </div>
        <p className="text-semibold36">대</p>
      </div>
    </div>
  );
};
