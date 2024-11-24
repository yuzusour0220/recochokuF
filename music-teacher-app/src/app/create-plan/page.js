"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';

const LearningPlanPage = () => {
  const [savedData, setSavedData] = useState(null);
  const [learningPlan, setLearningPlan] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataAndGeneratePlan = async () => {
      try {
        // 1. Flaskサーバーからデータを取得
        const response = await fetch("http://127.0.0.1:5000/get_data", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("データの取得に失敗しました");
        }

        const data = await response.json();
        const latestData = data[data.length - 1];

        setSavedData(latestData);

        // 2. Dify APIにデータを送信
        const difyResponse = await fetch("https://api.dify.ai/v1/completion-messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer app-C9BkndzIHUluQyXMZdomT8N1`, // 実際のAPIキーに置き換えてください
          },
          body: JSON.stringify({
            inputs: {
              instrument: latestData.instrument,
              level: latestData.level.toString(),
              goal: latestData.goal,
              time: latestData.time,
              genre: latestData.genre,
            },
            response_mode: "blocking",
            user: "user-123",
          }),
        });

        if (!difyResponse.ok) {
          const errorData = await difyResponse.json();
          throw new Error(errorData.message || "Dify APIからのレスポンスでエラーが発生しました");
        }

        const difyResult = await difyResponse.json();

        setLearningPlan(difyResult.answer);

      } catch (err) {
        console.error("Error:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataAndGeneratePlan();
  }, []);

  if (isLoading) {
    return <div className="text-center mt-10">読み込み中...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">エラー: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center">学習プラン</h1>
        {learningPlan ? (
          <>
            <ReactMarkdown className="prose prose-lg">
              {learningPlan}
            </ReactMarkdown>

            <div className="mt-8 text-center">
              <Link href="/mypage" passHref>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  マイページに戻る
                </button>
              </Link>
            </div>
          </>
        ) : (
          <p className="text-center">学習プランを生成できませんでした。</p>
        )}
      </div>
    </div>
  );
};

export default LearningPlanPage;
