import { NavbarDiv } from "../../../../styles/layout";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import SideBlock from "./SideBlock";
import Drawer from "@mui/material/Drawer";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [isHambar, setIsHambar] = useState(false);
  const onClickSearch = () => {
    setSearch((prev) => !prev);
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
      <NavbarDiv search={search}>
        <Link href="/">
          <a>
            <h1 className="logo">Rodante</h1>
          </a>
        </Link>
        <div className="navbarItem">
          <div className="video_register">
            <Link href="#">
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
          <input placeholder="제목" className="input" />

          <div className="search" onClick={onClickSearch}>
            <SearchIcon />
          </div>

          <div className="signin">
            <Link href="#">
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
