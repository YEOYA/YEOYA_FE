import React from "react";
import { Arrow } from "../assets";
import { useNavigate } from "react-router-dom";
import Slider from "../assets/Slider.svg?react";

const HistoryList = ({ newPost }) => {
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
          <p className="text-black text-medium20">해바라기씨 500만개 도입</p>
          {newPost ? <New /> : <></>}
        </div>
        <p className="text-gray-400 text-medium14">2024.07.16</p>
      </div>
      <div className="transition-all group-hover:translate-x-2">
        <Arrow direction="right" size={14} className="text-gray-400" />
      </div>
    </div>
  );
};

export const IssueList = ({ title }) => {
  return (
    <>
      <div className="relative flex flex-col w-full gap-4">
        <div className="flex items-center justify-between w-full">
          <p className="text-black text-bold20">{title}</p>
          <Slider />
        </div>
        <div className="flex flex-col w-full pl-6 border-l-2 border-gray-200 ">
          <HistoryList />
          <HistoryList />
          <HistoryList />
          <HistoryList />
        </div>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white opacity-80" />
      </div>
      <div className="w-full flex justify-center">
        <button className="py-3 hover:bg-gray-50 px-5 gap-2 items-center rounded-full border border-gray-200 flex">
          <p className="text-semibold16">더보기</p>
          <Arrow direction="right" size={16} />
        </button>
      </div>
    </>
  );
};
