import React from "react";

export default function DrawTreeTest() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center mt-[100px] bg-blue-500">
        <section className=" w-[380px] h-[530px] flex flex-col items-center bg-yellow-300 justify-between p-2">
          <div className=" flex flex-col items-center w-full h-[85px] justify-between">
            <h2 className="text-[34px]">악플러 테스트</h2>
            <p className="text-center">악플러들은 무슨 생각이고 어떤 삶을 살아갈까?</p>
          </div>
          <form className="flex flex-col justify-around items-center w-full h-[430px]">
            <div className="w-full h-[320px] flex flex-col items-center rounded-[20px] bg-white justify-around p-6">
              <span className=" text-[28px]">추가정보</span>
              <textarea
                className="text-gray-500 rounded font-bold resize-none w-[280px] h-[100px] bg-white bg-opacity-90 p-2 border border-gray-300"
                placeholder="그림에 대한 간단한 설명"
                // onChange={handleInputChange}
              />
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
