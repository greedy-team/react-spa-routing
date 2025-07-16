import { NavLink as RouterNavLink } from "react-router-dom";

function NavLink({ href, children }) {
  return (
    <RouterNavLink
      to={href}
      className={({ isActive }) => `
        transition-transform duration-200 ease-in-out inline-block
        ${
          isActive
            ? "text-cyan-300 dark:text-cyan-400 text-2xl scale-[1.05] underline decoration-4 underline-offset-8"
            : "text-white dark:text-gray-400 text-2xl hover:scale-[1.05] hover:text-cyan-300 dark:hover:text-cyan-400 hover:underline hover:decoration-4 hover:underline-offset-8"
        }
      `}
      end={true}
    >
      {children}
    </RouterNavLink>
  );
}

export default NavLink;
