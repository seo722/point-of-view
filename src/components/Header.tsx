import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Col,
  Logo,
  LogoBox,
  logoBoxVar,
  logoVar,
  Menu,
  menuVar,
  Nav,
  navVar,
  OneMenu,
} from "./style";

function Header() {
  const navAnimation = useAnimation();
  const logoAnimation = useAnimation();
  const menuAnimation = useAnimation();
  const borderAnimation = useAnimation();
  const { scrollY } = useViewportScroll();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 20) {
        navAnimation.start("scroll");
        logoAnimation.start("scroll");
        menuAnimation.start("scroll");
        borderAnimation.start("scroll");
      } else {
        navAnimation.start("top");
        logoAnimation.start("top");
        menuAnimation.start("top");
        borderAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation, logoAnimation, menuAnimation, borderAnimation]);
  return (
    <Nav
      variants={navVar}
      initial="top"
      animate={navAnimation}
      transition={{ duration: 0.1 }}
    >
      <Col>
        <LogoBox variants={logoBoxVar} initial="top" animate={borderAnimation}>
          <Link to="/">
            <Logo
              variants={logoVar}
              initial="top"
              animate={logoAnimation}
              width="512px"
              height="302px"
              viewBox="0 0 512 302"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <motion.path
                d="M38.5170778,39.3428059 C66.6725006,10.6324853 102.149603,-2.48624335 145.263672,0.387614113 C186.784556,3.1550771 229.09221,23.6399647 259.402225,53.8256423 C285.163188,79.4801245 294.904469,104.611055 294.568846,142.16805 C297.431284,136.039563 303.024962,131.20334 311.969283,131.20334 C325.498664,131.20334 331.464614,142.212174 331.464614,151.709394 L331.464614,155.48932 L301.463128,155.48932 C301.463128,162.129683 305.328921,167.170777 311.969283,167.170777 C316.674066,167.170777 320.962037,164.480285 323.062195,160.027736 L330.539758,162.968672 C326.255364,171.287014 321.296559,174.902362 311.969283,174.902362 C301.774327,174.902362 295.932526,168.618186 293.526321,161.298917 C289.808058,196.617142 275.875567,227.564473 251.600859,253.338326 C222.320941,284.425574 189.033761,301.041419 150.686526,301.647723 L150.686526,301.647723 L149.433238,301.662054 C110.633104,301.937066 76.5461946,286.47635 47.0123369,256.330082 C17.6917192,226.399796 1.93694064,190.740569 0.17298989,148.769086 C-1.66888635,104.705251 11.2031819,67.1903529 38.5170778,39.3428059 Z M145.144698,2.17254412 C102.544963,-0.667029357 67.5795465,12.2624879 39.7942446,40.5953932 C12.8442972,68.071881 0.138195745,105.103079 1.96031131,148.694173 C3.70548548,190.218884 19.2757249,225.460427 48.2902041,255.078209 C77.8113995,285.211553 111.850772,300.471104 150.658263,299.859056 L150.658263,299.859056 L151.876869,299.834284 C189.194484,298.906696 221.64317,282.536059 250.298626,252.111819 C275.700067,225.141649 289.641359,192.461384 292.289216,154.952192 C292.242378,154.314109 292.21993,153.680226 292.21993,153.052851 C292.21993,151.50702 292.356169,149.921771 292.637112,148.3455 C294.112459,107.755544 284.930119,81.7726692 258.139901,55.0931861 C228.12519,25.2016019 186.216948,4.91010458 145.144698,2.17254412 Z M199.170959,131.877215 L212.775473,162.914469 L227.202876,131.877215 L237.37272,131.877215 L209.71647,191.372142 L199.544837,191.372142 L207.593057,174.062836 L189.101293,131.877215 L199.170959,131.877215 Z M265.709106,131.203519 C278.061397,131.203519 284.615892,139.269627 284.615892,153.05303 C284.615892,166.498333 277.97553,174.902541 265.539162,174.902541 C260.580357,174.902541 256.295964,172.548361 254.195806,169.525136 L254.195806,191.371069 L245.455286,191.371069 L245.455286,131.877931 L254.195806,131.877931 L254.195806,136.750869 C255.793285,133.9763 260.580357,131.203519 265.709106,131.203519 Z M388.742927,131.203519 C395.046977,131.203519 400.088071,133.303677 403.869786,137.50757 C407.651501,141.709674 409.583503,146.918924 409.583503,153.05303 C409.583503,159.187136 407.651501,164.398175 403.869786,168.600279 C400.088071,172.800595 395.046977,174.902541 388.742927,174.902541 C382.440665,174.902541 377.315493,172.800595 373.531989,168.600279 C369.750274,164.398175 367.90235,159.187136 367.90235,153.05303 C367.90235,146.918924 369.750274,141.709674 373.531989,137.50757 C377.315493,133.303677 382.440665,131.203519 388.742927,131.203519 Z M187.708284,115.406541 L187.708284,124.145272 L169.148543,124.145272 L169.148543,174.230634 L159.903556,174.230634 L159.903556,124.145272 L141.343815,124.145272 L141.343815,115.406541 L187.708284,115.406541 Z M439.147069,131.20334 C441.079071,131.20334 442.842917,131.541441 444.524474,132.212275 L443.011072,140.196094 C441.667616,139.355315 439.987847,138.936715 438.054056,138.936715 C434.944964,138.936715 432.254473,140.616483 429.987948,144.060098 C427.717846,147.421423 426.624834,152.212073 426.624834,158.514335 L426.624834,174.229739 L417.886103,174.229739 L417.886103,131.877752 L426.624834,131.877752 L426.624834,138.936715 C429.399403,133.97791 434.440497,131.20334 439.147069,131.20334 Z M499.899943,131.204593 C507.545662,131.204593 512,136.245687 512,143.893194 L512,174.229203 L503.261269,174.229203 L503.261269,145.826985 C503.261269,141.372647 500.823011,138.936178 497.041296,138.936178 C491.579813,138.936178 487.125475,146.07743 487.125475,157.254419 L487.125475,174.229203 L478.384955,174.229203 L478.384955,145.826985 C478.384955,141.372647 475.948486,138.936178 472.16856,138.936178 C466.537132,138.936178 462.25095,146.07743 462.25095,158.179275 L462.25095,174.229203 L453.512219,174.229203 L453.512219,131.877215 L462.25095,131.877215 L462.25095,139.104334 C465.698142,133.809217 469.898457,131.204593 475.023629,131.204593 C480.739135,131.204593 485.445706,134.649996 486.706874,139.943324 C489.646022,134.313685 494.436671,131.204593 499.899943,131.204593 Z M358.253431,114.733918 C361.026212,114.733918 363.298103,115.236596 365.230105,116.245531 L363.462681,123.640805 C361.952857,122.884104 360.2713,122.463715 358.505665,122.463715 C354.725739,122.463715 352.791948,124.649739 352.791948,129.104077 L352.791948,131.876858 L362.119224,131.876858 L362.119224,139.606654 L352.791948,139.606654 L352.791948,174.228845 L344.053217,174.228845 L344.053217,139.606654 L338.589945,139.606654 L338.589945,131.876858 L344.053217,131.876858 L344.053217,129.692622 C344.053217,119.690934 349.432411,114.733918 358.253431,114.733918 Z M264.530227,138.935105 C261.337058,138.935105 258.732433,140.196273 256.716353,142.802687 C254.698484,145.321445 253.691339,148.766848 253.691339,153.05303 C253.691339,157.339212 254.698484,160.782827 256.716353,163.389241 C258.732433,165.909788 261.337058,167.170956 264.530227,167.170956 C267.725186,167.170956 270.329811,165.909788 272.34768,163.389241 C274.36376,160.782827 275.370905,157.339212 275.370905,153.05303 C275.370905,148.766848 274.36376,145.321445 272.34768,142.802687 C270.329811,140.196273 267.725186,138.935105 264.530227,138.935105 Z M388.742927,138.935105 C385.129367,138.935105 382.272509,140.36264 380.170562,143.137209 C378.154482,145.90999 377.147337,149.187237 377.147337,153.05303 C377.147337,156.918823 378.154482,160.280149 380.170562,163.052929 C382.272509,165.827499 385.129367,167.170956 388.742927,167.170956 C392.356486,167.170956 395.215133,165.827499 397.231213,163.052929 C399.331371,160.280149 400.340305,156.918823 400.340305,153.05303 C400.340305,149.187237 399.331371,145.90999 397.231213,143.137209 C395.215133,140.36264 392.356486,138.935105 388.742927,138.935105 Z M311.969283,138.936715 C306.339644,138.936715 302.640218,142.716641 301.633073,148.179913 L322.221416,148.179913 C321.464715,142.884797 317.935234,138.936715 311.969283,138.936715 Z"
                fill-rule="nonzero"
              />
            </Logo>
          </Link>
        </LogoBox>
      </Col>
      <Col>
        <Menu variants={menuVar} initial="top" animate={menuAnimation}>
          <OneMenu>ALL</OneMenu>
          <OneMenu>NEW</OneMenu>
          <OneMenu>WRITINGandDRAWING</OneMenu>
          <OneMenu>PAGES</OneMenu>
          <OneMenu>GIFT</OneMenu>
        </Menu>
      </Col>
    </Nav>
  );
}

export default Header;
