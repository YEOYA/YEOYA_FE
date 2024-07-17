import React from "react";

export const AccountButton = ({ text, onClick, className = "", disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`bg-gray-950 w-full text-white rounded-lg text-medium18 self-end h-[58px] items-center flex justify-center ${className}`}
    >
      {text}
    </button>
  );
};
