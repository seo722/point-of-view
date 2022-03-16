import { Bottom, FooterWrapper, TextWrapper, Top } from "./styles";

const footerInfo1 = [
  "ABOUT",
  "ARCHIVE",
  "JOURNAL",
  "NOTICE",
  "FAQ",
  "BOARD",
  "SHOP GUIDE",
  "PRIVACY POLICY",
];

function Footer() {
  return (
    <div style={{ position: "relative", height: "150px" }}>
      <FooterWrapper>
        <Top>
          <TextWrapper>
            {footerInfo1.map((info) => (
              <span>{info}</span>
            ))}
          </TextWrapper>
        </Top>
        <Bottom>
          <span>
            point of view | ceo. park in seo | business no. 206-27-24970 | mall
            order license. 2018-대구서구-0980 | address. 대구 서구 문화로 18 2F
            02-469-0077 | e-mail. | online c/s. mon - fri pm 14:00 - 18:00 2022
            point of view
          </span>
        </Bottom>
      </FooterWrapper>
    </div>
  );
}

export default Footer;
