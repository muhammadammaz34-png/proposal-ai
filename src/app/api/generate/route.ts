import { NextResponse } from "next/server";
import { openrouter } from "@/lib/openrouter";
import { proposalPrompt } from "@/prompts/proposal";

export async function POST(req: Request) {
  try {
    const { job } = await req.json();

    const completion = await openrouter.chat.completions.create({
      model: "openai/gpt-oss-20b:free",
      messages: [
        {
          role: "user",
          content: proposalPrompt(job),
        },
      ],
    });

    return NextResponse.json({
      text: completion.choices[0].message.content,
    });

  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}