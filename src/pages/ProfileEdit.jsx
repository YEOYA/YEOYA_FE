import { useState } from "react";
import { Arrow } from "../assets";
import { default as Camera } from "../assets/Camera.svg?react";
import { Dropdown, Topbar, AccountButton } from "../components";

const parties = [
  "없음",
  "개혁신당",
  "기본소득당",
  "국민의힘",
  "더불어민주당",
  "사회민주당",
  "새로운미래",
  "정의당",
  "조국혁신당",
  "진보당",
  "그 외 (원외정당)",
];

const communities = [
  "없음",
  "디시인사이드",
  "루리웹",
  "여성시대",
  "블라인드",
  "에브리타임",
  "오픈채팅",
  "그 외 커뮤니티",
];

export const ProfileEdit = () => {
  const [data, setData] = useState({
    username: "",
    userid: "",
    party: "없음",
    community: "없음",
  });
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Topbar title="프로필 편집" onClick="profile" />
      <div className="w-full h-full flex flex-col gap-10 px-5 py-6">
        <div className="relative w-[120px] h-[120px] bg-defaultProfileImg rounded-full bg-cover bg-no-repeat border-2 border-gray-200">
          <div className="absolute transition-all hover:bg-gray-200  right-0 bottom-0 rounded-full bg-gray-100 p-2">
            <Camera />
          </div>
        </div>
        <div className="gap-1.5 flex flex-col w-full">
          <span className="text-regular16 text-black">닉네임</span>
          <div className="relative flex items-center w-full h-fit">
            <input
              type="text"
              placeholder="닉네임"
              id="userid"
              className="bg-gray-50 rounded-lg border border-gray-200 p-3 items-center flex w-full text-medium20 outline-none"
            />
          </div>
        </div>
        <div className="gap-1.5 flex flex-col w-full">
          <span className="text-regular16 text-black">아이디</span>
          <div className="relative flex items-center w-full h-fit">
            <input
              type="text"
              placeholder="아이디"
              id="userid"
              className="bg-gray-50 rounded-lg border border-gray-200 p-3 items-center flex w-full text-medium20 outline-none"
            />
          </div>
        </div>
        <Dropdown
          label="지지 정당"
          data={parties}
          value={data.party}
          onChange={(item) => setData({ ...data, party: item })}
        />
        <Dropdown
          label="사용 커뮤니티"
          data={communities}
          value={data.community}
          onChange={(item) => setData({ ...data, community: item })}
        />
      </div>
      <AccountButton className="right-5 left-5 bottom-5 fixed" text="확인" />
    </>
  );
};
