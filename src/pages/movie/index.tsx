"use client"; // ← App Router の場合必要
import Navbar from "../../components/nav"; // 相対パスでインポート
import "../../app/globals.css";
import Image from "next/image";
import { useState } from "react"; // クリックした本の感想を表示するために useState を使用

// 本の画像と感想のデータの型定義
interface Movie {
  src: string; // 本の画像URL
  alt: string; // 画像の代替テキスト
  title: string; // 本のタイトル
  description: string; // 本の感想
}

// 本のデータ
const movies: Movie[] = [
  {
    src: "/images/movie1.jpg",
    alt: "Movie 1",
    title: "",
    description: "",
  },
  {
    src: "/images/movie2.jpg",
    alt: "Movie 2",
    title: "",
    description: "",
  },
  {
    src: "/images/movie3.jpg",
    alt: "Movie 3",
    title: "",
    description: "",
  },
  {
    src: "/images/movie4.jpg",
    alt: "Movie 4",
    title: "",
    description: "",
  },
  {
    src: "/images/movie5.jpg",
    alt: "Movie 5",
    title: "",
    description: "",
  },
  {
    src: "/images/movie6.jpg",
    alt: "Movie 6",
    title: "",
    description: "",
  },
  {
    src: "/images/movie7.jpg",
    alt: "Movie 7",
    title: "",
    description: "",
  },
  {
    src: "/images/movie8.jpg",
    alt: "Movie 8",
    title: "",
    description: "",
  },
  {
    src: "/images/movie9.jpg",
    alt: "Movie 9",
    title: "",
    description: "",
  },
  {
    src: "/images/movie10.jpg",
    alt: "Movie 10",
    title: "",
    description: "",
  },
  {
    src: "/images/movie11.jpg",
    alt: "Movie 11",
    title: "",
    description: "",
  },
];

export default function Book() {
  const [selectedComment, setSelectedComment] = useState<string | null>(null);

  const handleImageClick = (comment: string) => {
    setSelectedComment(comment);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-[1300px] mx-auto p-4">
        <p
          className=" 
      font-bold mb-6 text-left text-black"
        >
          鑑賞した映画集
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md cursor-pointer flex justify-center transition-transform transform hover:scale-105 duration-300"
            >
              <Image
                src={movie.src}
                alt={movie.alt}
                width={350} // サイズを少し大きめに変更
                height={350} // サイズを少し大きめに変更
                unoptimized={true}
                className="object-cover" // オブジェクトをカバー
                onClick={() => handleImageClick(movie.description)}
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* 本の感想の表示 */}
        {selectedComment && (
          <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
              <p className="mb-4 text-black">{selectedComment}</p>
              <button
                onClick={() => setSelectedComment(null)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                閉じる
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
