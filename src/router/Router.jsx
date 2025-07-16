import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NewsContainer from "../components/main/NewsConatainer";
import MainLayout from "../components/layout/MainLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/all" />} />
          <Route path="/:category" element={<NewsContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
