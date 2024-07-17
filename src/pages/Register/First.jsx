import { useState } from "react";
import { Input } from "../../components";

export const First = ({ data, setData }) => {
  return (
    <div className="w-full h-full shrink-0 flex flex-col gap-7 ">
      <span className="text-regular16 text-gray-400 block">
        아이디와 비밀번호를 설정해주세요
      </span>

      <Input
        label="닉네임"
        value={data.username}
        placeholder="1지에서 6자"
        onChange={setData}
        id="username"
      />
      <Input
        label="아이디"
        value={data.userid}
        placeholder="6자에서 12자"
        onChange={setData}
        id="userid"
      />
      <Input
        label="비밀번호"
        value={data.password}
        placeholder="8자에서 16자"
        onChange={setData}
        id="password"
        secure
      />
      <Input
        label="비밀번호"
        value={data.passcheck}
        placeholder="8자에서 16자"
        onChange={setData}
        id="pwcheck"
        secure
      />
    </div>
  );
};
