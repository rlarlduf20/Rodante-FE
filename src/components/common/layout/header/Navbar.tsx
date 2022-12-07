import { NavbarDiv } from "../../../../styles/layout";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useRef } from "react";
import SideBlock from "./SideBlock";
import Drawer from "@mui/material/Drawer";
import { useTokenContext } from "../../../../context/tokenState";
import axios from "axios";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [isHambar, setIsHambar] = useState(false);
  const inputRef = useRef<any>();
  const { accessToken } = useTokenContext();
  const onClickSearch = () => {
    if (search === false) {
      setSearch(true);
      inputRef.current.focus();
    } else {
      window.location.replace(`/workSearch?title=${searchInput}`);
    }
  };
  const onClickHambar = () => {
    setIsHambar((prev) => !prev);
  };
  const onClickLogout = (e: any) => {
    localStorage.removeItem("access_token");
    window.location.replace("/");
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
            <h1 className="logo">Rodanthe</h1>
          </a>
        </Link>
        <div className="navbarItem">
          <div className="video_register">
            <Link href="/videoRegi">
              <a>
                <h1>작품 등록</h1>
              </a>
            </Link>
          </div>
        </div>
        <div className="none"></div>
        <div className="etc">
          <input
            placeholder="제목"
            className="input"
            ref={inputRef}
            value={searchInput}
            onChange={(e: any) => setSearchInput(e.target.value)}
          />
          <div className="search" onClick={onClickSearch}>
            <SearchIcon />
          </div>
          {accessToken ? (
            <>
              <div className="mypage">
                <Link href="/mypage">
                  <a>
                    <h1>마이</h1>
                  </a>
                </Link>
              </div>
              <div className="logout" onClick={onClickLogout}>
                <h1>로그아웃</h1>
              </div>
            </>
          ) : (
            <div className="signin">
              <Link href="/signin">
                <a>
                  <h1>로그인/가입</h1>
                </a>
              </Link>
            </div>
          )}
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
