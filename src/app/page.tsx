import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Head>
        <title>필 터치</title>
        <meta name="description" content="필 터치 테스트 페이지" />
      </Head>
      <main className="relative bg-[#BDE7FF] h-[100vh] flex flex-col justify-center items-center">
        <div className="grid justify-items-center grid-cols-4 w-[95%] h-[86%] items-center mt-28 sm:w-[65%] overflow-y-scroll">
          <Link href="/Contents/fontTest" className="flex flex-col justify-between items-center w-[280px] h-[360px] drop-shadow-[8px_8px_5px_rgba(0,0,0,0.25)]">
            <Image src="/Image/글씨체.jpg" alt="글씨체 테스트 이미지" width={280} height={280} />
            <figcaption className="w-[280px] h-full flex items-center justify-center bg-[#D6E6F5]">
              <p className="text-lg">글씨체 테스트</p>
            </figcaption>
          </Link>
          <Link
            href="/Contents/drawTreeTest"
            className="flex flex-col justify-between items-center w-[280px] h-[360px] drop-shadow-[8px_8px_5px_rgba(0,0,0,0.25)]"
          >
            <Image src="/Image/나무 이미지.png" alt="나무 이미지" width={280} height={280} className="bg-white" />
            <figcaption className="w-[280px] h-full flex items-center justify-center bg-[#D6F5E8]">
              <p className="text-lg">그림 테스트(나무)</p>
            </figcaption>
          </Link>
          <Link
            href="/Contents/drawHomeTest"
            className="flex flex-col justify-between items-center w-[280px] h-[360px] drop-shadow-[8px_8px_5px_rgba(0,0,0,0.25)]"
          >
            <Image src="/Image/집 이미지.png" alt="집 이미지" width={280} height={280} className="bg-white" />
            <figcaption className="w-[280px] h-full flex items-center justify-center bg-[#D6F5E8]">
              <p className="text-lg">그림 테스트(집)</p>
            </figcaption>
          </Link>
          <Link
            href="/Contents/badComment"
            className="flex flex-col justify-between items-center w-[280px] h-[360px] drop-shadow-[8px_8px_5px_rgba(0,0,0,0.25)]"
          >
            <Image src="/Image/악플.png" alt="악플" width={280} height={280} className="bg-white" />
            <figcaption className="w-[280px] h-full flex items-center justify-center bg-[#FBF5C5]">
              <p className="text-lg">악플러 인생 테스트</p>
            </figcaption>
          </Link>
          <a
            href="https://www.dreaminterpretationai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between items-center w-[280px] h-[360px] drop-shadow-[8px_8px_5px_rgba(0,0,0,0.25)]"
          >
            <Image src="/Image/꿈꾸는 강아지.png" alt="꿈꾸는 강아지" width={280} height={280} className="bg-white" />
            <figcaption className="w-[280px] h-full flex items-center justify-center bg-[#CDB8DD]">
              <p className="text-lg">해몽 테스트</p>
            </figcaption>
          </a>
          <Link href="/Contents" className="flex flex-col justify-between items-center w-[280px] h-[360px] drop-shadow-[8px_8px_5px_rgba(0,0,0,0.25)]">
            <Image src="/Image/글씨체.jpg" alt="글씨체 테스트 이미지" width={280} height={280} className="bg-white" />
            <figcaption className="w-[280px] h-full flex items-center justify-center bg-[#D6E6F5]">
              <p className="text-lg">사이코패스 테스트</p>
            </figcaption>
          </Link>
          <Link href="/Contents" className="flex flex-col justify-between items-center w-[280px] h-[360px] drop-shadow-[8px_8px_5px_rgba(0,0,0,0.25)]">
            <Image src="/Image/글씨체.jpg" alt="글씨체 테스트 이미지" width={280} height={280} className="bg-white" />
            <figcaption className="w-[280px] h-full flex items-center justify-center bg-[#D6E6F5]">
              <p className="text-lg">나의 정신건강 분석</p>
            </figcaption>
          </Link>
          <Link href="/Contents" className="flex flex-col justify-between items-center w-[280px] h-[360px] drop-shadow-[8px_8px_5px_rgba(0,0,0,0.25)]">
            <Image src="/Image/글씨체.jpg" alt="글씨체 테스트 이미지" width={280} height={280} className="bg-white" />
            <figcaption className="w-[280px] h-full flex items-center justify-center bg-[#D6E6F5]">
              <p className="text-lg">자제력 테스트</p>
            </figcaption>
          </Link>
        </div>
      </main>
    </div>
  );
}
