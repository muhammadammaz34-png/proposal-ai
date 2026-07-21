"use client";

import { useState,useEffect } from "react";
import toast from "react-hot-toast";
import { Copy, RotateCcw, Trash2 } from "lucide-react";

export default function Home() {
  const [job, setJob] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState("Professional");
  const loadingSteps = [
  "Analyzing job description...",
  "Finding client pain points...",
  "Planning the proposal...",
  "Writing proposal...",
];

const [loadingText, setLoadingText] = useState(loadingSteps[0]);

  async function generateProposal() {
    if (!job.trim()) {
      toast.error("Please paste a job description.");

      useEffect(() => {
  if (!loading) return;

  let index = 0;

  const interval = setInterval(() => {
    index = (index + 1) % loadingSteps.length;
    setLoadingText(loadingSteps[index]);
  }, 1200);

  return () => clearInterval(interval);
}, [loading]);
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          job,
          style,}),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setResult(data.text);
    } catch (error: any) {
      toast.error("Failed to generate proposal.");
      setResult(error.message);
    } finally {
      setLoading(false);
    }
  }

  const copyProposal = async () => {
    await navigator.clipboard.writeText(result);
    toast.success("Proposal copied!");
  };

  const regenerateProposal = () => {
    generateProposal();
  };

  const clearAll = () => {
    setJob("");
    setResult("");
    toast.success("Cleared");

  const [style, setStyle] = useState("Professional");
  
  };

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-8">

        <div className="text-center">
          <h1 className="text-6xl font-bold">
            Proposal AI
          </h1>

          <p className="mt-4 text-lg text-gray-400">
            Generate personalized freelance proposals in seconds.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">

          <label className="block mb-3 text-lg font-semibold">
            Job Description
          </label>

          <textarea
            value={job}
            onChange={(e) => setJob(e.target.value)}
            placeholder="Paste the client's job description here..."
            className="w-full h-72 rounded-xl bg-slate-800 border border-slate-700 p-5 text-white placeholder:text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <label className="block mt-6 mb-2 font-semibold">
  Proposal Style
</label>

<select
  value={style}
  onChange={(e) => setStyle(e.target.value)}
  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 mb-6"
>
  <option>Professional</option>
  <option>Friendly</option>
  <option>Confident</option>
  <option>Direct</option>
</select>

          <button
            onClick={generateProposal}
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-cyan-500 py-4 text-lg font-semibold transition hover:bg-cyan-600 disabled:bg-cyan-800"
          >
            {loading ? loadingText : "Generate Proposal"}
          </button>

        </div>

        {result && (
          <>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">

              <h2 className="text-2xl font-bold mb-6">
                Generated Proposal
              </h2>

              <div className="whitespace-pre-wrap leading-8 text-gray-200">
                {result}
              </div>

            </div>

            <div className="flex flex-wrap gap-3 justify-end">

              <button
                onClick={copyProposal}
                className="flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 transition hover:bg-cyan-600"
              >
                <Copy size={18} />
                Copy
              </button>

              <button
                onClick={regenerateProposal}
                className="flex items-center gap-2 rounded-lg bg-slate-700 px-5 py-3 transition hover:bg-slate-600"
              >
                <RotateCcw size={18} />
                Regenerate
              </button>

              <button
                onClick={clearAll}
                className="flex items-center gap-2 rounded-lg bg-red-500 px-5 py-3 transition hover:bg-red-600"
              >
                <Trash2 size={18} />
                Clear
              </button>

            </div>
          </>
        )}

      </div>
      <footer className="mt-12 border-t border-slate-800 pt-6 text-center">
  <p className="text-sm text-gray-500">
    Powered by AI
  </p>

  <p className="mt-2 text-sm font-medium text-cyan-400">
    Built by Muhammad Ammaz
  </p>
</footer>
    </main>
  );
}