import { useState } from "react";
import { Arrow } from "../assets/Arrow";

export const Dropdown = ({ label, data, value, onChange }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="gap-1.5 flex flex-col w-full">
      <span className="text-regular16 text-black">{label}</span>
      <div className="relative flex items-center w-full h-fit cursor-pointer">
        <div
          className="bg-gray-50 rounded-lg border border-gray-200 p-3 items-center flex justify-between w-full text-medium20 outline-none"
          onClick={() => setOpened((prev) => !prev)}
        >
          <span>{value}</span>
          <Arrow size={16} direction="bottom" />
        </div>
        {opened && (
          <div className="top-[55px] z-20 absolute w-full max-h-[195px] overflow-auto flex flex-col bg-white shadow-md rounded-[8px]">
            {data.map((i, j) => (
              <>
                <span
                  className="text-black p-[16px] leading-none"
                  onClick={() => {
                    setOpened(false);
                    onChange(i);
                  }}
                >
                  {i}
                </span>
                {j !== data.length - 1 && (
                  <div className="w-[calc(100%_-_32px)] mx-[16px] h-[1px] bg-gray-100 self-center" />
                )}
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
