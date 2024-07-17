import React from "react";
import Upload from "../assets/Upload.svg?react";

export const CommentInput = () => {
  return (
    <div className="max-w-screen-md w-full fixed bottom-0 bg-white border-t border-gray-300 px-4 pb-4 pt-2 flex">
      <div className="rounded-full w-full bg-gray-100 border border-gray-200 py-1 flex pl-5 pr-1 items-center gap-4">
        <input
          placeholder="댓글을 입력해주세요"
          className="placeholder:text-gray-400 w-full text-black resize-none bg-gray-100 outline-none border-none text-medium18"
        />
        <button className="p-3 flex rounded-full bg-gray-900">
          <Upload />
        </button>
      </div>
    </div>
  );
};
