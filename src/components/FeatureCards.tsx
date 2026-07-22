import { Bot, Target, Zap } from "lucide-react";

const features = [
  {
    icon: <Target size={28} className="text-cyan-400" />,
    title: "Client Focused",
    description:
      "Finds the client's real pain points before writing the proposal.",
  },
  {
    icon: <Bot size={28} className="text-cyan-400" />,
    title: "Human Writing",
    description:
      "Creates natural proposals that don't sound AI generated.",
  },
  {
    icon: <Zap size={28} className="text-cyan-400" />,
    title: "Fast Results",
    description:
      "Generate personalized proposals in just a few seconds.",
  },
];

export default function FeatureCards() {
  return (
    <section className="grid gap-6 md:grid-cols-3 mt-10 mb-12">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-500 transition"
        >
          {feature.icon}

          <h3 className="mt-4 text-xl font-semibold">
            {feature.title}
          </h3>

          <p className="mt-3 text-slate-400 leading-7">
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  );
}