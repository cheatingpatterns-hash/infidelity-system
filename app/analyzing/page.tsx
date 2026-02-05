"use client";

import { useEffect } from "react";

export default function AnalyzingPage() {
  useEffect(() => {
    const chat = sessionStorage.getItem("chatData") || "";
    const timeline = sessionStorage.getItem("timelineData") || "";

    const lowerChat = chat.toLowerCase();
    const lowerTimeline = timeline.toLowerCase();

    let suspicion = 0;
    let gaslight = 0;
    let behaviorShift = 0;
    let patterns = 0;

    const hit = (points: number) => {
      suspicion += points;
      patterns += 1;
    };

    // 🔴 Gaslight words (chat)
    const gaslightWords = [
      "crazy",
      "overreacting",
      "paranoid",
      "imagining",
      "nothing happened",
      "you're wrong",
      "calm down",
      "why are you like this",
      "drama"
      
,"paranoid","imagining","nothing happened",
"you're wrong","you misunderstood","it's in your head",
"stop thinking","why are you like this","relax","calm down",
"trust me","just a friend","only a friend","you're insecure",
"drama","making things up","you're too sensitive",
"i told you already","not this again","you always do this"
];

    ;

    gaslightWords.forEach(w => {
      if (lowerChat.includes(w)) {
        gaslight += 1;
        hit(25);
      }
    });

    // 🟡 Suspicious behavior words (chat)
    const suspiciousWords = [
      "friend",
      "new friend",
      "coworker",
      "colleague",
      "out",
      "party",
      "drink",
      "went out",
      "busy",
      "later",
      "tomorrow"
      
,"her","him","girl","guy","she","he",
"secret","delete","hide","private","password",
"don't check","don't look","why you checking",
"who was that","nobody","just someone",
"later","text you later","call you later"
];

    ;

    suspiciousWords.forEach(w => {
      if (lowerChat.includes(w)) {
        hit(15);
      }
    });

    // 🟣 Behavioral shift (timeline)
    const shiftWords = [
      "late",
      "busy",
      "tired",
      "sleep",
      "phone off",
      "no signal",
      "battery",
      "tomorrow",
      "cancel",
      "reschedule",
      "not now",
      "another time"
      
,"busy","tired","phone off","battery died","fell asleep",
"cancel","reschedule","tomorrow","next week","working late",
"out with friends","friend","coworker","office","meeting",
"trip","travel","unexpected","last minute","changed plans",
"no signal","no reception","forgot to tell you","didn't see",
"missed your call","silent","do not disturb"
];

    ;

    shiftWords.forEach(w => {
      if (lowerTimeline.includes(w)) {
        behaviorShift += 20;
        suspicion += 15;
        patterns += 1;
      }
    });

    // 🧠 Combo intelligence
    if (patterns >= 3) suspicion += 20;
    if (gaslight >= 1 && behaviorShift >= 20) suspicion += 25;

    // Limits
    if (suspicion > 100) suspicion = 100;
    if (behaviorShift > 100) behaviorShift = 100;

    // Save results
    sessionStorage.setItem("suspicionScore", suspicion.toString());
    sessionStorage.setItem("gaslightScore", gaslight.toString());
    sessionStorage.setItem("patternCount", patterns.toString());
    sessionStorage.setItem("behaviorShift", behaviorShift.toString());

    setTimeout(() => {
      window.location.href = "/results";
    }, 5000);
  }, []);

  return (
  <main className="min-h-screen flex items-center justify-center bg-[#0b0f17] text-white">
    <div className="w-[600px] space-y-8">

      <h1 className="text-2xl font-bold text-center tracking-wide">
        Behavioral Analysis In Progress
      </h1>

      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-blue-500 animate-progress rounded-full"></div>
      </div>

      <div className="space-y-3 text-sm text-white/70 text-center animate-pulse">
  <p>Reading communication tone...</p>
  <p>Detecting manipulation patterns...</p>
  <p>Cross-checking behavioral timeline...</p>
  <p>Building behavioral profile...</p>
  <p>Finalizing clarity score...</p>
</div>


    </div>
  </main>
);

}
