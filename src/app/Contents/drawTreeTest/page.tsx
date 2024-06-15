import React from "react";

export default function DrawTreeTest() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center mt-[100px] bg-blue-500">
        <section className=" w-[380px] h-[700px] flex flex-col items-center bg-yellow-300 justify-evenly p-4">
          <div className=" flex flex-col items-center w-full h-[85px] justify-between">
            <h2 className="text-[34px]">나무 그림 테스트</h2>
            <p className="text-center">테스트를 통해 내 특징 / 심리상태를 알아보세요!</p>
          </div>
          <form className="flex flex-col justify-between items-center w-full h-[500px]">
            <div className=" flex justify-between w-full">
              <button className="bg-white w-[160px] py-4 px-2 rounded-[100px]">이미지 파일 첨부</button>
              <button className="bg-white w-[160px] py-4 px-2 rounded-[100px]">직접 쓰기</button>
            </div>
            <div className="w-full h-[350px] flex flex-col items-center rounded-[20px] bg-white p-4 justify-between">
              <span className="text-[28px]">추가 정보</span>
              <input placeholder="나이" className="w-[280px] h-[40px] p-2 border border-gray-300 rounded" />
              <select className="w-[280px] h-[40px] p-2 border border-gray-300 rounded">
                <option value="" disabled selected>
                  성별
                </option>
                <option value="남">남</option>
                <option value="여">여</option>
              </select>
              <input placeholder="직업" className="w-[280px] h-[40px] p-2 border border-gray-300 rounded" />
              <textarea
                className="text-gray-500 rounded font-bold resize-none w-[280px] h-[100px] bg-white bg-opacity-90 p-2 border border-gray-300"
                placeholder="그림에 대한 간단한 설명"
                // onChange={handleInputChange}
              />
            </div>
            <div className="bg-brown-100">
              <button className="bg-gray-300 w-[140px] h-[60px] py-2 px-4 rounded">제출하기</button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
