import React from "react";
import Bell from "../assets/Bell.svg?react";
import { Search } from "../assets";
import Close from "../assets/Close.svg?react";
import Arrow_Diagonal from "../assets/Arrow_Diagonal.svg?react";
import { Footer } from "../components/Footer";
import { IssueList } from "../components";

export const Main = () => {
  return (
    <div className="w-full min-h-screen flex flex-col px-5 py-6 gap-12">
      <div className="w-full flex justify-between">
        <div className="flex flex-col gap-0.5">
          <p className="font-normal text-[40px] h-12">안녕하세요</p>
          <p className="font-bold text-[40px] h-12">햄스터님</p>
        </div>
        <div className="flex gap-3 ">
          <button className="p-2 flex w-10 h-10 justify-center items-center">
            <Bell />
          </button>
          <div className="border border-gray-100 bg-gray-50 h-10 w-10 rounded-full"></div>
        </div>
      </div>
      <div className="rounded-full transition-all group gap-3 flex px-5 py-3.5 items-center w-full border border-gray-400 focus-within:border-black bg-white focus-within:shadow-md">
        <Search className="text-gray-400 group-focus-within:text-black" />
        <input
          className="peer placeholder:text-gray-400 outline-none text-medium18 text-black w-full"
          placeholder="인물 또는 소속 검색"
        />
      </div>
      <div className="rounded-2xl bg-gray-950 flex flex-col p-5 gap-6 w-full">
        <div className="w-full flex justify-between">
          <p className="text-medium16 text-white">제일 핫한 이슈</p>
          <Close />
        </div>
        <div className="flex w-full justify-between items-end">
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
      <IssueList title={"최근 이슈"} />
      <Footer />
    </div>
  );
};
