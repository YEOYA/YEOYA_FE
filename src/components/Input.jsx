import { useState } from "react";
import { default as Opened } from "../assets/Opened.svg?react";
import { default as Closed } from "../assets/Closed.svg?react";

export const Input = ({
  label,
  value,
  onChange,
  id = "",
  placeholder,
  secure,
}) => {
  const [visible, setVisible] = useState(false);

  const clickVisible = () => setVisible((prev) => !prev);

  return (
    <div>
      <span className="text-[16px] font-bold text-black">{label}</span>
      <div
        className={`relative flex items-center border-b w-full h-fit ${
          !!value ? "border-black" : "border-gray300"
        }`}
      >
        <input
          type={(!!secure && visible) || !!!secure ? "text" : "password"}
          placeholder={placeholder}
          id={id}
          className={`w-full h-10 outline-none text-medium20`}
          value={value}
          onChange={onChange}
        />

        {!!secure && (
          <div className="cursor-pointer">
            {visible ? (
              <Opened onClick={clickVisible} />
            ) : (
              <Closed onClick={clickVisible} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
