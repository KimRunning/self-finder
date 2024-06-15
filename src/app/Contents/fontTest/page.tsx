import React from "react";

export default function FontTest() {
  return (
    <>
      <main className=" min-h-screen flex items-center justify-center">
        <section className=" w-[380px] h-[350px] flex flex-col items-center justify-between p-4">
          <div className=" flex flex-col items-center w-full h-[85px] justify-between">
            <h2 className="text-[34px]">글씨체 테스트</h2>
            <p className="text-center">필적학을 기반으로 성격, 특성을 파악해 보세요!</p>
          </div>
          <div className=" flex justify-around  w-full">
            <button className="bg-white w-[150px] py-4 px-2 rounded-[100px]">이미지 파일 첨부</button>
            <button className="bg-white w-[150px] py-4 px-2 rounded-[100px]">직접 쓰기</button>
          </div>
          <div className="bg-brown-100">
            <button className="bg-gray-300 w-[140px] h-[60px] py-2 px-4 rounded">제출하기</button>
          </div>
        </section>
      </main>
    </>
  );
}
