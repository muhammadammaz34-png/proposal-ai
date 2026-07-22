import { LoaderCircle } from "lucide-react";

type Props = {
  message: string;
};

export default function LoadingCard({ message }: Props) {
  return (
    <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl animate-pulse">

      <div className="flex items-center gap-3">
        <LoaderCircle className="animate-spin text-cyan-400" size={24} />

        <div>
          <h2 className="text-xl font-semibold">
            AI is generating your proposal...
          </h2>

          <p className="text-slate-400 mt-1">
            {message}
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">

        <div className="h-4 rounded bg-slate-700"></div>

        <div className="h-4 w-5/6 rounded bg-slate-700"></div>

        <div className="h-4 w-4/6 rounded bg-slate-700"></div>

        <div className="h-4 w-full rounded bg-slate-700"></div>

        <div className="h-4 w-3/4 rounded bg-slate-700"></div>

      </div>

      <p className="mt-8 text-sm text-slate-500">
        Usually takes 5–10 seconds.
      </p>

    </div>
  );
}