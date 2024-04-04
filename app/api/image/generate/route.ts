import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import OpenAI, { ClientOptions } from "openai";

import {
  checkFreeTrailAvailability,
  incrementFreeTrailCount,
} from "@/lib/actions";
import Prompt from "@/lib/models/prompt.model";

const openAIOptions: ClientOptions = {
  apiKey: process.env.OPENAI_API_KEY || "",
};

const openai = new OpenAI(openAIOptions);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "256x256" } = body;

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });
    if (!openAIOptions.apiKey)
      return new NextResponse("OpenAI API not found", { status: 503 });
    if (!prompt)
      return new NextResponse("Please provide prompt", { status: 400 });

    const isFreeTrailAvailable = await checkFreeTrailAvailability();
    if (!isFreeTrailAvailable) {
      return new NextResponse("Free trails exhausted", { status: 403 });
    }

    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt: prompt,
      n: amount,
      size: resolution,
    });

    const sanitizedResponse = {
      prompt: prompt,
      images: response.data.map((img) => img.url),
    };

    await incrementFreeTrailCount();

    await Prompt.create({
      userId: userId,
      type: "Image",
      ...sanitizedResponse,
    });

    return NextResponse.json(sanitizedResponse);
  } catch (error: any) {
    console.log("[GENERATE_IMAGE_ERROR] :>>", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
