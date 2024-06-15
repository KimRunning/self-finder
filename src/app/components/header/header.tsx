import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 h-[120px] z-10 bg-[#FFFFFF] w-[100%] flex justify-between border-b drop-shadow-[0px_3px_3px_rgba(0,0,0,0.25)]">
      <a href="/" className="w-[250px] h-[120px] bg-[#48BAF3] text-2xl flex items-center justify-center">
        필 터치
      </a>
      <nav className="flex justify-evenly items-center w-[30%] h-[120px] bg-[#48BAF3] text-[#717273] text-2xl">
        <a href="/" className="text-2xl">
          제작자 / 문의
        </a>
        <span className="text-2xl">Languiges</span>
      </nav>
    </header>
  );
};

export default Header;
