import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

import { itemPhoto, photo } from "../utils/pictures";
import {
  Circle,
  CircleWrapper,
  Item,
  ItemWrapper,
  MiddleTitle,
  MiddleTitleWrapper,
  NameNPrice,
  rowVars,
  SlideBtn,
  SlideBtnWrapper,
  UnderMiddleTItle,
} from "./styles";

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
      {photo.slice}
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
                  transition: { type: "tween", duration: 1 },
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
            <MiddleTitleWrapper>
              <MiddleTitle>recent arrivals</MiddleTitle>
              <UnderMiddleTItle>
                새로 업데이트 된 상품을 확인해 보세요!
              </UnderMiddleTItle>
            </MiddleTitleWrapper>
            <ItemWrapper>
              {itemPhoto.map((item) => (
                <>
                  <Item>
                    <img src={item.address} alt="" />
                    <NameNPrice>
                      <span>{item.name}</span>
                      <span>{item.price}원</span>
                    </NameNPrice>
                  </Item>
                </>
              ))}
            </ItemWrapper>
            <MiddleTitleWrapper>
              <MiddleTitle>s.e.o recommend</MiddleTitle>
              <UnderMiddleTItle>세오가 추천드리는 상품입니다.</UnderMiddleTItle>
            </MiddleTitleWrapper>
          </div>
        );
      })}
    </>
  );
}

export default Home;
