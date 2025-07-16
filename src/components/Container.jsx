import styles from "@/components/Container";

const Container = ({ children }) => {
  return <div className={styles.base}>{children}</div>;
};

export default Container;
