export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f17] text-white flex items-center justify-center">
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-14 w-[720px] text-center shadow-2xl">

        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 tracking-wide leading-tight">
          Is Your Partner Acting Different?<br/>Or Are You Ignoring The Signs?
        </h1>

        <p className="text-white/70 mb-5 text-base md:text-lg"
>
  Paste your chat messages and timeline events.<br/>
  Our behavioral engine detects gaslighting patterns, suspicious language and behavioral shifts in seconds.
</p>

<p className="text-white/50 text-sm mb-10">
  Tip: Write timeline events as behaviors, not labels.<br/>
  Instead of “Yesterday” or “Night”, write what actually changed or happened.
</p>


        <a
          href="/input"
          className="px-10 py-5 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold transition-all inline-block"
        >
          Analyze My Situation
        </a>

        <p className="text-white/40 text-sm mt-6">
          No signup. No guessing. Just behavioral clarity.
        </p>

      </div>
    </main>
  );
}
