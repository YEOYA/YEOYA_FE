import { useState } from "react";
import { Fifth } from "./Fifth";
import { First } from "./First";
import { Fourth } from "./Fourth";
import { Second } from "./Second";
import { Third } from "./Third";
import { useParams, useNavigate } from "react-router-dom";

export const Register = () => {
  const { section } = useParams();
  const navigate = useNavigate();
  const dotStyle = (index) =>
    (parseInt(section) === index ? "bg-black " : "bg-gray-200 ") +
    "w-3 h-3 rounded-full transition-all duration-300";

  const [data, setData] = useState({
    userid: "",
    username: "",
    password: "",
    pwcheck: "",
    age: 10,
    gender: "",
    party: "",
    community: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.id]: e.target.value });

  const handleRegister = () => {
    console.log("test");
  };

  return (
    <div className="w-full h-full overflow-scroll grid grid-rows-[0.1fr_0.8fr_0.1fr] p-[5%]">
      <div className="flex gap-2 justify-self-center self-center w-fit">
        <div className={dotStyle(1)} />
        <div className={dotStyle(2)} />
        <div className={dotStyle(3)} />
        <div className={dotStyle(4)} />
        <div className={dotStyle(5)} />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="text-[36px] text-black block">회원가입</span>
        <div className="flex w-full overflow-hidden">
          <div
            className="flex w-full transition-all duration-300"
            style={{
              transform: `translateX(${(parseInt(section) - 1) * -100}%) `,
            }}
          >
            <First data={data} setData={handleChange} />
            <Second data={data} setData={setData} />
            <Third data={data} setData={setData} />
            <Fourth data={data} setData={setData} />
            <Fifth data={data} setData={setData} />
          </div>
        </div>
      </div>
      <button
        className={`${
          data.password === data.pwcheck ? "bg-black" : "bg-gray-500"
        } py-5 text-white h-fit rounded-[8px] text-[20px] font-medium self-end`}
        onClick={() =>
          section < 5
            ? navigate(`/register/${parseInt(section) + 1}`, { replace: true })
            : handleRegister()
        }
        disabled={data.password !== data.pwcheck}
      >
        {section === "5" ? "회원가입" : "다음"}
      </button>
    </div>
  );
};
