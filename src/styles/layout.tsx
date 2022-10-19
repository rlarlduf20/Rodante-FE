import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HeaderDiv = styled.header<{ ylocation: number }>`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) => props.ylocation > 400 && "white"};
  height: 84px;
  z-index: 10;
`;

export const NavbarDiv = styled.nav<{
  search: boolean;
}>`
  max-width: calc(100vw - 100px);
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  h1 {
    display: inline-block;
  }
  .logo {
    color: black;
  }
  .navbarItem {
    @media (max-width: 800px) {
      display: none;
    }
    display: flex;
    align-items: center;
    color: black;
    .video_register {
      display: inline-block;
      margin-left: 50px;
      &:hover {
        color: #f2ea9c;
      }
    }
    .challenge {
      display: inline-block;
      margin-left: 30px;
      &:hover {
        color: #f2ea9c;
      }
    }
  }
  .none {
    flex-grow: 1;
  }
  .etc {
    display: flex;
    align-items: center;
    .input {
      border: none;
      border-bottom: 1px solid #e2e2e2;
      padding: ${(props) =>
        props.search ? "10px 18px 10px 12px" : "10px 0 10px 0"};
      outline: none;
      width: ${(props) => (props.search ? "150px" : 0)};
      @media (max-width: 500px) {
        width: ${(props) => (props.search ? "90px" : 0)};
      }
      transition: width 0.3s;
      letter-spacing: 4px;
      &:focus {
        background: white;
      }
    }
    .search {
      border-radius: ${(props) => (props.search ? 0 : "20px")};
      display: inline-block;
      cursor: pointer;
      background: ${(props) => (props.search ? "white" : "transparent")};

      padding: ${(props) => (props.search ? "4.35px 0 4.35px 0" : 0)};
      &:hover {
        background: white;
      }
    }
    .signin {
      color: black;
      display: inline-block;
      @media (max-width: 800px) {
        display: none;
      }
      margin-left: 30px;
    }
  }
  .hambar {
    display: none;
    margin-left: 16px;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      background: white;
    }
    @media (max-width: 800px) {
      display: inline-block;
    }
  }
`;

export const SideBox = styled(Box)`
  position: relative;
  h1 {
    display: inline-block;
    color: gray;
  }
  .closebtn {
    height: 84px;
    padding-left: 15px;
    background: #e2e2e2;
    &:hover {
      background: #f2ea9c;
    }
    display: flex;
    cursor: pointer;
    align-items: center;
    .sideLogo {
      margin-left: 100px;
    }
  }
  .sideVideoR {
    padding: 20px 0 20px 15px;
    cursor: pointer;

    &:hover h1 {
      color: #f2ea9c;
    }
  }
  .sideChalle {
    padding: 20px 0 20px 15px;
    cursor: pointer;
    &:hover h1 {
      color: #f2ea9c;
    }
  }
  .sideRegi {
    padding: 20px 0 20px 15px;
    cursor: pointer;

    &:hover h1 {
      color: #f2ea9c;
    }
  }
`;

export const MainDiv = styled.main`
  width: 100%;
  min-height: calc(100vh - 133px);
`;

export const FooterDiv = styled.footer`
  height: 133px;
  width: 100%;
  background: #f2ea9c;
  .inner_footer {
    max-width: calc(100vw - 100px);
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    .footer_content {
      color: white;
      font-size: 24px;
      @media (max-width: 600px) {
        font-size: 20px;
      }
      h1 {
        display: inline-block;
      }
    }
  }
`;
