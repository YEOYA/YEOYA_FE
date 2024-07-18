import React from "react";
import { Arrow } from "../assets";
import { useNavigate } from "react-router-dom";
import Slider from "../assets/Slider.svg?react";

const datas = [
  {
    title: "진중권 이어…신평에게도 전화한 김 여사",
    date: "2024.07.15",
    page: 1,
  },
  {
    title: "그날 이종섭이 받은 ‘02-800-7070’ 가입자는 대통령 경호처",
    date: "2024.07.15",
    page: 2,
  },
  {
    title:
      "우원식 “野, 이진숙 탄핵 멈추고 정부는 공영방송 이사진 선임 중단하라”",
    date: "2024.07.14",
    page: 3,
  },
  {
    title:
      "우원식 의장, 尹대통령에 '개헌 대화' 제안…\"2026년 개헌 국민투표 추진\"",
    date: "2024.07.12",
    page: 4,
  },
];

const HistoryList = ({ newPost, title, date, page }) => {
  const navigate = useNavigate();
  const New = () => {
    return (
      <div className="flex rounded-[4px] text-white bg-black text-medium12 px-1.5 py-0.5">
        NEW
      </div>
    );
  };
  return (
    <div
      onClick={() => navigate("/post")}
      className="flex cursor-pointer items-center w-full gap-4 py-5 border-b border-gray-100 group"
    >
      <div className="flex flex-col w-full gap-2">
        <div className="flex items-center gap-3">
          <p className="text-black text-medium20">{title}</p>
          {newPost ? <New /> : <></>}
        </div>
        <p className="text-gray-400 text-medium14">{date}</p>
      </div>
      <div className="transition-all group-hover:translate-x-2">
        <Arrow direction="right" size={14} className="text-gray-400" />
      </div>
    </div>
  );
};

export const IssueList = ({ title }) => {
  return (
    <div className="">
      <div className="relative flex flex-col w-full gap-4">
        <div className="flex items-center justify-between w-full">
          <p className="text-black text-bold20">{title}</p>
          <Slider />
        </div>
        <div className="flex flex-col w-full pl-6 border-l-2 border-gray-200 ">
          {datas.map((i, j) => (
            <HistoryList
              newPost={j === 0}
              title={i.title}
              date={i.date}
              page={i.page}
            />
          ))}
        </div>
        <div
          style={{
            backgroundImage: "linear-gradient(to top, white, transparent)",
          }}
          className="w-full absolute bottom-0 z-10 h-24 bg-gradient-to-t"
        />
      </div>
      <div className="w-full flex justify-center">
        <button className="py-3 hover:bg-gray-50 px-5 gap-2 items-center rounded-full border border-gray-200 flex">
          <p className="text-semibold16">더보기</p>
          <Arrow direction="right" size={16} />
        </button>
      </div>
    </div>
  );
};
