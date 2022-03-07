import {
  MotionConfig,
  motion,
  useAnimation,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  DetailMenu,
  DetailMenuWrapper,
  Logo,
  LogoBox,
  logoBoxVar,
  logoVar,
  Menu,
  menuVar,
  MyPage,
  Nav,
  navVar,
  OneMenu,
} from "./styles";

const menuNav = [
  {
    name1: "pages",
    name2: ["Notebook", "Diary & Planner", "Memo", "Others"],
  },
  {
    name1: "good",
    name2: ["Pen & Pencil", "Paint", "Cut & paste", "Eraser", "Sharpener"],
  },
  {
    name1: "bad",
    name2: ["Masking Tape", "Stamp", "Sticker", "Bookmark", "charm", "Others"],
  },
  { name2: ["Letter", "Tag & Ribbon", "Decorative Things"] },
];

const detailMenuVar = {
  enter: { display: "block" },
  exit: { transitionEnd: { display: "none" } },
};

const MenuNavigaton = () => {
  const [detailMenu, setDetailMenu] = useState(false);
  const [detailMenu2, setDetailMenu2] = useState(false);
  const [detailMenu3, setDetailMenu3] = useState(false);
  const [detailMenu4, setDetailMenu4] = useState(false);

  const toggleMenu = () => {
    setDetailMenu((prev) => !prev);
  };
  const toggleMenu2 = () => {
    setDetailMenu2((prev) => !prev);
  };
  const toggleMenu3 = () => {
    setDetailMenu3((prev) => !prev);
  };
  const toggleMenu4 = () => {
    setDetailMenu4((prev) => !prev);
  };

  const menuAnimation = useAnimation();
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 20) {
        menuAnimation.start("scroll");
      } else {
        menuAnimation.start("top");
      }
    });
  }, [scrollY, menuAnimation]);

  return (
    <Menu variants={menuVar} initial="top" animate={menuAnimation}>
      <OneMenu onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
        <span>PAGES</span>
        {menuNav.slice(0, 1).map((m) => (
          <motion.div
            variants={detailMenuVar}
            initial="exit"
            animate={detailMenu ? "enter" : "exit"}
          >
            <DetailMenuWrapper>
              {m.name2.map((men) => (
                <DetailMenu
                  whileHover={{
                    textDecoration: "underline",
                  }}
                >
                  <Link to="/">{men}</Link>
                </DetailMenu>
              ))}
            </DetailMenuWrapper>
          </motion.div>
        ))}
      </OneMenu>
      <OneMenu onMouseEnter={toggleMenu2} onMouseLeave={toggleMenu2}>
        <span>WRITING &#38; DRAWING</span>
        {menuNav.slice(1, 2).map((m) => (
          <motion.div
            variants={detailMenuVar}
            initial="exit"
            animate={detailMenu2 ? "enter" : "exit"}
          >
            <DetailMenuWrapper>
              {m.name2.map((men) => (
                <DetailMenu
                  whileHover={{
                    textDecoration: "underline",
                  }}
                >
                  <Link to="/">{men}</Link>
                </DetailMenu>
              ))}
            </DetailMenuWrapper>
          </motion.div>
        ))}
      </OneMenu>
      <OneMenu onMouseEnter={toggleMenu3} onMouseLeave={toggleMenu3}>
        <span>SMALL THINGS</span>
        {menuNav.slice(2, 3).map((m) => (
          <motion.div
            variants={detailMenuVar}
            initial="exit"
            animate={detailMenu3 ? "enter" : "exit"}
          >
            <DetailMenuWrapper>
              {m.name2.map((men) => (
                <DetailMenu
                  whileHover={{
                    textDecoration: "underline",
                  }}
                >
                  <Link to="/">{men}</Link>
                </DetailMenu>
              ))}
            </DetailMenuWrapper>
          </motion.div>
        ))}
      </OneMenu>
      <OneMenu onMouseEnter={toggleMenu4} onMouseLeave={toggleMenu4}>
        <span>GIFT</span>
        {menuNav.slice(3, 4).map((m) => (
          <motion.div
            variants={detailMenuVar}
            initial="exit"
            animate={detailMenu4 ? "enter" : "exit"}
          >
            <DetailMenuWrapper>
              {m.name2.map((men) => (
                <DetailMenu
                  whileHover={{
                    textDecoration: "underline",
                  }}
                >
                  <Link to="/">{men}</Link>
                </DetailMenu>
              ))}
            </DetailMenuWrapper>
          </motion.div>
        ))}
      </OneMenu>
    </Menu>
  );
};

export default MenuNavigaton;
