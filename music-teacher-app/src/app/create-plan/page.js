"use client";

import Link from "next/link";

const LearningPlanPage = ({ searchParams }) => {
  // const teacher = searchParams?.teacher || "未指定"; // URLからクエリパラメータを取得

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center">学習プラン</h1>
        {/* <h2 className="text-xl font-semibold mb-4">選択した先生: {teacher}</h2> */}
        <p className="mb-4">
          <strong>
            以下は、ピアノのコンサート出場を目指す3ヶ月間の学習プランです。
            初心者レベル（レベル1）で、ジャンルはクラシックに焦点を当てています。
          </strong>
        </p>

        <h3 className="text-lg font-bold mt-6">1ヶ月目：基礎の習得</h3>
        <p className="mb-2">週1回のレッスン（対面またはオンライン）</p>
        <ul className="list-disc ml-5 mb-4">
          <li>基本的な姿勢、手の位置を学ぶ</li>
          <li>簡単な音階（Cメジャー、Aマイナーなど）を練習</li>
          <li>簡単な楽曲（例：バッハの「メヌエット」）を練習</li>
        </ul>
        <p className="mb-2">自宅練習（毎日30分）</p>
        <ul className="list-disc ml-5 mb-4">
          <li>音階練習</li>
          <li>取り組んでいる楽曲の練習</li>
          <li>メトロノームを使ったリズム感の強化</li>
        </ul>

        <h3 className="text-lg font-bold mt-6">2ヶ月目：楽曲の習得</h3>
        <p className="mb-2">週1回のレッスン</p>
        <ul className="list-disc ml-5 mb-4">
          <li>新しい楽曲（例：モーツァルトの「トルコ行進曲」）に挑戦</li>
          <li>アーティキュレーションやダイナミクスの基礎を学ぶ</li>
          <li>演奏のテクニック向上を図る</li>
        </ul>
        <p className="mb-2">自宅練習（毎日45分）</p>
        <ul className="list-disc ml-5 mb-4">
          <li>既習の楽曲の復習</li>
          <li>新しい楽曲のパート分けしての練習</li>
          <li>指の独立性を高めるためのエクササイズ</li>
        </ul>

        <h3 className="text-lg font-bold mt-6">3ヶ月目：コンサート準備</h3>
        <p className="mb-2">週1回のレッスン</p>
        <ul className="list-disc ml-5 mb-4">
          <li>本番を意識した演奏指導</li>
          <li>ショーケースとしての演奏方法を学ぶ</li>
          <li>2曲以上の楽曲を仕上げる</li>
        </ul>
        <p className="mb-2">自宅練習（毎日1時間）</p>
        <ul className="list-disc ml-5 mb-4">
          <li>本番に向けたリハーサル</li>
          <li>録音して自己評価</li>
          <li>観客を意識した演奏練習（家族や友人の前で演奏）</li>
        </ul>

        <h3 className="text-lg font-bold mt-6">その他のサポート</h3>
        <ul className="list-disc ml-5 mb-4">
          <li>オンライン教材（動画チュートリアルや楽譜を活用）</li>
          <li>フィードバック（レッスン後に録音を聴き、改善点をメモ）</li>
          <li>
            メンタル準備（本番前のリラックス法や集中力を高めるテクニックを学ぶ）
          </li>
        </ul>

        <p className="mt-4">
          <strong>
            このプランを基に、生徒の進捗に応じて調整することが重要です。
            コンサート出場に向けて、自信を持って演奏できるようになることを目指しましょう。
          </strong>
        </p>

        <div className="mt-8 text-center">
          <Link href="/mypage" passHref>
            マイページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearningPlanPage;
