import { useRecoilState } from "recoil";
import { isDayState } from "@/store/rootAtoms";
import styles from "@/styles/components/Toggle.module.scss";
import { useEffect } from "react";

export const Toggle = () => {
  const [isDay, setIsDay] = useRecoilState(isDayState);

  const toggleHandler = () =>
    setIsDay((prev) => {
      const next = !prev;
      localStorage.setItem("isDay", JSON.stringify(next));
      return next;
    });

  return (
    <div className={styles.toggleWrapper} onClick={toggleHandler}>
      <div
        className={`${styles.toggleContainer} ${isDay ? styles.checked : ""}`}
      >
        <span className={styles.icon}>☀️</span>
        <span className={styles.icon}>🌙</span>
        <div
          className={`${styles.toggleCircle} ${isDay ? styles.checked : ""}`}
        />
      </div>
    </div>
  );
};
