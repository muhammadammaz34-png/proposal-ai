import { LoaderCircle, WandSparkles } from "lucide-react";

type JobFormProps = {
  job: string;
  setJob: (value: string) => void;

  style: string;
  setStyle: (value: string) => void;

  length: string;
  setLength: (value: string) => void;

  loading: boolean;
  loadingMessage: string;

  generateProposal: () => void;
};

export default function JobForm({
  job,
  setJob,
  style,
  setStyle,
  length,
  setLength,
  loading,
  loadingMessage,
  generateProposal,
}: JobFormProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">

      <label className="mb-3 block text-lg font-semibold">
        Job Description
      </label>

      <textarea
        value={job}
        disabled={loading}
        onChange={(e) => setJob(e.target.value)}
        placeholder={`Paste an Upwork or Fiverr job description...

Example:
Looking for an n8n expert to automate our lead generation workflow using Google Sheets, Gmail and AI.`}
        className="h-72 w-full resize-none rounded-xl border border-slate-700 bg-slate-800 p-5 text-white placeholder:text-slate-500 outline-none transition focus:ring-2 focus:ring-cyan-500 disabled:opacity-60"
      />

      <div className="mt-2 flex justify-end">
        <span className="text-sm text-slate-400">
          {job.length} / 5000
        </span>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-semibold">
            Proposal Style
          </label>

          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4"
          >
            <option>Professional</option>
            <option>Friendly</option>
            <option>Confident</option>
            <option>Direct</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Proposal Length
          </label>

          <select
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4"
          >
            <option>Short</option>
            <option>Medium</option>
            <option>Long</option>
          </select>
        </div>

      </div>

      <button
        onClick={generateProposal}
        disabled={loading || !job.trim()}
        className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-500 py-4 text-lg font-semibold transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:bg-cyan-800"
      >
        {loading ? (
          <>
            <LoaderCircle size={20} className="animate-spin" />
            {loadingMessage}
          </>
        ) : (
          <>
            <WandSparkles size={20} />
            Generate Proposal
          </>
        )}
      </button>

      <div className="mt-6 flex flex-wrap justify-center gap-5 text-sm text-slate-400">

        <div className="flex items-center gap-2">
          <span>🔒</span>
          <span>No signup required</span>
        </div>

        <div className="flex items-center gap-2">
          <span>⚡</span>
          <span>Powered by AI</span>
        </div>

        <div className="flex items-center gap-2">
          <span>🛡️</span>
          <span>Your data isn't stored</span>
        </div>

      </div>

    </section>
  );
}