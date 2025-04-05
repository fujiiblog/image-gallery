"use client"; // ← App Router の場合必要
import Navbar from "../../components/nav"; // 相対パスでインポート
import "../../app/globals.css";
import Image from "next/image";
import { useState } from "react"; // クリックした本の感想を表示するために useState を使用

// 本の画像と感想のデータの型定義
interface Book {
  src: string; // 本の画像URL
  alt: string; // 画像の代替テキスト
  title: string; // 本のタイトル
  description: string; // 本の感想
}

// 本のデータ
const books: Book[] = [
  {
    src: "/images/book1.jpg",
    alt: "Book 1",
    title: "世界一流エンジニアの思考法",
    description:
      "この本は世界一流のエンジニアの思考法を身につける為の書籍である。",
  },
  {
    src: "/images/book2.jpg",
    alt: "Book 2",
    title: "マンガでわかるデータベース",
    description: "この本は初心者向けでデータベースの基礎が学べる書籍です。",
  },
  {
    src: "/images/book3.jpg",
    alt: "Book 3",
    title: "良いコード悪いコードで学ぶ設計入門",
    description:
      "この本は設計の仕方や良いコードと悪いコードは何かを学べる書籍です。",
  },
  {
    src: "/images/book4.jpg",
    alt: "Book 4",
    title: "リーダブルコードC#",
    description:
      "この本は設計の仕方や良いコードと悪いコードは何かを学べる書籍です。",
  },
  {
    src: "/images/book5.jpg",
    alt: "Book 5",
    title: "これからはじめるReact実践入門：コンポーネントの基本から",
    description:
      "この本は設計の仕方や良いコードと悪いコードは何かを学べる書籍です。",
  },
  {
    src: "/images/book6.jpg",
    alt: "Book 6",
    title: "これからはじめるReact実践入門：コンポーネントの基本から",
    description:
      "この本は設計の仕方や良いコードと悪いコードは何かを学べる書籍です。",
  },
  {
    src: "/images/book7.jpg",
    alt: "Book 7",
    title: "これからはじめるReact実践入門：コンポーネントの基本から",
    description:
      "この本は設計の仕方や良いコードと悪いコードは何かを学べる書籍です。",
  },
];

export default function Book() {
  const [selectedComment, setSelectedComment] = useState<string | null>(null); // クリックした本の感想を表示
  const handleImageClick = (comment: string) => {
    setSelectedComment(comment);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-[1300px] mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {books.map((book, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md cursor-pointer"
            >
              <Image
                src={book.src}
                alt={book.alt}
                width={300}
                height={300}
                unoptimized={true} // 最適化を無効にする
                className="w-full h-auto object-cover"
                onClick={() => handleImageClick(book.description)}
                priority={index === 0} // 最初の画像に優先度を追加
              />
              <div className="text-center mt-2 text-black">{book.title}</div>
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
