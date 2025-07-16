import { Outlet, useNavigate } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import DarkModeToggleButton from "../components/DarkModeToggleButton";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full">
      <header className="fixed z-10 left-[10%] right-[10%] top-0 h-[130px] p-5 border-b-2 bg-white cursor-pointer">
        <div
          className="text-2xl font-semibold mb-4 flex justify-between"
          onClick={() => navigate("/")}
        >
          <span>NewsViewer</span>
          <DarkModeToggleButton />
        </div>
        <div className="w-full flex justify-between">
          <Search />
          <Category />
        </div>
      </header>
      <div className="h-[130px]" />
      <main className="relative flex-1 min-h-0 overflow-y-auto scrollbar-hide">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
