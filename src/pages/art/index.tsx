"use client"; // ← App Router の場合必要
import Navbar from "../../components/nav"; // 相対パスでインポート
import "../../app/globals.css";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/images/art1.jpg",
  "/images/art2.jpg",
  "/images/art3.jpg",
  "/images/art4.jpg",
];

export default function Art() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // クリックした画像のURL

  const handleImageClick = (src: string) => {
    setSelectedImage(src); // クリックした画像のURLをセット
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // モーダルを閉じる
  };

  return (
    <>
      <Navbar />
      <div className="max-w-[1300px] mx-auto p-4">
        <p
          className=" 
      font-bold mb-6 text-left text-black"
        >
          作成したアート作品集
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md cursor-pointer flex justify-center transition-transform transform hover:scale-105 duration-300"
            >
              <Image
                src={src}
                alt={`Image ${index}`}
                width={350}
                height={350}
                unoptimized={true} // 最適化を無効にする
                className="w-full h-auto object-cover cursor-pointer"
                onClick={() => handleImageClick(src)} // 画像クリック時に拡大
                priority={index === 0} // 最初の画像に優先度を追加
              />
            </div>
          ))}
        </div>
      </div>

      {/* 画像を拡大表示するモーダル */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseModal} // モーダル外をクリックで閉じる
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Expanded Image"
              width={800}
              height={800}
              className="max-w-full max-h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={handleCloseModal} // 閉じるボタン
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
