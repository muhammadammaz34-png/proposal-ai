import { NextResponse } from "next/server";
import { openrouter } from "@/lib/openrouter";
import { proposalPrompt } from "@/prompts/proposal";

export async function POST(req: Request) {
  try {
    const { job, style, length } = await req.json();

    const completion = await openrouter.chat.completions.create({
      model: "openai/gpt-oss-20b:free",
      messages: [
        {
          role: "user",
          content: proposalPrompt(job, style, length),
        },
      ],
    });

    const output =
      completion.choices[0].message.content || "";

const parts = output.split("===PROPOSAL===");

const analysis =
  parts[0]?.replace("===ANALYSIS===", "").trim() ??
  "Analysis unavailable.";

const proposal =
  parts[1]?.trim() ??
  output;

    return NextResponse.json({
      analysis,
      proposal,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        error: error.message || "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}