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
  const [otherInstrument, setOtherInstrument] = useState("")
  const [instructionPeriod, setInstructionPeriod] = useState("");
  const [customPeriod, setCustomPeriod] = useState("");
  const [showCustomPeriod, setShowCustomPeriod] = useState(false);

  const handleOnlineChange = (value) => {
    setOnline(value);
    if (value !== "Yes") {
      setShowRegion(true);
    } else {
      setShowRegion(false);
      setRegion("");
    }
  };

  const handleOwnershipChange = (value) => {
    setOwnership(value);
    setShowRegion(false); // 地域選択を表示しない
    setRegion(""); // 所持が変更された場合は地域をクリア
  };
  

  const handleInstructionPeriodChange = (value) => {
    setInstructionPeriod(value);
    if (value === "その他") {
      setShowCustomPeriod(true);
    } else {
      setShowCustomPeriod(false);
      setCustomPeriod("");
    }
  };

  // 全ての入力が有効か確認
  const isFormValid = () => {
    return (
      instrument &&
      goal &&
      level &&
      genre &&
      online &&
      (showRegion ? region : true) // regionはオンラインの場合のみ必須
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">診断ページ</h1>
        <form>
          {/* 楽器 */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="instrument">
              楽器<span className="text-red-500">*</span>
            </label>
            <select
              id="instrument"
              value={instrument}
              onChange={(e) => setInstrument(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">選択してください</option>
              <option value="ピアノ">ピアノ</option>
              <option value="バイオリン">バイオリン</option>
              <option value="チェロ">チェロ</option>
              <option value="その他">その他</option>
            </select>

            {/* 「その他」の場合にテキスト入力欄を表示 */}
            {instrument === "その他" && (
              <input
                type="text"
                placeholder="具体的に入力してください"
                value={otherInstrument} // otherInstrument用のstateを別途追加
                onChange={(e) => setOtherInstrument(e.target.value)}
                required
                className="w-full border border-gray-300 p-2 rounded mt-2"
              />
            )}
          </div>

          {/* 目標 */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="goal">
              目標<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              required
              placeholder="例: コンサートで演奏したい"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          {/* 指導期間 */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="instructionPeriod">
              指導期間<span className="text-red-500">*</span>
            </label>
            <select
              id="instructionPeriod"
              value={instructionPeriod}
              onChange={(e) => handleInstructionPeriodChange(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">選択してください</option>
              <option value="1ヶ月">1ヶ月</option>
              <option value="3ヶ月">3ヶ月</option>
              <option value="6ヶ月">6ヶ月</option>
              <option value="その他">その他</option>
            </select>
          </div>

          {/* その他の指導期間 */}
          {showCustomPeriod && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="customPeriod">
                指導期間を入力してください<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="customPeriod"
                value={customPeriod}
                onChange={(e) => setCustomPeriod(e.target.value)}
                required={showCustomPeriod}
                placeholder="例: 2ヶ月"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          )}

          {/* レベル */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              レベル<span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num} className="flex items-center">
                  <input
                    type="radio"
                    name="level"
                    value={num}
                    checked={level === num.toString()}
                    onChange={(e) => setLevel(e.target.value)}
                    required
                    className="mr-2"
                  />
                  {num}
                </label>
              ))}
            </div>
          </div>

          {/* ジャンル */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="genre">
              ジャンル<span className="text-red-500">*</span>
            </label>
            <select
              id="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">選択してください</option>
              <option value="POPS">POPS</option>
              <option value="ジャズ">ジャズ</option>
              <option value="クラシック">クラシック</option>
              <option value="その他">その他</option>
            </select>
          </div>

          {/* オンライン */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              オンライン<span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4">
              {["Yes", "No", "どちらでも"].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    name="online"
                    value={option}
                    checked={online === option}
                    onChange={(e) => handleOnlineChange(e.target.value)}
                    required
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>


          {/* 地域選択（オンラインが Yes または どちらでもの場合） */}
          {showRegion && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="region">
                地域選択<span className="text-red-500">*</span>
              </label>
              <select
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                required
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">地域を選択してください</option>
                <option value="北海道">北海道</option>
                <option value="東京">東京</option>
                <option value="大阪">大阪</option>
                <option value="その他">その他</option>
              </select>
            </div>
          )}

          {/* 診断結果ボタン */}
          <Link
            href="/teachers"
            className={`w-full text-center block p-2 rounded transition-colors ${
              isFormValid()
                ? "bg-teal-500 text-white hover:bg-teal-600"
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