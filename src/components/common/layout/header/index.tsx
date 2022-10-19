import { useEffect, useState } from "react";
import { HeaderDiv } from "../../../../styles/layout";
import Navbar from "./Navbar";

const Header = () => {
  const [ylocation, setYlocation] = useState(0);
  if (typeof window !== undefined) {
    useEffect(() => {
      window.addEventListener("scroll", function () {
        setYlocation(scrollY);
      });
    }, []);
  }
  return (
    <HeaderDiv ylocation={ylocation}>
      <Navbar />
    </HeaderDiv>
  );
};

export default Header;
