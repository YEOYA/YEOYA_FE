import { useState } from "react";
import { Arrow } from "../assets/Arrow";

export const Dropdown = ({ label, data, value, onChange }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="gap-1.5 flex flex-col w-full">
      <p className="text-regular16 text-black">{label}</p>
      <div className="relative flex items-center w-full h-fit cursor-pointer">
        <div
          className="bg-gray-50 rounded-lg border border-gray-200 p-3 items-center flex justify-between w-full text-medium20 outline-none"
          onClick={() => setOpened((prev) => !prev)}
        >
          <span>{value}</span>
          <Arrow
            size={16}
            direction={opened ? "top" : "bottom"}
            className="text-gray-400 transition-all"
          />
        </div>
        {opened && (
          <div className="top-16 z-20 absolute w-full max-h-[228px] overflow-auto flex flex-col bg-white shadow-lg rounded-lg px-4 py-1">
            {data.map((i, j) => (
              <div
                onClick={() => {
                  setOpened(false);
                  onChange(i);
                }}
                className={`w-full flex py-4 ${
                  data.length - 1 == j ? "" : "border-b border-gray-100"
                }`}
              >
                <p className="text-medium20 leading-none">{i}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
