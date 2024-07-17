import { useState } from "react";
import { Arrow } from "../assets";
import { default as Camera } from "../assets/Camera.svg?react";

export const ProfileEdit = () => {
  const [data, setData] = useState({
    username: "",
    userid: "",
    party: "",
    community: "",
  });

  return (
    <div className="w-full h-full flex flex-col gap-8 p-[5%]">
      <div className="flex w-full relative justify-center items-center">
        <span>프로필 편집</span>
        <Arrow className="absolute left-5" />
      </div>
      <div className="relative w-fit h-fit">
        <img
          src="https://i.dailymail.co.uk/i/pix/2010/12/14/article-1338529-0C7A159D000005DC-496_634x492.jpg"
          className="w-24 h-24 object-cover rounded-full border-2"
        />
        <div className="absolute right-0 bottom-0 rounded-full bg-gray-100 p-2">
          <Camera />
        </div>
      </div>
      <div className="gap-1.5 flex flex-col w-full">
        <span className="text-regular16 text-black">아이디</span>
        <div className="relative flex items-center w-full h-fit">
          <input
            type="text"
            placeholder="아이디"
            id="userid"
            className="bg-gray-50 rounded-lg border border-gray-200 p-3 items-center flex w-full text-medium20"
          />
        </div>
      </div>
    </div>
  );
};
