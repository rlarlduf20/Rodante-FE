import Header from "./header/Header";
import Footer from "./footer/Footer";
import { MainDiv } from "../../../styles/layout";
import React from "react";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      <MainDiv>{children}</MainDiv>
      <Footer />
    </>
  );
};

export default Layout;
