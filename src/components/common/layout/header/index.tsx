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
      <Navbar ylocation={ylocation} />
    </HeaderDiv>
  );
};

export default Header;
