type Props = {
  analysis: string;
};

export default function AnalysisCard({ analysis }: Props) {
  return (
    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-8 shadow-xl animate-in fade-in duration-500">

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          🧠 AI Analysis
        </h2>

        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-400">
          AI Insights
        </span>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
        <pre className="whitespace-pre-wrap font-sans leading-8 text-slate-300">
          {analysis}
        </pre>
      </div>

    </section>
  );
}