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
    description: "この本は世界一流のエンジニアの思考法が学べる書籍です。",
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
    description: "C#の綺麗な書き方を学べる書籍です。",
  },
  {
    src: "/images/book5.jpg",
    alt: "Book 5",
    title: "これからはじめるReact実践入門：コンポーネントの基本から",
    description: "Reactの基礎を学習できる書籍です。",
  },
  {
    src: "/images/book6.jpg",
    alt: "Book 6",
    title: "企画脳",
    description: "企画について学べる書籍です。",
  },
  {
    src: "/images/book7.jpg",
    alt: "Book 7",
    title: "夢をかなえるゾウ",
    description: "夢のかなえ方を学べる書籍です。",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {books.map((book, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md cursor-pointer flex justify-center" // 中央揃え
            >
              <Image
                src={book.src}
                alt={book.alt}
                width={350} // サイズを少し大きめに変更
                height={350} // サイズを少し大きめに変更
                unoptimized={true}
                className="object-cover" // オブジェクトをカバー
                onClick={() => handleImageClick(book.description)}
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
