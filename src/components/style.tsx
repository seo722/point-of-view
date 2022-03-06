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
  z-index: 999;
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
  font-weight: 600;
  margin-top: 20px;
  position: relative;
  &:hover {
    height: 60px;
  }
`;

export const OneMenu = styled(motion.div)`
  text-align: center;

  position: relative;
  width: 33%;
`;

export const MyPage = styled(motion.div)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  span {
    margin-right: 10px;
  }
  font-family: "Arial";
`;

export const SlideBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-itmes: center;
`;

export const SlideBtn = styled(motion.div)`
  top: 0px;
  width: 44.5vw;
  position: absolute;
  font-size: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100vh;
  &:first-child {
    right: 0px;
    justify-content: flex-end;
    margin-right: 5vw;
  }
  &:last-child {
    left: 0px;
    margin-left: 5vw;
  }
`;

export const CircleWrapper = styled.div`
  width: 100%;
  heigth: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  top: 800px;
`;

export const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 5px;
  background-color: black;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`;

export const DetailMenu = styled(motion.div)`
  // position: absolute;
  font-size: 15px;
  font-weight: 500;
`;

export const DetailMenuWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 15px;
  width: 100%;
  height: 30px;
`;

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
