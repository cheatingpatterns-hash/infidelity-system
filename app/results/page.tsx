"use client";

import { useEffect, useState } from "react";

export default function ResultsPage() {
  const [data, setData] = useState({
    suspicion: 0,
    gaslight: 0,
    patterns: 0,
    shift: 0,
  });

  useEffect(() => {
    setData({
      suspicion: Number(sessionStorage.getItem("suspicionScore")) || 0,
      gaslight: Number(sessionStorage.getItem("gaslightScore")) || 0,
      patterns: Number(sessionStorage.getItem("patternCount")) || 0,
      shift: Number(sessionStorage.getItem("behaviorShift")) || 0,
    });
  }, []);

  const severityColor =
    data.suspicion > 70
      ? "text-red-500"
      : data.suspicion > 40
      ? "text-amber-400"
      : "text-green-400";

  return (
    <main className="min-h-screen bg-[#0b0f17] text-white p-20">
      <h1 className="text-3xl font-bold mb-12">Behavioral Clarity Dashboard</h1>
<p className="text-white/50 mb-10">
  Deterministic behavioral analysis based on communication patterns and timeline shifts.
</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">


       {/* Suspicion */}
<div className="bg-white/5 border border-white/10 p-4 rounded-2xl shadow-lg flex flex-col h-[160px]">
  <h2 className="text-sm opacity-80 h-[40px] flex items-center justify-center text-center">
    Suspicion Score
  </h2>

  <div className="flex-1 flex items-center justify-center">
    <p className={`font-bold leading-none ${severityColor} text-[clamp(2rem,8vw,3rem)]`}>
      {data.suspicion}%
    </p>
  </div>
</div>

{/* Gaslight */}
<div className="bg-white/5 border border-white/10 p-4 rounded-2xl shadow-lg flex flex-col h-[160px]">
  <h2 className="text-sm opacity-80 h-[40px] flex items-center justify-center text-center">
    Gaslight Indicators
  </h2>

  <div className="flex-1 flex items-center justify-center">
    <p className="font-bold leading-none text-[clamp(2rem,8vw,3rem)]">
      {data.gaslight}
    </p>
  </div>
</div>

{/* Patterns */}
<div className="bg-white/5 border border-white/10 p-4 rounded-2xl shadow-lg flex flex-col h-[160px]">
  <h2 className="text-sm opacity-80 h-[40px] flex items-center justify-center text-center">
    Behavioral Patterns
  </h2>

  <div className="flex-1 flex items-center justify-center">
    <p className="font-bold leading-none text-[clamp(2rem,8vw,3rem)]">
      {data.patterns}
    </p>
  </div>
</div>

{/* Shift */}
<div className="bg-white/5 border border-white/10 p-4 rounded-2xl shadow-lg flex flex-col h-[160px]">
  <h2 className="text-sm opacity-80 h-[40px] flex items-center justify-center text-center">
    Behavioral Shift
  </h2>


  <div className="flex-1 flex items-center justify-center">
    <p className="font-bold leading-none text-[clamp(2rem,8vw,3rem)]">
      {data.shift}%
    </p>
  </div>
</div>



      </div>

      {/* Explanation Section */}
      <div className="mt-16 bg-white/5 border border-white/10 p-8 rounded-2xl">
        <h2 className="text-xl mb-4">Detected Behavioral Signals</h2>
        <ul className="space-y-2 text-white/70">
          {data.gaslight > 0 && <li>• Gaslight language patterns detected</li>}
          {data.shift > 0 && <li>• Noticeable change in behavioral timeline</li>}
          {data.patterns > 2 && <li>• Repeated suspicious communication patterns</li>}
          {data.suspicion < 30 && <li>• No significant behavioral anomalies detected</li>}
        </ul>
      </div>
      {/* Decision Map */}
<div className="mt-16 bg-white/5 border border-white/10 p-8 rounded-2xl">
  <h2 className="text-xl mb-6">Current State Detected</h2>

  <div className="space-y-4 text-white/80">

    {data.suspicion < 35 && (
      <p>• Low Risk — Observe for a few more days before reacting</p>
    )}

    {data.suspicion >= 35 && data.suspicion <= 65 && data.gaslight === 0 && (
      <p>• Medium Risk — Have a calm conversation about one specific incident</p>
    )}

    {data.suspicion >= 35 && data.suspicion <= 65 && data.gaslight > 0 && (
      <p>• Medium Risk with Gaslight — Ask neutral clarification questions without revealing suspicions</p>
    )}

    {data.suspicion > 65 && data.patterns > 3 && (
      <p>• High Risk — Prepare a structured conversation focusing on repeated behaviors</p>
    )}

    {data.suspicion > 80 && data.shift > 40 && data.gaslight > 0 && (
      <p>• Very High Risk — Delay confrontation and plan carefully</p>
    )}
    </div>

 <div className="mt-16 bg-white/5 border border-white/10 p-8 rounded-2xl">
  <h2 className="text-2xl font-bold mb-6">What This Means For You</h2>

  <div className="space-y-4 text-white/80 text-lg">

    {data.suspicion < 35 && (
      <>
        <p>• Do not accuse. You are still in observation phase.</p>
        <p>• Watch for consistency over the next few days.</p>
        <p>• Avoid reading too much into single incidents.</p>
      </>
    )}

    {data.suspicion >= 35 && data.suspicion <= 65 && data.gaslight === 0 && (
      <>
        <p>• Address one specific incident calmly.</p>
        <p>• Do not generalize patterns yet.</p>
        <p>• Observe reaction to mild confrontation.</p>
      </>
    )}

    {data.suspicion >= 35 && data.suspicion <= 65 && data.gaslight > 0 && (
      <>
        <p>• Do NOT reveal suspicions directly.</p>
        <p>• Ask neutral clarification questions.</p>
        <p>• Watch for defensive or reality-twisting responses.</p>
      </>
    )}

    {data.suspicion > 65 && data.patterns >= 3 && (
      <>
        <p>• You are seeing repeated behavioral patterns.</p>
        <p>• Prepare a structured conversation with examples.</p>
        <p>• Do not let them derail the topic.</p>
      </>
    )}

    {data.suspicion > 80 && data.shift > 40 && data.gaslight > 0 && (
      <>
        <p>• Delay confrontation.</p>
        <p>• You are dealing with advanced deflection behavior.</p>
        <p>• Plan your approach carefully and document everything.</p>
      </>
    )}

  </div>
</div>


</div>

    </main>
  );
}

