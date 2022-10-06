import { NavbarDiv } from "../../../../styles/layout";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useRef } from "react";
import SideBlock from "./SideBlock";
import Drawer from "@mui/material/Drawer";

interface NavbarType {
  ylocation: number;
}
const Navbar = ({ ylocation }: NavbarType) => {
  const [search, setSearch] = useState(false);
  const [isHambar, setIsHambar] = useState(false);
  const inputRef = useRef<any>();
  const onClickSearch = () => {
    setSearch((prev) => !prev);
    inputRef.current.focus();
  };
  const onClickHambar = () => {
    setIsHambar((prev) => !prev);
  };
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsHambar(open);
    };
  return (
    <>
      <NavbarDiv search={search} ylocation={ylocation}>
        <Link href="/">
          <a>
            <h1 className="logo">Rodanthe</h1>
          </a>
        </Link>
        <div className="navbarItem">
          <div className="video_register">
            <Link href="/videoRegi">
              <a>
                <h1>영상 등록</h1>
              </a>
            </Link>
          </div>
          <div className="challenge">
            <Link href="#">
              <a>
                <h1>도전 웹드라마</h1>
              </a>
            </Link>
          </div>
        </div>
        <div className="none"></div>
        <div className="etc">
          <input placeholder="제목" className="input" ref={inputRef} />

          <div className="search" onClick={onClickSearch}>
            <SearchIcon />
          </div>

          <div className="signin">
            <Link href="/signin">
              <a>
                <h1>로그인/가입</h1>
              </a>
            </Link>
          </div>
        </div>
        <div className="hambar" onClick={onClickHambar}>
          <MenuIcon />
        </div>
      </NavbarDiv>
      <Drawer anchor="right" open={isHambar} onClose={toggleDrawer(false)}>
        <SideBlock toggleDrawer={toggleDrawer} setIsHambar={setIsHambar} />
      </Drawer>
    </>
  );
};

export default Navbar;
