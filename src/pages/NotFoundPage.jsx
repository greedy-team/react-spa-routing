import { Link } from "react-router-dom";
import {
  NotFoundPageButton,
  NotFoundPageContainer,
} from "./NewsListPage.styled";

function NotFoundPage() {
  return (
    <NotFoundPageContainer>
      <NotFoundPageButton as={Link} to="/">
        페이지를 찾을 수 없습니다.<br></br>
        죄송합니다.<br></br>
        요청하신 페이지를 찾을 수 없습니다.<br></br>
        홈으로 돌아가기
      </NotFoundPageButton>
    </NotFoundPageContainer>
  );
}

export default NotFoundPage;
