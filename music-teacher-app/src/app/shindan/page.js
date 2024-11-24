"use client";

import Link from "next/link";
import { useState } from "react";

const DiagnosticPage = () => {
  const [instrument, setInstrument] = useState("");
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("1");
  const [genre, setGenre] = useState("");
  const [online, setOnline] = useState("");
  const [region, setRegion] = useState("");
  const [showRegion, setShowRegion] = useState(false);
  const [otherInstrument, setOtherInstrument] = useState("");
  const [otherGenre, setOtherGenre] = useState("");
  const [instructionPeriod, setInstructionPeriod] = useState("");
  const [customPeriod, setCustomPeriod] = useState("");
  const [showCustomPeriod, setShowCustomPeriod] = useState(false);

  /**
   * オンライン/オフラインの選択時に地域選択を制御する関数
   * @param {string} value - ユーザーが選択したオンラインオプション（"Yes", "No", "どちらでも"）
   */
  const handleOnlineChange = (value) => {
    setOnline(value);
    setShowRegion(value !== "Yes");
    if (value === "Yes") setRegion("");
  };

  /**
   * 指導期間の選択時にカスタム期間入力を制御する関数
   * @param {string} value - ユーザーが選択した指導期間
   */
  const handleInstructionPeriodChange = (value) => {
    setInstructionPeriod(value);
    setShowCustomPeriod(value === "その他"); // 「その他」が選択された場合のみカスタム入力を表示
    if (value !== "その他") setCustomPeriod(""); // 「その他」でない場合、カスタム入力をリセット
  };

  /**
   * フォームの入力内容がすべて有効かを確認する関数
   * @returns {boolean} - 有効であればtrue、無効であればfalse
   */
  const isFormValid = () => {
    return (
      instrument &&
      goal &&
      level &&
      genre &&
      online &&
      (showRegion ? region : true) // 地域選択が必要な場合はregionもチェック
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-gray-100 flex items-center justify-center p-6">
      {/* フォームを囲むコンテナ */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl border border-gray-200">
        {/* ページタイトル */}
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
          診断ページ
        </h1>
        <form>
          {/* 楽器選択フィールド */}
          <div className="mb-6">
            <label
              className="block text-gray-900 font-semibold mb-2"
              htmlFor="instrument"
            >
              楽器<span className="text-red-500">*</span>
            </label>
            <select
              id="instrument"
              value={instrument}
              onChange={(e) => setInstrument(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-pink-400 focus:outline-none transition-shadow"
            >
              <option value="">選択してください</option>
              <option value="ピアノ">ピアノ</option>
              <option value="バイオリン">バイオリン</option>
              <option value="チェロ">チェロ</option>
              <option value="その他">その他</option>
            </select>
            {/* 「その他」が選択された場合の追加入力フィールド */}
            {instrument === "その他" && (
              <input
                type="text"
                placeholder="具体的に入力してください"
                value={otherInstrument}
                onChange={(e) => setOtherInstrument(e.target.value)}
                className="w-full mt-3 border border-gray-300 p-3 rounded focus:ring-2 focus:ring-pink-400 focus:outline-none transition-shadow placeholder-gray-600"
              />
            )}
          </div>

          {/* 目標入力フィールド */}
          <div className="mb-6">
            <label
              className="block text-gray-900 font-semibold mb-2"
              htmlFor="goal"
            >
              目標<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="例: コンサートで演奏したい"
              className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-pink-400 focus:outline-none transition-shadow placeholder-gray-600"
            />
          </div>

          {/* 指導期間選択フィールド */}
          <div className="mb-6">
            <label
              className="block text-gray-900 font-semibold mb-2"
              htmlFor="instructionPeriod"
            >
              指導期間<span className="text-red-500">*</span>
            </label>
            <select
              id="instructionPeriod"
              value={instructionPeriod}
              onChange={(e) => handleInstructionPeriodChange(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-pink-400 focus:outline-none transition-shadow"
            >
              <option value="">選択してください</option>
              <option value="1ヶ月">1ヶ月</option>
              <option value="3ヶ月">3ヶ月</option>
              <option value="6ヶ月">6ヶ月</option>
              <option value="その他">その他</option>
            </select>
            {/* 「その他」が選択された場合のカスタム期間入力 */}
            {showCustomPeriod && (
              <input
                type="text"
                placeholder="具体的に入力してください"
                value={customPeriod}
                onChange={(e) => setCustomPeriod(e.target.value)}
                className="w-full mt-3 border border-gray-300 p-3 rounded focus:ring-2 focus:ring-pink-400 focus:outline-none transition-shadow placeholder-gray-600"
              />
            )}
          </div>

          {/* レベル選択 */}
          <div className="mb-6">
            <label className="block text-gray-900 font-semibold mb-2">
              レベル<span className="text-red-500">*</span>
            </label>
            <div className="flex justify-between">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num} className="flex items-center text-gray-900">
                  <input
                    type="radio"
                    name="level"
                    value={num}
                    checked={level === num.toString()}
                    onChange={(e) => setLevel(e.target.value)}
                    className="mr-2"
                  />
                  {num}
                </label>
              ))}
            </div>
          </div>

          {/* ジャンル選択 */}
          <div className="mb-6">
            <label
              className="block text-gray-900 font-semibold mb-2"
              htmlFor="genre"
            >
              ジャンル<span className="text-red-500">*</span>
            </label>
            <select
              id="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-pink-400 focus:outline-none transition-shadow"
            >
              <option value="">選択してください</option>
              <option value="POPS">POPS</option>
              <option value="ジャズ">ジャズ</option>
              <option value="クラシック">クラシック</option>
              <option value="その他">その他</option>
            </select>
            {/* 「その他」が選択された場合の追加入力フィールド */}
            {genre === "その他" && (
              <input
                type="text"
                placeholder="具体的に入力してください"
                value={otherGenre}
                onChange={(e) => setOtherGenre(e.target.value)}
                className="w-full mt-3 border border-gray-300 p-3 rounded focus:ring-2 focus:ring-pink-400 focus:outline-none transition-shadow placeholder-gray-600"
              />
            )}
          </div>

          {/* オンライン選択 */}
          <div className="mb-6">
            <label className="block text-gray-900 font-semibold mb-2">
              オンライン<span className="text-red-500">*</span>
            </label>
            <div className="flex justify-between">
              {["Yes", "No", "どちらでも"].map((option) => (
                <label key={option} className="flex items-center text-gray-900">
                  <input
                    type="radio"
                    name="online"
                    value={option}
                    checked={online === option}
                    onChange={(e) => handleOnlineChange(e.target.value)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* 地域選択 */}
          {showRegion && (
            <div className="mb-6">
              <label
                className="block text-gray-900 font-semibold mb-2"
                htmlFor="region"
              >
                地域選択<span className="text-red-500">*</span>
              </label>
              <select
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-pink-400 focus:outline-none transition-shadow"
              >
                <option value="">地域を選択してください</option>
                <option value="北海道">北海道</option>
                <option value="東京">東京</option>
                <option value="大阪">大阪</option>
                <option value="その他">その他</option>
              </select>
            </div>
          )}

          {/* 送信ボタン */}
          <Link
            href="/teachers"
            className={`w-full text-center block py-3 rounded-lg transition-colors ${isFormValid()
              ? "bg-pink-400 text-white hover:bg-pink-500"
              : "bg-gray-300 text-gray-500 pointer-events-none"
              }`}
          >
            先生とマッチング
          </Link>
        </form>
      </div>
    </div>
  );
};

export default DiagnosticPage;
