import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Topbar } from "../components/Topbar";

const gender = {
  female: "여성",
  male: "남성",
};

const data = {
  name: "육기준",
  age: 10,
  gender: "male",
  profile:
    "https://assets3.thrillist.com/v1/image/2624055/828x1500/flatten;scale;webp=auto;jpeg_quality=60.jpg",
  party: "없음",
  community: "없음",
  followed: [
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
  ],
};

export const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      <Topbar title="마이페이지" onClick={() => navigate("/main")} />
      <div className="w-full h-full flex flex-col gap-8 px-5 py-6">
        <img
          src={data.profile}
          className="w-24 h-24 object-cover rounded-full border-2"
        />
        <div className="flex flex-col gap-1">
          <div className="flex w-full justify-between">
            <span className="text-semibold36">{data.name}</span>
            <Button onClick={() => navigate("edit")}>프로필 편집</Button>
          </div>
          <span className="text-medium18 text-gray-400">
            {data.age}대ㆍ{gender[data.gender]}ㆍ{data.party}ㆍ{data.community}
          </span>
        </div>
        <div className="flex flex-col gap-5 ">
          <span className="text-bold20 text-black">
            내가 팔로우한{" "}
            <span className="text-medium20 text-gray-500">
              {data.followed.length}
            </span>
            명
          </span>
          <div className="flex flex-col" onClick={() => navigate("/user")}>
            {data.followed.map((i, j) => (
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
                        <span className="text-regular18">{i.major}</span>
                      </div>
                      <span className="text-medium18 text-gray-500">
                        {i.party}
                      </span>
                    </div>
                  </div>
                  <Button>언팔로우</Button>
                </div>
                {j !== data.followed.length - 1 && (
                  <div className="w-full h-[1px] bg-gray-100" />
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
