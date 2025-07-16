import NavContainer from "./nav/NavContainer";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="bg-gray-800 dark:bg-gray-900 text-white p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold w-1/2 dark:text-gray-400">
          News Web Viewer
        </h1>
        <ThemeToggle />
      </div>
      <NavContainer />
    </header>
  );
};

export default Header;
