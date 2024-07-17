import React, { useState } from "react";
import { IssueList } from "../components";

const dummy2 = [
  { title: "생년월일", value: "2024.07.16" },
  { title: "성별", value: "남" },
  { title: "직책명", value: "위원" },
  { title: "정당명", value: "해바라기당" },
  { title: "선거구", value: "대전 대마고" },
  { title: "당선", value: "제 21대, 제 22대" },
];

const dummy = [
  "더불어민주당 당대표",
  "제20대 대통령선거 더불어민주당 대통령 후보",
  "제35대 경기도 도지사",
  "민선 5, 6기 성남시장",
  "민주통합당 기초자치단체장 협의회 의장",
  "성남시립병원설립추진위원회 공동대표",
  "성남참여자치연대 집행위원장",
  "민주사회를위한변호사모임 국제연대위원",
  "제28회 사법시험 합격",
];

export const Profile = () => {
  const list = ["활동/논란", "정보"];
  const [clickList, setClickList] = useState(0);
  const [clickButton, setClickButton] = useState(false);
  return (
    <div className="flex flex-col w-full px-5 py-6 bg-white gap-9">
      <div className="flex flex-col w-full gap-10">
        <div className="border-2 bg-gray-50 border-gray-100 rounded-full w-[120px] h-[120px]"></div>
        <div className="flex flex-col w-full gap-2">
          <p className="text-gray-500 text-semibold18">해바라기당</p>
          <div className="flex items-center w-full gap-4">
            <p className="w-full text-semibold36">
              햄스터
              <span className="font-normal text-[36px]"> 국회의원</span>
            </p>
            <button
              className={`rounded-full ${
                clickButton
                  ? "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                  : "bg-gray-950 text-white hover:bg-black"
              } px-5 py-3 border text-semibold18 whitespace-nowrap transition-all`}
              onClick={() => setClickButton(!clickButton)}
            >
              {clickButton ? "언팔로우" : "팔로우"}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full relative p-1 flex gap-2.5 rounded-full bg-gray-100 border border-gray-200">
        <div
          className={`absolute rounded-full border border-gray-950 p-3 w-1/2 top-1 ${
            clickList ? "translate-x-[calc(100%_-_8px)]" : "left-1"
          } h-[46px] bg-gray-900 transition-all`}
        />

        {list.map((text, index) => (
          <div
            onClick={() => setClickList(index)}
            className="rounded-full z-40 justify-center flex items-center p-3 w-full cursor-pointer"
          >
            <p
              className={`text-medium18 transition-all ${
                clickList == index ? "text-white" : "text-gray-600"
              }`}
            >
              {text}
            </p>
          </div>
        ))}
      </div>

      {clickList == 0 ? (
        <IssueList title={`활동 내역`} />
      ) : (
        <div className="w-full flex flex-col gap-10">
          <div className="w-full flex flex-col gap-4">
            {dummy2.map(({ title, value }, index) => (
              <div key={index} className="w-full flex flex-col gap-2">
                <p className="text-medium16 text-gray-500">{title}</p>
                <p className="text-medium20 w-full">{value}</p>
              </div>
            ))}
          </div>
          <div className="w-full rounded-xl flex flex-col bg-gray-100 p-5 gap-3">
            <p className="text-bold18">약력</p>
            <div className="w-full flex flex-col gap-2">
              {dummy.map((text, index) => (
                <p key={index} className="text-regular18 text-gray-600 w-full">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
