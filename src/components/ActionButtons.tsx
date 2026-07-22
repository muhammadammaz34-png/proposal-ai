"use client";

import { useState } from "react";
import { Copy, RotateCcw, Trash2, Check } from "lucide-react";

type Props = {
  copyProposal: () => Promise<void>;
  regenerateProposal: () => void;
  clearAll: () => void;
};

export default function ActionButtons({
  copyProposal,
  regenerateProposal,
  clearAll,
}: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await copyProposal();

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="mt-8 flex flex-wrap justify-end gap-3">

      <button
        onClick={handleCopy}
        className={`flex items-center gap-2 rounded-lg px-5 py-3 font-medium transition-all duration-300 ${
          copied
            ? "bg-green-600 hover:bg-green-700"
            : "bg-cyan-500 hover:bg-cyan-600"
        }`}
      >
        {copied ? (
          <>
            <Check size={18} />
            Copied!
          </>
        ) : (
          <>
            <Copy size={18} />
            Copy Proposal
          </>
        )}
      </button>

      <button
        onClick={regenerateProposal}
        className="flex items-center gap-2 rounded-lg bg-slate-700 px-5 py-3 font-medium transition hover:bg-slate-600"
      >
        <RotateCcw size={18} />
        Regenerate
      </button>

      <button
        onClick={clearAll}
        className="flex items-center gap-2 rounded-lg bg-red-500 px-5 py-3 font-medium transition hover:bg-red-600"
      >
        <Trash2 size={18} />
        Clear
      </button>

    </div>
  );
}