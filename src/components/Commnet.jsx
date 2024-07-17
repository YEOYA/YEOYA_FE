import React from "react";

export const Comment = () => {
  const text = `좋은 소식입니다.\n햄스터 의원님, 힘내십시오!`;
  return (
    <div className="flex flex-col w-full gap-3 py-5 border-b border-gray-100">
      <div className="flex gap-3">
        <div className="w-10 h-10 border border-gray-100 rounded-full bg-gray-50"></div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <p className="text-semibold16">인생은햄</p>
          </div>
          <p className="text-gray-400 text-medium14">10대ㆍ여성ㆍ여성시대</p>
        </div>
      </div>
      <p className="text-medium18">{text}</p>
      <p className="text-gray-400 text-medium14">2024.07.16</p>
    </div>
  );
};
