import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* My App をトップページへのリンクにする */}
        <Link
          href="/"
          className="text-black text-xl font-semibold mb-4 inline-block"
        >
          My App
        </Link>

        {/* メニュー（Blog と Art を横並びに配置） */}
        <ul className="flex space-x-6 mt-2">
          <li>
            <Link href="/book" className="text-gray-400 hover:text-black">
              Book
            </Link>
          </li>
          <li>
            <Link href="/art" className="text-gray-400 hover:text-black">
              Art
            </Link>
          </li>
          <li>
            <Link href="/program" className="text-gray-400 hover:text-black">
              Program
            </Link>
          </li>
          <li>
            <Link href="/movie" className="text-gray-400 hover:text-black">
              Movie
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
