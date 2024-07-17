import { useState } from "react";
import { Arrow, Magnifier } from "../assets";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex gap-4 px-5 py-2 items-center">
        <Arrow onClick={() => navigate("/main")} direction="left" />
        <div className="rounded-full cursor-pointer transition-all group gap-3 flex px-5 py-3.5 items-center w-full border border-gray-300 focus-within:border-black bg-white">
          <Magnifier className="text-gray-400 group-focus-within:text-black" />
          <input
            className="peer placeholder:text-gray-400 outline-none text-medium18 text-black w-full"
            placeholder="검색어를 입력해주세요"
          />
        </div>
      </div>
      <div className="flex gap-4 w-full px-5 overflow-auto h-fit items-center border-b border-gray-200">
        {parties.map((i) => (
          <div
            onClick={() => setTag(i)}
            className={`${
              i === tag
                ? "text-bold18 text-black border-b-2 border-black"
                : "text-gray-400 text-medium18"
            } flex relative px-2 py-5 shrink-0 cursor-pointer`}
          >
            {i}
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full px-5">
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
