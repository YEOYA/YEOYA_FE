import React, { useState } from "react";
import { Comment, CommentInput } from "../components";
import { Arrow } from "../assets";
import Info from "../assets/Info.svg?react";
import Chat from "../assets/Chat.svg?react";
import { Good, Bad } from "../assets";
import { useNavigate } from "react-router-dom";
export const Post = () => {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(0);
  const isClick = () => {};

  return (
    <div className="flex flex-col w-full pb-20">
      <div className="flex items-center w-full px-5 py-4">
        <Arrow
          onClick={() => navigate("/user")}
          direction="left"
          className="text-black"
        />
      </div>
      <div className="flex flex-col w-full gap-6 px-6 pt-6 border-b border-gray-200 pb-9">
        <div className="flex w-full flex-col gap-2.5">
          <div className="flex items-center justify-between w-full">
            <p className="text-medium16">햄스터 국회의원</p>
            <Info />
          </div>
          <p className="text-semibold36">해바라기씨 500만개 도입</p>
          <p className="text-gray-400 text-medium16">2024.07.16</p>
        </div>
        <div className="flex items-center gap-1 px-4 py-2 bg-white border border-gray-200 rounded-full w-fit">
          <Chat />
          <p className="text-regular16">3</p>
        </div>
        <p className="w-full text-medium20">으아아아ㅏ</p>
        <div className="flex gap-2.5 pt-5">
          <div
            onClick={() => setAgree(1)}
            className={`px-4 py-2 transition-all flex items-center border border-gray-200 gap-1.5 rounded-full ${
              agree == 1 ? "text-white bg-gray-950" : ""
            }`}
          >
            <Good />
            <p className="text-regular16">3</p>
          </div>
          <div
            onClick={() => setAgree(2)}
            className={`px-4 transition-all py-2 flex items-center border border-gray-200 gap-1.5 rounded-full ${
              agree == 2 ? "text-white bg-gray-950" : ""
            }`}
          >
            <Bad />
            <p className="text-regular16">3</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-5 p-6">
        <p className="text-semibold18">댓글 3</p>
        <div className="w-full flex flex-col">
          <Comment />
        </div>
      </div>
      <CommentInput />
    </div>
  );
};
