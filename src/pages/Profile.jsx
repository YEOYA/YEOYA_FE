import { Button } from "../components/Button";
import { default as Logo } from "../assets/Closed.svg?react";

const gender = {
  female: "여성",
  male: "남성",
};

const data = {
  age: 10,
  gender: "female",
  party: "진보당",
  community: "여성시대",
};

export const Profile = () => {
  return (
    <div className="w-full h-full flex flex-col gap-8 p-[5%]">
      <img
        src="https://i.dailymail.co.uk/i/pix/2010/12/14/article-1338529-0C7A159D000005DC-496_634x492.jpg"
        className="w-24 h-24 object-cover rounded-full border-2"
      />
      <div className="flex flex-col gap-1">
        <span className="text-semibold18 text-gray-400">
          {data.age}대ㆍ{gender[data.gender]}ㆍ{data.party}ㆍ{data.community}
        </span>
        <span className="text-semibold36">햄스터</span>
        <Button>텍스트</Button>
      </div>
    </div>
  );
};
