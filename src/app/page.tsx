"use client";
import Navbar from "../components/nav";
import { motion } from "framer-motion";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex items-center justify-center bg-white">
        {/* Hello World */}
        <motion.h1
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1000,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
          }}
          className="text-black text-5xl md:text-7xl font-extrabold tracking-wide z-10 drop-shadow-md"
        >
          Hello World
        </motion.h1>
      </div>
    </>
  );
}
