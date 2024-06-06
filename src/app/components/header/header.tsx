import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 z-10 bg-[#FAF7F3] w-[100%] flex justify-between p-4 border-b">
      <h1 className="text-4xl">필 터치</h1>
      <nav className="flex justify-between w-[12%]">
        <a href="#" className="text-xl">
          제작자 / 문의
        </a>
        <a href="#" className="text-xl">
          로그인
        </a>
      </nav>
    </header>
  );
};

export default Header;
