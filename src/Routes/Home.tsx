import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import styled from "styled-components";
import Footer from "../components/Footer";
import Sliders from "../components/Sliders";

import {
  itemPhoto,
  photo,
  recommendedPhoto,
  selectionPhoto,
} from "../utils/pictures";
import {
  Circle,
  CircleWrapper,
  Item,
  ItemWrapper,
  MiddleTitle,
  MiddleTitleWrapper,
  NameNPrice,
  ReccomendedItem,
  RecommendedName,
  rowVars,
  SelectionItem,
  SelectionWrapper,
  SlideBtn,
  SlideBtnWrapper,
  UnderImgWrapper,
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
          </div>
        );
      })}
      <UnderImgWrapper>
        <MiddleTitleWrapper>
          <MiddleTitle>recent arrivals</MiddleTitle>
          <UnderMiddleTItle>
            ?????? ???????????? ??? ????????? ????????? ?????????!
          </UnderMiddleTItle>
        </MiddleTitleWrapper>
        <ItemWrapper>
          {itemPhoto.map((item) => (
            <>
              <Item>
                <img src={item.address} alt="" />
                <NameNPrice>
                  <span>{item.name}</span>
                  <span>{item.price}???</span>
                </NameNPrice>
              </Item>
            </>
          ))}
        </ItemWrapper>
        <MiddleTitleWrapper>
          <MiddleTitle>s.e.o recommend</MiddleTitle>
          <UnderMiddleTItle>????????? ??????????????? ???????????????.</UnderMiddleTItle>
        </MiddleTitleWrapper>
        <ItemWrapper style={{ justifyContent: "center" }}>
          {recommendedPhoto.map((photo) => (
            <ReccomendedItem>
              <img src={photo.address} alt={photo.name} key={photo.address} />
              <RecommendedName>{photo.name}</RecommendedName>
            </ReccomendedItem>
          ))}
        </ItemWrapper>
        <MiddleTitleWrapper>
          <MiddleTitle>shop back in stock</MiddleTitle>
          <UnderMiddleTItle>
            ?????? ??? ????????? ??? ?????? ???????????????.
          </UnderMiddleTItle>
        </MiddleTitleWrapper>
        <Sliders />
        <MiddleTitleWrapper style={{ marginTop: "88vh" }}>
          <MiddleTitle>shop in category</MiddleTitle>
          <UnderMiddleTItle>
            ????????? ?????? ?????? ????????? ???????????? ????????? ?????????.
          </UnderMiddleTItle>
        </MiddleTitleWrapper>
        <SelectionWrapper>
          {selectionPhoto.map((photo) => (
            <SelectionItem>
              <img src={photo.address} alt={photo.name} />
              <NameNPrice
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <span style={{ margin: "12px 0px", fontSize: "17px" }}>
                  {photo.name}
                </span>
                <span
                  style={{
                    fontFamily: "Noto Serif KR",
                    fontSize: "15px",
                    fontWeight: 500,
                  }}
                >
                  {photo.description}
                </span>
              </NameNPrice>
            </SelectionItem>
          ))}
        </SelectionWrapper>
        <MiddleTitleWrapper>
          <MiddleTitle>point of view store</MiddleTitle>
          <UnderMiddleTItle>
            ???????????? ?????? ????????? ?????? ????????? ???????????? ???????????????.
          </UnderMiddleTItle>
        </MiddleTitleWrapper>
      </UnderImgWrapper>
      <img
        style={{ width: "100%" }}
        src="http://pointofview.kr/images/about.jpg"
        alt=""
      />
    </>
  );
}

export default Home;
