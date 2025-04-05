"use client"; // ← App Router の場合必要
import Navbar from "../../components/nav"; // 相対パスでインポート
import "../../app/globals.css";
import Image from "next/image";
import Link from "next/link"; // Link コンポーネントをインポート

const images = ["/images/program1.jpg"];

export default function Program() {
  return (
    <>
      <Navbar />
      <div className="max-w-[1300px] mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md cursor-pointer flex justify-center"
            >
              <Link href="https://omikuji-sigma.vercel.app/">
                {" "}
                {/* 画像をクリックしたら遷移するURLを指定 */}
                <Image
                  src={src}
                  alt={`Image ${index}`}
                  width={350}
                  height={350}
                  unoptimized={true} // 最適化を無効にする
                  className="w-full h-auto object-cover cursor-pointer"
                  priority={index === 0} // 最初の画像に優先度を追加
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
