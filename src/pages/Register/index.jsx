import { useState } from "react";
import { Fifth } from "./Fifth";
import { First } from "./First";
import { Fourth } from "./Fourth";
import { Second } from "./Second";
import { Third } from "./Third";
import { useParams, useNavigate } from "react-router-dom";
import { AccountButton } from "../../components";
import { Arrow } from "../../assets";

export const Register = () => {
  const { section } = useParams();
  const navigate = useNavigate();
  const dotStyle = (index) =>
    (parseInt(section) === index ? "bg-black " : "bg-gray-200 ") +
    "w-2 h-2 rounded-full transition-all duration-300";

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
    <div className="w-full h-screen flex flex-col justify-between">
      <div className="w-full p-5 flex">
        <Arrow
          onClick={() =>
            section > 1
              ? navigate(`/register/${parseInt(section) - 1}`, {
                  replace: true,
                })
              : handleRegister()
          }
          direction="left"
        />
      </div>
      <div className="w-full h-full px-6 py-5 flex flex-col justify-between">
        <div className="flex flex-col gap-2 w-full">
          <span className="text-[36px] font-semibold text-black block">
            회원가입
          </span>
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
        <div className="flex flex-col w-full gap-4">
          <div className="flex gap-2 justify-self-center self-center w-fit py-2.5">
            <div className={dotStyle(1)} />
            <div className={dotStyle(2)} />
            <div className={dotStyle(3)} />
            <div className={dotStyle(4)} />
            <div className={dotStyle(5)} />
          </div>
          <AccountButton
            text={section === "5" ? "회원가입" : "다음"}
            className={`${
              data.password === data.pwcheck ? "bg-black" : "bg-gray-500"
            }`}
            onClick={() =>
              section < 5
                ? navigate(`/register/${parseInt(section) + 1}`, {
                    replace: true,
                  })
                : handleRegister()
            }
            disabled={data.password !== data.pwcheck}
          />
        </div>
      </div>
    </div>
  );
};
