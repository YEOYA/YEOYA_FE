import { Arrow } from "../assets";
import { Button } from "./Button";

const data = [
  {
    name: "윤석열",
    profile:
      "https://www.president.go.kr/assets/images/president/intro_president.png",
    major: "국회위원",
    party: "국민의힘",
    page: 1,
  },
  {
    name: "이재명",
    profile:
      "https://i.namu.wiki/i/veNzLdSHNcFF-aBqtUfD_Uk1OUUXnjwD_ISGP3GuEzx4EOINUWJ9_L1Jk__zprV8Ps-z7cmeOd2iGgHW5qL9oA.webp",
    major: "국회위원",
    party: "더불어민주당",
    page: 2,
  },
  {
    name: "안철수",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDExdeDjuLgE8RmMgY3v4GglhmPvci8GmtQ&s",
    major: "국회의원",
    party: "국민의힘",
    page: 3,
  },
];

export const FollowList = ({ navigate }) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex justify-between items-center">
        <p className="text-black text-bold20">최근 팔로우 한 인물</p>
        <Arrow direction="right" />
      </div>
      <div className="flex flex-col">
        {data.map((i, j) => (
          <>
            <div
              className="flex w-full justify-between items-center py-[20px]"
              onClick={() => navigate(`/user/${i.page}`)}
            >
              <div className="flex gap-2">
                <img
                  src={i.profile}
                  className="w-14 h-14 rounded-full object-cover border-2"
                />
                <div className="flex flex-col justify-center gap-[4px]">
                  <div className="flex gap-1">
                    <span className="text-bold18">{i.name}</span>
                    <span className="text-regular18">{i.major}</span>
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
