"use client";

import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCards from "@/components/FeatureCards";
import JobForm from "@/components/JobForm";
import EmptyState from "@/components/EmptyState";
import LoadingCard from "@/components/LoadingCard";
import AnalysisCard from "@/components/AnalysisCard";
import ProposalCard from "@/components/ProposalCard";
import ActionButtons from "@/components/ActionButtons";

export default function Home() {
  const [job, setJob] = useState("");

  const [style, setStyle] = useState("Professional");
  const [length, setLength] = useState("Medium");

  const [analysis, setAnalysis] = useState("");
  const [proposal, setProposal] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loading) return;

    const loadingSteps = [
      "Reading the job description...",
      "Understanding the client's pain points...",
      "Planning the best approach...",
      "Writing a personalized proposal...",
      "Final quality check...",
    ];

    let index = 0;

    setLoadingMessage(loadingSteps[0]);

    const interval = setInterval(() => {
      index++;

      if (index < loadingSteps.length) {
        setLoadingMessage(loadingSteps[index]);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [loading]);

  async function generateProposal() {
    if (!job.trim()) {
      toast.error("Please paste a job description.");
      return;
    }

    try {
      setLoading(true);

      setAnalysis("");
      setProposal("");

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          job,
          style,
          length,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setAnalysis(data.analysis);
      setProposal(data.proposal);
      toast.success("Proposal generated successfully!");
      setTimeout(() => {
  resultRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}, 150);
    } catch (error: any) {
      toast.error(error.message || "Failed to generate proposal.");
    } finally {
      setLoading(false);
      setLoadingMessage("");
    }
  }

  function regenerateProposal() {
    generateProposal();
  }

  function clearAll() {
    setJob("");
    setStyle("Professional");
    setLength("Medium");
    setAnalysis("");
    setProposal("");

    toast.success("Cleared successfully.");
  }

  async function copyProposal() {
    await navigator.clipboard.writeText(proposal);
    toast.success("Proposal copied!");
  }

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">

        <Header />

        <FeatureCards />

        <JobForm
          job={job}
          setJob={setJob}
          style={style}
          setStyle={setStyle}
          length={length}
          setLength={setLength}
          loading={loading}
          loadingMessage={loadingMessage}
          generateProposal={generateProposal}
        />

        {loading ? (
          <LoadingCard message={loadingMessage} />
        ) : proposal ? (
          <div ref={resultRef}>
            <AnalysisCard analysis={analysis} />

            <ProposalCard proposal={proposal} />

            <ActionButtons
              copyProposal={copyProposal}
              regenerateProposal={regenerateProposal}
              clearAll={clearAll}
            />
          </div>
        ) : (
          <EmptyState />
        )}

        <Footer />

      </div>
    </main>
  );
}