import styled from "@emotion/styled";

export const HeaderDiv = styled.header`
  height: 84px;
`;

export const NavbarDiv = styled.nav<{ search: boolean }>`
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
    display: flex;
    align-items: center;
    color: #b9b8b8;
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
      transition: width 0.3s;
      letter-spacing: 4px;
      &:focus {
        background: white;
      }
    }
    .search {
      border-radius: 10px;
      display: inline-block;
      cursor: pointer;
      &:hover {
        background: #e2e2e2;
      }
    }
    .signin {
      color: #b9b8b8;
      display: inline-block;
      margin-left: 30px;
    }
  }
`;

export const MainDiv = styled.main`
  min-height: calc(100vh - 133px - 84px);
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
      h1 {
        display: inline-block;
      }
    }
  }
`;
