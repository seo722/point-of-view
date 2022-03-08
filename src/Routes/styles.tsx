import { motion } from "framer-motion";
import styled from "styled-components";

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

export const UnderImgWrapper = styled.div`
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
`;

export const MiddleTitleWrapper = styled.div`
  width: 100%;
  margin-top: 150px;
  margin-bottom: 50px;
`;

export const MiddleTitle = styled.h1`
  width: 100%;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  text-decoration: underline;
  letter-spacing: 0.7px;
  text-transform: uppercase;
`;

export const UnderMiddleTItle = styled.p`
  font-size: 16px;
  text-align: center;
  font-family: "Noto Serif KR", serif;
  margin-top: 10px;
  font-weight: 500;
`;

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const Item = styled.div`
  width: 23%;
  img {
    width: 100%;
  }
  margin-left: 24px;
  margin-bottom: 25px;
`;

export const NameNPrice = styled.div`
  margin-top: 5px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  span:first-child {
    font-weight: 600;
  }
  span:last-child {
    font-family: "Noto Sans KR", sans-serif;
    letter-spacing: 0.5px;
    font-size: 15.5px;
  }
`;

export const ReccomendedItem = styled.div`
  width: 48%;
  img {
    width: 100%;
  }
  &:last-child {
    margin-left: 24px;
  }
  margin-bottom: 25px;
`;

export const RecommendedName = styled.span`
  margin-top: 20px;
  display: block;
  text-align: center;
  font-weight: 600;
`;

export const rowVars = {
  start: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
