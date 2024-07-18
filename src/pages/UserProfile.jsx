import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, IssueList } from "../components";

const dummy2 = [
  [
    { title: "생년월일", value: "1960년 12월 18일" },
    { title: "성별", value: "남" },
    { title: "직책명", value: "대통령" },
    { title: "정당명", value: "국민의힘" },
    { title: "당선", value: "제 20대" },
  ],
  [
    { title: "생년월일", value: "1963년 12월 8일" },
    { title: "성별", value: "남" },
    { title: "직책명", value: "국회의원" },
    { title: "정당명", value: "더불어민주당" },
    { title: "당선", value: "없음" },
  ],
  [
    { title: "생년월일", value: "1962년 2월 26일" },
    { title: "성별", value: "남" },
    { title: "직책명", value: "국회의원" },
    { title: "정당명", value: "국민의힘" },
    { title: "당선", value: "없음" },
  ],
];

const data = [
  {
    name: "윤석열",
    profile:
      "https://www.president.go.kr/assets/images/president/intro_president.png",
    major: "국회위원",
    party: "국민의힘",
  },
  {
    name: "이재명",
    profile:
      "https://i.namu.wiki/i/veNzLdSHNcFF-aBqtUfD_Uk1OUUXnjwD_ISGP3GuEzx4EOINUWJ9_L1Jk__zprV8Ps-z7cmeOd2iGgHW5qL9oA.webp",
    major: "국회위원",
    party: "더불어민주당",
  },
  {
    name: "안철수",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDExdeDjuLgE8RmMgY3v4GglhmPvci8GmtQ&s",
    major: "국회의원",
    party: "국민의힘",
  },
];

const dummy = [
  [
    "서울 충암고등학교 졸업",
    "서울대학교 법학과 졸업",
    "서울대학교대학원 법학과 졸업",
    "대구지검 검사",
    "서울지검 검사",
    "부산지검 검사",
    "서울중앙지검장",
    "대한민국 제 20대 대통령",
  ],
  [
    "더불어민주당 당대표",
    "제20대 대통령선거 더불어민주당 대통령 후보",
    "제35대 경기도 도지사",
    "민선 5, 6기 성남시장",
    "민주통합당 기초자치단체장 협의회 의장",
    "성남시립병원설립추진위원회 공동대표",
    "성남참여자치연대 집행위원장",
    "민주사회를위한변호사모임 국제연대위원",
    "제28회 사법시험 합격",
    "중앙대학교 법과대학 법학과 졸업",
    "중·고교 검정고시",
    "삼계초등학교 졸업",
  ],
  [
    "제20대 대통령직인수위원회 위원장",
    "제19,20,21,22대 국회의원(4선)",
    "前 서울대학교 융합과학기술대학원 원장",
    "서울대학교 의학 학사",
    "서울대학교 의과대학원 의학 석사",
    "서울대학교 대학원 의학 박사",
    "펜실베이니아대학교 대학원 공학 석사",
    "펜실베이니아대학교 와튼스쿨 경영학 석사",
  ],
];

export const UserProfile = () => {
  const { name } = useParams();
  const { name: _name, profile, major, party } = data[name - 1];

  const list = ["활동/논란", "정보"];
  const [clickList, setClickList] = useState(0);
  const [clickButton, setClickButton] = useState(false);
  return (
    <div className="flex flex-col w-full px-5 py-6 bg-white gap-9">
      <div className="flex flex-col w-full gap-10">
        <img
          src={profile}
          className="border-2 bg-gray-50 border-gray-100 object-cover rounded-full w-[120px] h-[120px]"
        />
        <div className="flex flex-col w-full gap-2">
          <p className="text-gray-500 text-semibold18">{major}</p>
          <div className="flex items-center w-full justify-between gap-4">
            <p className="w-fit text-semibold36">
              {_name}
              <span className="font-normal text-[36px]"> {party}</span>
            </p>
            <Button>언팔로우</Button>
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
            {dummy2[name - 1].map(({ title, value }, index) => (
              <div key={index} className="w-full flex flex-col gap-2">
                <p className="text-medium16 text-gray-500">{title}</p>
                <p className="text-medium20 w-full">{value}</p>
              </div>
            ))}
          </div>
          <div className="w-full rounded-xl flex flex-col bg-gray-100 p-5 gap-3">
            <p className="text-bold18">약력</p>
            <div className="w-full flex flex-col gap-2">
              {dummy[name - 1].map((text, index) => (
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
