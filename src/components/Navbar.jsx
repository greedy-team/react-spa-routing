import styles from "@/styles/components/Navbar.module.scss";
import { Toggle } from "./Toggle";

const Navbar = () => {
  return (
    <nav className={styles.base}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.logo}>NewsViewer</div>
          <Toggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
