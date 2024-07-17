import { useState } from "react";
import { Arrow } from "../assets";
import { Search as SearchIcon } from "../assets";
import { Button } from "../components/Button";

const parties = [
  "전체정당",
  "국민의힘",
  "더불어민주당",
  "조국혁신당",
  "개혁신당",
  "진보당",
  "새로운미래",
  "기본소득당",
  "사회민주당",
  "정의당",
  "원외정당",
];

const data = [
  {
    name: "김키위",
    profile:
      "https://i.guim.co.uk/img/media/421b4d0d793c43be459a5038ee164c686ee77f0e/0_206_3000_1800/master/3000.jpg?width=620&quality=85&auto=format&fit=max&s=3fba366179c3b5c874834e45f2292ecc",
    major: "국회위원",
    party: "키위당",
  },
  {
    name: "일기준",
    profile:
      "https://i.guim.co.uk/img/media/421b4d0d793c43be459a5038ee164c686ee77f0e/0_206_3000_1800/master/3000.jpg?width=620&quality=85&auto=format&fit=max&s=3fba366179c3b5c874834e45f2292ecc",
    major: "국회위원",
    party: "기준당",
  },
  {
    name: "이키위",
    profile:
      "https://i.guim.co.uk/img/media/421b4d0d793c43be459a5038ee164c686ee77f0e/0_206_3000_1800/master/3000.jpg?width=620&quality=85&auto=format&fit=max&s=3fba366179c3b5c874834e45f2292ecc",
    major: "대통령",
    party: "키위당",
  },
];

export const Search = () => {
  const [tag, setTag] = useState("전체정당");

  return (
    <div className="w-full h-full p-[5%] flex flex-col">
      <div className="flex gap-4 justify-between items-center">
        <Arrow direction="left" />
        <div className="flex gap-[13px] w-full rounded-full border-2 px-[20px] py-[13px] border-gray-300 focus-within:border-black">
          <SearchIcon className="text-gray-300 focus:text-black" />
          <input className="w-full outline-none" />
        </div>
      </div>
      <div className="flex gap-[16px] w-[111%] mt-4 ml-[-5.5%] px-[30px] overflow-auto h-fit items-center border-b-[1px]">
        {parties.map((i) => (
          <div
            onClick={() => setTag(i)}
            className={`${
              i === tag
                ? "text-bold18 text-black "
                : "text-[#a1a1aa] text-medium18"
            } flex justify-center relative h-[60px] px-[8px] shrink-0  items-center cursor-pointer`}
          >
            {i}
            {i === tag && (
              <div className="absolute w-[70%] h-1 bg-black bottom-0" />
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        {data.map((i, j) => (
          <>
            <div className="flex w-full justify-between items-center py-[20px]">
              <div className="flex gap-2">
                <img
                  src={i.profile}
                  className="w-14 h-14 rounded-full object-cover border-2"
                />
                <div className="flex flex-col justify-center gap-[4px]">
                  <div className="flex gap-1">
                    <span className="text-bold18">{i.name}</span>
                    <span className="text-regular18">{i.name}</span>
                  </div>
                  <span className="text-medium18 text-gray-500">{i.party}</span>
                </div>
              </div>
              <Button>언팔로우</Button>
            </div>
            {j !== data.length - 1 && (
              <div className="w-full h-[1px] bg-gray-100" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};
