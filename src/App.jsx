import { Routes, Route } from "react-router-dom";
import Gnb from "./components/headers/Gnb";
import NewsListPage from "./pages/newsListPage";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <>
      <Gnb />
      <main>
        <Routes>
          <Route path="/" element={<NewsListPage />} />
          <Route path="/news/:category" element={<NewsListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
