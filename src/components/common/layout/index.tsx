import Header from "./header";
import Footer from "./footer";
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
