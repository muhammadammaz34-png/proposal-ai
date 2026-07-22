export default function Header() {
  return (
    <div className="text-center mb-12">
      <h1 className="text-6xl md:text-5xl md:text-7xl font-extrabold tracking-tight">
        ProposalAI
      </h1>

      <p className="mt-5 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-8">
        Generate personalized freelance proposals that sound human,
        build trust, and help you win more clients.
      </p>

      <span className="inline-flex mt-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 text-sm text-cyan-400">
         Generate Client-Winning Proposals      </span>

      <p className="mt-4 text-sm text-slate-400">
        Built by <span className="text-cyan-400 font-medium">Muhammad Ammaz</span>
      </p>
    </div>
  );
}