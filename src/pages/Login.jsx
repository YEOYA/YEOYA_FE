import { useState } from "react";
import Logo from "../assets/Logo.svg?react";
import { Input } from "../components";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setData({ ...data, [e.target.id]: e.target.value });

  return (
    <div className="grid grid-rows-[0.1fr_0.7fr_0.2fr] gap-16 w-full h-full p-[5%]">
      <Logo />
      <div className="flex flex-col gap-8">
        <Input
          label="아이디"
          value={data.username}
          placeholder="아이디 (6~12)"
          onChange={handleChange}
          id="username"
        />
        <Input
          label="비밀번호"
          value={data.password}
          placeholder="비밀번호 (8~16)"
          onChange={handleChange}
          id="password"
          secure
        />
        <span className="text-medium16">
          계정이 없으신가요?{" "}
          <span
            className="font-bold text-[16px]"
            onClick={() => navigate("/register/1")}
          >
            회원가입
          </span>
        </span>
      </div>

      <button className="bg-black py-5 text-white h-fit rounded-[8px] text-[20px] font-medium self-end">
        로그인
      </button>
    </div>
  );
};
