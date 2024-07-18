import React, { useState } from "react";
import { Comment, CommentInput } from "../components";
import { Arrow } from "../assets";
import Info from "../assets/Info.svg?react";
import Chat from "../assets/Chat.svg?react";
import { Good, Bad } from "../assets";
import { useNavigate } from "react-router-dom";
export const Post = () => {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(0);
  const isClick = () => {};

  return (
    <div className="flex flex-col w-full pb-20">
      <div className="flex items-center w-full px-5 py-4">
        <Arrow
          onClick={() => navigate("/main")}
          direction="left"
          className="text-black"
        />
      </div>
      <div className="flex flex-col w-full gap-6 px-6 pt-6 border-b border-gray-200 pb-9">
        <div className="flex w-full flex-col gap-2.5">
          <div className="flex items-center justify-between w-full">
            <p className="text-medium16">햄스터 국회의원</p>
            <Info />
          </div>
          <p className="text-semibold36">
            진중권 이어…신평에게도 전화한 김 여사
          </p>
          <p className="text-gray-400 text-medium16">2024.07.15</p>
        </div>
        <div className="flex items-center gap-1 px-4 py-2 bg-white border border-gray-200 rounded-full w-fit">
          <Chat />
          <p className="text-regular16">3</p>
        </div>
        <p className="w-full text-medium20">
          [김종석 앵커] 조언을 구하는데 왜 이런 대화까지 공개하나. 인간의 도리에
          벗어났다. 윤 대통령의 멘토를 자처하는 신평 변호사까지 이야기를 했는데.
          사과 안 된다고 조언했다. 문자 읽씹 논란에 대한 본질은 저희가 뉴스
          TOP10에서 수차례 이야기했으니까. 그것은 그렇다 치더라도 여선웅
          행정관님. 일단 김건희 여사가 여기저기에 상당히 조언을 구하고 다닌 것은
          사실인 것 같아요. 그런 적절하나, 부적절하나 논란은 앞으로 계속될 것
          같고요. <br />
          <br />
          [여선웅 전 청와대 선임행정관] 맞습니다. 그런데 사실은 김건희
          여사님께서 왜 많은 인사들 어떻게 보면 그렇게 이제 보수 보수층의 이렇게
          충실하게 그동안 활동했던 분들이 아니라 진중권 교수 같은 최근에 이제
          약간 헷갈리는 분들. 이런 분들까지 다 전화를 하니까 결국에는 이것이
          이제 공개가 되잖아요. 공개가 되면서 이분들이 어떻게 보면 김건희 여사의
          사적으로 나오는 대화들을 본인의 무언가 입지를 위해서 아니면 본인의
          무언가를 위해서 약간 또 이용하고 있는 상황이 반복되고 있거든요.
          <br />
          <br /> 사실은 최재영 목사와의 카톡 대화가 유출이 됐을 때 그때 무언가
          어쨌든 대통령의 영부인으로서 물론 이제 바깥에 있는 그동안의 살았던
          분들과 충분히 연락을 할 수 있지만 정치적으로 무언가 계속 조언을 구하고
          이러한 것들이 최재영 목사 사건 이후에도 무언가 교훈을 얻지 못하시고
          계속해서 이제 연락을 하신 것이 모르겠습니다. 본인의 입장에서는
          무언가를 풀어보려고 열심히 하신 것처럼 보이지만 이렇게 또 정치적으로
          또 활용되고 또 이것이 논박의 대상이 되기 때문에 무언가 김건희 여사의
          지금 민주당이든 아니면 국민의힘 내부에서도 이야기하는 것처럼 무언가
          제2 부속실 같은 것을 좀 필요하다, 이런 생각을 같이 가집니다.
        </p>
        <div className="flex gap-2.5 pt-5">
          <div
            onClick={() => setAgree(1)}
            className={`px-4 py-2 transition-all flex items-center border border-gray-200 gap-1.5 rounded-full ${
              agree == 1 ? "text-white bg-gray-950" : ""
            }`}
          >
            <Good />
            <p className="text-regular16">3</p>
          </div>
          <div
            onClick={() => setAgree(2)}
            className={`px-4 transition-all py-2 flex items-center border border-gray-200 gap-1.5 rounded-full ${
              agree == 2 ? "text-white bg-gray-950" : ""
            }`}
          >
            <Bad />
            <p className="text-regular16">3</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-5 p-6">
        <p className="text-semibold18">댓글 3</p>
        <div className="w-full flex flex-col">
          <Comment />
        </div>
      </div>
      <CommentInput />
    </div>
  );
};
