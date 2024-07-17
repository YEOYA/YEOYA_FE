import { Button } from "../components/Button";

const gender = {
  female: "여성",
  male: "남성",
};

const data = {
  name: "햄스터",
  age: 10,
  gender: "female",
  party: "진보당",
  community: "여성시대",
  followed: [
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
  ],
};

export const Profile = () => {
  return (
    <div className="w-full h-full flex flex-col gap-8 p-[5%]">
      <img
        src="https://i.dailymail.co.uk/i/pix/2010/12/14/article-1338529-0C7A159D000005DC-496_634x492.jpg"
        className="w-24 h-24 object-cover rounded-full border-2"
      />
      <div className="flex flex-col gap-1">
        <div className="flex w-full justify-between">
          <span className="text-semibold36">{data.name}</span>
          <Button>프로필 편집</Button>
        </div>
        <span className="text-semibold18 text-gray-400">
          {data.age}대ㆍ{gender[data.gender]}ㆍ{data.party}ㆍ{data.community}
        </span>
      </div>
      <div className="flex flex-col gap-5 ">
        <span className="text-bold20 text-black">
          내가 팔로우한{" "}
          <span className="text-medium20 text-gray-500">
            {data.followed.length}
          </span>
        </span>
        <div className="flex flex-col">
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
                      <span className="text-regular18">{i.name}</span>
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
  );
};
