import React, { useState } from "react";
import Bell from "../assets/Bell.svg?react";
import { Magnifier, Close } from "../assets";
import Arrow_Diagonal from "../assets/Arrow_Diagonal.svg?react";
import { Footer } from "../components/Footer";
import { IssueList } from "../components";
import { FollowList } from "../components/FollowList";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col p-6 gap-12">
      <div className="w-full flex justify-between">
        <div className="flex flex-col gap-0.5">
          <p className="font-normal text-[40px] h-12">안녕하세요</p>
          <p className="font-bold text-[40px] h-12">햄스터님</p>
        </div>
        <div className="flex gap-3 items-center h-fit">
          <button className="p-2 flex w-10 h-10 justify-center items-center">
            <Bell />
          </button>
          <div
            onClick={() => navigate("/profile")}
            className="border cursor-pointer bg-cover bg-no-repeat bg-defaultProfileImg border-gray-300 bg-gray-50 h-11 w-11 rounded-full"
          ></div>
        </div>
      </div>
      <div className="rounded-full cursor-pointer transition-all group gap-3 flex px-5 py-3.5 items-center w-full border border-gray-400 focus-within:border-black bg-white focus-within:shadow-md">
        <Magnifier className="text-gray-400 group-focus-within:text-black" />
        <input
          className="peer placeholder:text-gray-400 outline-none text-medium18 text-black w-full"
          placeholder="검색어를 입력해주세요"
        />
      </div>
      <div className="rounded-2xl bg-cardBackground flex flex-col p-5 gap-6 w-full">
        <div
          className={`w-full flex justify-between transition-all ${
            !visible && "items-center"
          }`}
        >
          <p className="text-medium16 text-white">제일 핫한 이슈</p>
          <Close
            className="text-gray-500"
            onClick={() => setVisible(!visible)}
          />
        </div>
        <div
          className={`flex w-full justify-between items-end transition-all ${
            !visible && "hidden"
          }`}
        >
          <p className="text-semibold24 text-white">
            해바라기씨
            <br />
            500만개 도입
          </p>
          <button className="rounded-full bg-white flex p-2.5">
            <Arrow_Diagonal />
          </button>
        </div>
      </div>
      <FollowList navigate={navigate} />
      <IssueList title={"최근 이슈"} />
      <Footer />
    </div>
  );
};
