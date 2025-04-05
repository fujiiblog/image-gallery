"use client";
import Navbar from "../../components/nav";
import "../../app/globals.css";
import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/images/program1.jpg", link: "https://translation-vert.vercel.app/" },
  { src: "/images/program2.jpg", link: "https://sanmoku.vercel.app/" },
  { src: "/images/program3.jpg", link: "https://react-todo-taupe.vercel.app/" },
  { src: "/images/program4.jpg", link: "https://omikuji-sigma.vercel.app/" },
];

export default function Program() {
  return (
    <>
      <Navbar />
      <div className="max-w-[1300px] mx-auto p-4">
        <p
          className=" 
      font-bold mb-6 text-left text-black"
        >
          作成したプログラミング集
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {images.map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md cursor-pointer flex justify-center transition-transform transform hover:scale-105 duration-300"
            >
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.src}
                  alt={`Image ${index}`}
                  width={350}
                  height={350}
                  unoptimized={true}
                  className="w-full h-auto object-cover cursor-pointer"
                  priority={index === 0}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
