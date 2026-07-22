type ProposalCardProps = {
  proposal: string;
};

export default function ProposalCard({
  proposal,
}: ProposalCardProps) {
  const words = proposal.trim().split(/\s+/).length;

  return (
    <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-8 shadow-xl animate-in fade-in duration-500">

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          📄 Generated Proposal
        </h2>

        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
          {words} words
        </span>
      </div>

      <div className="whitespace-pre-wrap leading-8 text-slate-200">
        {proposal}
      </div>

    </div>
  );
}