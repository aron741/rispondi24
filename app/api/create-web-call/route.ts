import { NextResponse } from "next/server";
import Retell from "retell-sdk";

const client = new Retell({
  apiKey: process.env.RETELL_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email } = body ?? {};

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const response = await client.call.createWebCall({
      agent_id: process.env.RETELL_AGENT_ID!,
      metadata: {
        lead_name: name,
        lead_email: email,
        source: "landing_page_demo",
      },
    });

    return NextResponse.json({
      accessToken: response.access_token,
      callId: response.call_id,
    });
  } catch (error) {
    console.error("create-web-call error", error);
    return NextResponse.json(
      { error: "Failed to create web call." },
      { status: 500 }
    );
  }
}