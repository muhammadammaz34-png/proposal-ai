export default function EmptyState() {
  return (
    <section className="mt-8 rounded-2xl border border-dashed border-slate-700 p-6 text-center md:p-12">

      <div className="mx-auto max-w-2xl">

        <div className="text-4xl">
          
        </div>

        <h2 className="mt-5 text-2xl font-bold md:text-3xl">
          Ready to generate?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-400 md:text-lg">
          Paste a job description above, choose your writing style,
          and ProposalAI will create a personalized proposal.
        </p>


        <div className="mt-8 flex flex-col items-center gap-4 text-cyan-400 font-semibold md:flex-row md:justify-center md:gap-8">

          <span>
            Paste Job
          </span>

          <span className="hidden md:block">
            →
          </span>

          <span className="md:hidden">
            ↓
          </span>

          <span>
            Choose Style
          </span>

          <span className="hidden md:block">
            →
          </span>

          <span className="md:hidden">
            ↓
          </span>

          <span>
            Generate
          </span>

        </div>

      </div>

    </section>
  );
}