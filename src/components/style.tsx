import { motion } from "framer-motion";
import styled from "styled-components";

export const Nav = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 20px 60px;
  color: black;
`;

export const Col = styled.div`
  &:first-child {
    height: 150px;
    width: 100%;
    display: flex;
  }
  &:last-child {
    width: 100%;
    heigth: 100px;
  }
`;

export const LogoBox = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
`;

export const Logo = styled(motion.svg)`
  width: 200px;
  height: 150px;
`;

export const Menu = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  margin: 0px 150px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
`;

export const OneMenu = styled(motion.div)``;

export const navVar = {
  top: { backgroundColor: "rgba(255,255,255,0)" },
  scroll: { backgroundColor: "rgb(246, 243, 234, 1)" },
};

export const logoVar = {
  top: { fill: "rgba(246, 243, 234, 1)" },
  scroll: { fill: "rgba(0, 0, 0, 1)" },
};

export const menuVar = {
  top: { color: "rgba(246,243,234,1)" },
  scroll: { color: "rgba(0, 0, 0, 1)" },
};

export const logoBoxVar = {
  top: { borderBottom: "none" },
  scroll: { borderBottom: "1px solid rgba(0,0,0,0.1)" },
};
