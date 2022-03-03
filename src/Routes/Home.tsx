import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import {
  Circle,
  CircleWrapper,
  SlideBtn,
  SlideBtnWrapper,
} from "../components/style";

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
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

const photo = [
  { address: "http://pointofview.kr/images/promotion1.jpg" },
  { address: "http://pointofview.kr/images/promotion2.jpg" },
  { address: "http://pointofview.kr/images/promotion3.jpg" },
  { address: "http://pointofview.kr/images/promotion4.jpg" },
  { address: "http://pointofview.kr/images/promotion5.jpg" },
];

interface IPhoto {
  address: string;
}

function Home<IPhoto>() {
  const [index, setIndex] = useState(0);
  const increaseIndex = () => {
    if (photo) {
      const total = 4;
      setIndex((prev) => (prev === total ? 0 : prev + 1));
    }
  };
  const decreaseIndex = () => {
    if (photo) {
      const total = 0;
      setIndex((prev) => (prev === total ? 4 : prev - 1));
    }
  };

  return (
    <>
      {photo.slice(index, index + 1).map((photo) => {
        return (
          <div style={{ position: "relative" }}>
            <AnimatePresence initial={false}>
              <motion.img
                key={index}
                variants={rowVars}
                initial="start"
                animate={{
                  opacity: 1,
                  transition: { type: "tween", duration: 1.5 },
                }}
                exit="exit"
                src={photo.address}
              />
            </AnimatePresence>
            <SlideBtnWrapper>
              <SlideBtn whileHover={{ color: "white" }} onClick={increaseIndex}>
                +
              </SlideBtn>
              <SlideBtn whileHover={{ color: "white" }} onClick={decreaseIndex}>
                +
              </SlideBtn>
            </SlideBtnWrapper>
            <CircleWrapper>
              {[0, 1, 2, 3, 4].map((num) => {
                return (
                  <div>
                    {index === num ? (
                      <Circle
                        style={{ backgroundColor: "white" }}
                        key={num}
                        onClick={() => {
                          setIndex(num);
                        }}
                      ></Circle>
                    ) : (
                      <Circle
                        key={num}
                        onClick={() => {
                          setIndex(num);
                        }}
                      ></Circle>
                    )}
                  </div>
                );
              })}
            </CircleWrapper>
          </div>
        );
      })}
    </>
  );
}

export default Home;
