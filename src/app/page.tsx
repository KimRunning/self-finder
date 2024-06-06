import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Head>
        <title>필 터치</title>
        <meta name="description" content="필 터치 테스트 페이지" />
      </Head>

      <main className="relative bg-[#F4EADC] h-[100vh] flex flex-col justify-center items-center">
        <div className=" justify-center grid grid-cols-4 gap-2 sm:gap-8 w-[70%] h-[86%] items-center mt-20">
          <figure className="flex flex-col justify-between items-center w-[400x] h-[380px]">
            <Image src="/Image/글씨체.jpg" alt="글씨체 테스트 이미지" width={300} height={300} className="bg-white" />
            <figcaption className="w-[300px] h-full flex items-center justify-center bg-[#D6E6F5]">
              <p className="text-lg">글씨체 테스트</p>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-between items-center w-[400x] h-[380px] ">
            <Image src="/Image/나무 이미지.png" alt="나무 이미지" width={300} height={300} className="bg-white" />
            <figcaption className="w-[300px] h-full flex items-center justify-center bg-[#D6E6F5]">
              <p className="text-lg">그림 테스트(나무)</p>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-between items-center w-[400x] h-[380px] ">
            <Image src="/Image/집 이미지.png" alt="집 이미지" width={300} height={300} className="bg-white" />
            <figcaption className="w-[300px] h-full flex items-center justify-center bg-[#D6E6F5]">
              <p className="text-lg">그림 테스트(집)</p>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-between items-center  w-[400x] h-[380px]">
            <Image src="/Image/악플.png" alt="악플" width={300} height={300} className="bg-white" />
            <figcaption className="w-[300px] h-full flex items-center justify-center bg-[#D6E6F5]">
              <p className="text-lg">악플러 인생 테스트</p>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-between items-center  w-[400x] h-[380px]">
            <Image src="/Image/꿈꾸는 강아지.png" alt="꿈꾸는 강아지" width={300} height={300} className="bg-white" />
            <figcaption className="w-[300px] h-full flex items-center justify-center bg-[#D6E6F5]">
              <p className="text-lg">해몽 테스트</p>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-between items-center  w-[400x] h-[380px]">
            <Image src="/Image/글씨체.jpg" alt="글씨체 테스트 이미지" width={300} height={300} className="bg-white" />
            <figcaption className="w-[300px] h-full flex items-center justify-center bg-[#D6E6F5]">
              <p className="text-lg">글씨체 테스트</p>
            </figcaption>
          </figure>
        </div>

        <div className="absolute w-[220px] h-[760px] bg-white border border-black left-0"></div>
        <div className="absolute w-[220px] h-[760px] bg-[#FCFCFC] border border-[#181717] right-0"></div>
      </main>
    </div>
  );
}
