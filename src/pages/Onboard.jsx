import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Quote from "../assets/quote.svg?react";

export const Onboard = () => {
  const [now, setNow] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`grid grid-rows-[0.1fr_0.8fr_0.1fr] gap-20 w-full h-full bg-[#ffffff] p-[5%] transition-all duration-500 ${
        !now ? "invert" : "invert-0"
      }`}
    >
      <Quote className="self-center justify-self-center" />
      <div className="relative font-light text-[46px] leading-tight self-start">
        <span className={`absolute ${!now ? "opacity-100" : "opacity-0"}`}>
          모든 정치는
          <br />
          <span className="font-bold">
            다수의
            <br /> 무관심
          </span>
          에 <br /> 기초하고 있다.
        </span>
        <span
          className={`absolute transition-all duration-500 ${
            now ? "opacity-100" : "opacity-0"
          }`}
        >
          정치에 참여하기를
          <br /> <span className="font-bold">거부</span>함으로써
          <br /> 받는 벌 중 하나는
          <br />
          <span className="font-bold">자신보다 못한 사람의 지배</span>를 받는
          것이다.
        </span>
      </div>
      <button
        className="w-full h-fit py-3 border-[1px] border-[#000000] rounded-sm justify-self-end"
        onClick={() => (!now ? setNow((prev) => !prev) : navigate("/login"))}
      >
        다음
      </button>
    </div>
  );
};
