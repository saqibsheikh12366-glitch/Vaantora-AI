export default function Home(){
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <nav className="p-6 flex justify-between max-w-7xl mx-auto"><h1 className="font-black">VAANTORA <span className="text-[#FF6A00]">AI</span></h1><a href="/dashboard" className="bg-[#FF6A00] px-6 py-2 rounded-full font-bold">Start Free</a></nav>
      <section className="text-center py-24 px-4 max-w-5xl mx-auto">
        <div className="inline-block bg-[#FF6A00]/10 border border-[#FF6A00]/20 px-4 py-1 rounded-full text-[#FF6A00] text-sm mb-6">Built to become your #1 AI sales employee</div>
        <h2 className="text-5xl md:text-7xl font-black">Your Autonomous<br/>AI Sales Employee</h2>
        <p className="mt-6 text-2xl text-gray-400 font-bold">Capture. Qualify. Follow Up. Book. Close.</p>
        <div className="mt-10"><a href="/dashboard" className="bg-[#FF6A00] px-8 py-4 rounded-full font-bold">Start Free - 14 Day Trial</a></div>
      </section>
    </div>
  )
}
