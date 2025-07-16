import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const breakpoints = {
  mobile: "768px",
};

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9ecef;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 80px;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    height: auto;
    padding: 15px 10px;
    align-items: flex-start;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px 15px;
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &.active {
    color: #007bff;
    border-bottom: 2px solid #007bff;
  }

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px 10px;
    font-size: 0.9em;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    justify-content: space-around;
    margin-top: 10px;
  }
`;

export const ThemeSwitchContainer = styled.button`
  display: flex;
  position: relative;
  right: -20%;
  width: 60px;
  height: 30px;
  background-color: ${(props) => props.theme.gnbLinkActive};
  border-radius: 15px;
  cursor: pointer;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    right: auto;
    position: relative;
    margin-top: 15px;
    align-self: flex-end;
  }
`;

export const Slider = styled.div`
  position: absolute;
  width: 23px;
  height: 23px;
  background-color: ${(props) => props.theme.cardBg};
  border-radius: 50%;
  top: 2px;
  transition: transform 0.3s ease-in-out;

  ${(props) =>
    props.$isDarkMode
      ? "transform: translateX(24px);"
      : "transform: translateX(-4px);"}
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  color: ${(props) => props.theme.textColor};
`;

export const SunIcon = styled(BsSunFill)`
  font-size: 18px;
  color: ${(props) => (props.theme.gnbBg === "#e9ecef" ? "gold" : "white")};
  opacity: ${(props) => (props.$isDarkMode ? 0 : 1)};
  transition: opacity 0.3s ease;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
  }
`;

export const MoonIcon = styled(BsMoonFill)`
  font-size: 18px;
  color: ${(props) =>
    props.theme.textColor === "#f0f2f5" ? "silver" : "black"};
  opacity: ${(props) => (props.$isDarkMode ? 1 : 0)};
  transition: opacity 0.3s ease;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
  }
`;
