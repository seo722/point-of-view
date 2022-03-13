import { AnimatePresence } from "framer-motion";
import { url } from "inspector";
import { useState } from "react";
import { ItemWrapper } from "../../Routes/styles";
import { sliderPhoto } from "../../utils/pictures";
import { Item, NameNPrice, NextButton, Row, rowVar, Slider } from "./styles";

const offset = 4;
const Sliders = () => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const increaseIndex = () => {
    const maxIndex = 2;
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  return (
    <Slider>
      <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
        <Row
          variants={rowVar}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: "tween", duration: 0.7 }}
          key={index}
        >
          {sliderPhoto
            .slice(offset * index, offset * index + offset)
            .map((photo) => (
              <Item>
                <img src={photo.address} alt={photo.name} />
                <NameNPrice>
                  <span>{photo.name}</span>
                  <span>{photo.price}원</span>
                </NameNPrice>
              </Item>
            ))}
        </Row>
      </AnimatePresence>
      <NextButton onClick={() => increaseIndex()}></NextButton>
    </Slider>
  );
};

export default Sliders;
