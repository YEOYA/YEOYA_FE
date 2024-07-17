const communities = [
  "디시인사이드",
  "루리웹",
  "여성시대",
  "블라인드",
  "에브리타임",
  "오픈채팅",
  "그 외 커뮤니티",
];

export const Fifth = ({ data, setData }) => {
  return (
    <div className="w-full h-full shrink-0 flex flex-col gap-10 ">
      <span className="text-regular16 text-gray-400 block">
        평소 가장 자주 이용하는 커뮤니티를 기준으로 선택해주세요.
      </span>
      <div className="w-full h-fit gap-4 flex flex-wrap">
        {communities.map((i) => (
          <button
            className={`${
              data.community === i && "bg-gray-100"
            } flex items-center gap-2 p-[20px] border-2 text-semibold18 border-gray-100 leading-none rounded-[8px]`}
            onClick={() => setData({ ...data, community: i })}
          >
            {i}
          </button>
        ))}
      </div>
      <button
        className={`${
          data.community === "미선택"
            ? "bg-gray-200 border-gray-200"
            : "bg-gray-100 border-gray-100"
        } flex w-fit items-center gap-2 p-[20px] text-semibold18 leading-none rounded-[8px]`}
        onClick={() => setData({ ...data, community: "미선택" })}
      >
        선택하고 싶지 않아요
      </button>
    </div>
  );
};
