import { isDayState, selectedCategoryState } from "@/store/rootAtoms";
import { useRecoilValue } from "recoil";
import styles from "@/styles/components/IntroMessage.module.scss";

const categoryMessage = {
  home: (
    <>
      세상의 흐름을 한 눈에,
      <br />
      당신만의 뉴스룸
    </>
  ),
  business: (
    <>
      비즈니스 세계의
      <br />
      맥을 짚어드립니다.
    </>
  ),
  entertainment: (
    <>
      지금 가장 핫한
      <br />
      엔터 소식을 만나보세요.
    </>
  ),
  general: (
    <>
      놓칠 수 없는
      <br />
      주요 뉴스만 쏙쏙!
    </>
  ),
  health: (
    <>
      건강한 삶을 위한
      <br />
      유익한 정보들
    </>
  ),
  science: (
    <>
      호기심을 자극하는
      <br />
      과학 이야기
    </>
  ),
  sports: (
    <>
      오늘의 경기,
      <br />
      결과부터 이슈까지!
    </>
  ),
  technology: (
    <>
      미래를 바꾸는,
      <br />
      기술의 흐름
    </>
  ),
};

const IntroMessage = () => {
  const category = useRecoilValue(selectedCategoryState);
  const message = categoryMessage[category];
  const isDay = useRecoilValue(isDayState);

  return (
    <div
      className={`${styles.introMessage} ${
        !isDay ? styles.nightIntroMessage : ""
      }`}
    >
      <p>{message}</p>
    </div>
  );
};

export default IntroMessage;
