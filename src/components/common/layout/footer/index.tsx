import { FooterDiv } from "../../../../styles/layout";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <FooterDiv>
      <div className="inner_footer">
        <div className="footer_content">
          <CopyrightIcon />
          <h1>Rodanthe</h1>
        </div>
      </div>
    </FooterDiv>
  );
};

export default Footer;
