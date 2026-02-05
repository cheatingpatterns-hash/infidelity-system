"use client";

import { useState } from "react";

export default function InputPage() {
  const [chat, setChat] = useState("");
  const [timeline, setTimeline] = useState("");

  return (
    <main className="min-h-screen bg-[#0b0f17] text-white flex items-center justify-center">
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 w-[600px]">
        <h1 className="text-2xl font-bold mb-6">Step 1 — Data Input</h1>

        <div className="space-y-6">
          <textarea
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            placeholder="Paste chat messages here..."
            className="w-full h-32 bg-black/40 border border-white/10 rounded-xl p-4"
          />

          <textarea
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            placeholder="Write timeline events manually..."
            className="w-full h-32 bg-black/40 border border-white/10 rounded-xl p-4"
          />

          <button
            onClick={() => {
              if (!chat || !timeline) return;

              sessionStorage.setItem("chatData", chat);
              sessionStorage.setItem("timelineData", timeline);

              window.location.href = "/analyzing";
            }}
            className="w-full py-4 bg-blue-600 rounded-xl"
          >
            Analyze My Situation
          </button>
        </div>
      </div>
    </main>
  );
}
