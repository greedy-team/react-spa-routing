import Container from "@/components/Container";
import styles from "@/styles/pages/NotFound.module.scss";

export default function NotFound() {
  return (
    <div className={styles.base}>
      <Container>
        <h1>
          404 Not found <br></br> 유효하지 않은 URL 주소입니다.
        </h1>
      </Container>
    </div>
  );
}
