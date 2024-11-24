"use client";

import Link from "next/link";
import { FaUserCircle, FaHome, FaCog, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-pink-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* サービス名 */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/mypage">
              <img
                src="/images/logo.png"
                alt="ハーモマッチ ロゴ"
                className="h-10 w-10 mr-3"
              />
            </Link>
            <Link
              href="/mypage"
              className="text-2xl font-bold hover:text-pink-300 transition duration-300"
            >
              ハーモマッチ
            </Link>
          </div>


          {/* ナビゲーションリンク */}
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/mypage"
              className="flex items-center hover:text-pink-300 transition duration-300"
            >
              <FaHome className="mr-1" />
              ホーム
            </Link>
            <Link
              href="/mypage"
              className="flex items-center hover:text-pink-300 transition duration-300"
            >
              <FaUserCircle className="mr-1" />
              メッセージ
            </Link>
            <Link
              href="/mypage"
              className="flex items-center hover:text-pink-300 transition duration-300"
            >
              <FaCog className="mr-1" />
              設定
            </Link>
            <Link
              href="/mypage"
              className="flex items-center hover:text-pink-300 transition duration-300"
            >
              <FaSignOutAlt className="mr-1" />
              ログアウト
            </Link>
          </nav>

          {/* モバイルメニューアイコン（オプション） */}
          {/* ここにモバイルメニュー用のハンバーガーメニューを追加することができます */}
        </div>
      </div>
    </header>
  );
};

export default Header;
