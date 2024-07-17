import React from "react";

const parties = [
  {
    name: "국민의힘",
    color: "#E61D2C",
  },
  {
    name: "더불어민주당",
    color: "#142484",
  },
  {
    name: "조국혁신당",
    color: "#0273CF",
  },
  {
    name: "개혁신당",
    color: "#FF7211",
  },
  {
    name: "진보당",
    color: "#D6001C",
  },
  {
    name: "새로운미래",
    color: "#44BABC",
  },
  {
    name: "기본소득당",
    color: "#00D2C3",
  },
  {
    name: "사회민주당",
    color: "#F58400",
  },
  {
    name: "정의당",
    color: "#FFED00",
  },
  {
    name: "그 외 (원외정당)",
    color: "#A1A1AA",
  },
];

export const Fourth = ({ data, setData }) => {
  // 헬퍼 함수: hex 색상을 rgba로 변환
  const hexToRgba = (hex, opacity) => {
    const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <div className="w-full h-full shrink-0 flex flex-col gap-10">
      <span className="text-regular16 text-gray-400 block">
        지지하고 있는 정당을 알려주세요.
      </span>
      <div className="w-full h-fit gap-4 flex flex-wrap">
        {parties.map((i) => (
          <button
            key={i.name}
            style={
              data.party === i.name
                ? { backgroundColor: hexToRgba(i.color, 0.2) }
                : {}
            }
            className={`flex items-center gap-2 p-[20px] border-2 text-semibold18 border-gray-100 leading-none rounded-[8px]`}
            onClick={() => setData({ ...data, party: i.name })}
          >
            <div
              className="w-3 h-3 rounded-[2px]"
              style={{ background: i.color }}
            />
            {i.name}
          </button>
        ))}
      </div>
      <button
        className={`${
          data.party === "미선택"
            ? "bg-gray-200 border-gray-200"
            : "bg-gray-100 border-gray-100"
        } flex w-fit items-center gap-2 p-[20px] text-semibold18 leading-none rounded-[8px]`}
        onClick={() => setData({ ...data, party: "미선택" })}
      >
        선택하고 싶지 않아요
      </button>
    </div>
  );
};
