import useDarkModeStore from "../store/useDarkModeStore";
import bulb from "../assets/bulb.svg";

const DarkModeToggleButton = () => {
  const { toggleDark } = useDarkModeStore();

  return (
    <button onClick={toggleDark} className="">
      <img src={bulb} alt="전구" className="w-8 h-8" />
    </button>
  );
};

export default DarkModeToggleButton;