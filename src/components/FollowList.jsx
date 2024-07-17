import { Arrow } from "../assets";
import { Button } from "./Button";

const data = [
  {
    name: "김키위",
    profile:
      "https://i.guim.co.uk/img/media/421b4d0d793c43be459a5038ee164c686ee77f0e/0_206_3000_1800/master/3000.jpg?width=620&quality=85&auto=format&fit=max&s=3fba366179c3b5c874834e45f2292ecc",
    major: "국회위원",
    party: "키위당",
  },
  {
    name: "일기준",
    profile:
      "https://i.guim.co.uk/img/media/421b4d0d793c43be459a5038ee164c686ee77f0e/0_206_3000_1800/master/3000.jpg?width=620&quality=85&auto=format&fit=max&s=3fba366179c3b5c874834e45f2292ecc",
    major: "국회위원",
    party: "기준당",
  },
  {
    name: "이키위",
    profile:
      "https://i.guim.co.uk/img/media/421b4d0d793c43be459a5038ee164c686ee77f0e/0_206_3000_1800/master/3000.jpg?width=620&quality=85&auto=format&fit=max&s=3fba366179c3b5c874834e45f2292ecc",
    major: "대통령",
    party: "키위당",
  },
];

export const FollowList = ({ navigate }) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex justify-between items-center">
        <p className="text-black text-bold20">최근 팔로우 한 인물</p>
        <Arrow direction="right" />
      </div>
      <div className="flex flex-col" onClick={() => navigate("/user")}>
        {data.map((i, j) => (
          <>
            <div className="flex w-full justify-between items-center py-[20px]">
              <div className="flex gap-2">
                <img
                  src={i.profile}
                  className="w-14 h-14 rounded-full object-cover border-2"
                />
                <div className="flex flex-col justify-center gap-[4px]">
                  <div className="flex gap-1">
                    <span className="text-bold18">{i.name}</span>
                    <span className="text-regular18">{i.name}</span>
                  </div>
                  <span className="text-medium18 text-gray-500">{i.party}</span>
                </div>
              </div>
              <Button>언팔로우</Button>
            </div>
            {j !== data.length - 1 && (
              <div className="w-full h-[1px] bg-gray-100" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};
