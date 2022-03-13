import { motion } from "framer-motion";
import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
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

export const Slider = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  h1 {
    margin-bottom: 20px;
    margin-left: 20px;
    font-size: 24px;
  }
`;

export const Row = styled(motion.div)`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  justify-content: center;
`;

export const rowVar = {
  hidden: { x: window.innerWidth },
  visible: { x: 0 },
  exit: { x: -window.innerWidth },
};

export const NextButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: transparent;
  cursor: pointer;
  right: 0;
  top: 300px;
  border: none;
  background-image: url("http://pointofview.kr/images/btn-arrow-right.svg");
`;
