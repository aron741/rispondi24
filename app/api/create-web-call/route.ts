import { NextResponse } from "next/server";
import Retell from "retell-sdk";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RETELL_API_KEY;
    const agentId = process.env.RETELL_AGENT_ID;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing RETELL_API_KEY" },
        { status: 500 }
      );
    }

    if (!agentId) {
      return NextResponse.json(
        { error: "Missing RETELL_AGENT_ID" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { name, email } = body ?? {};

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const client = new Retell({
      apiKey,
    });

    const response = await client.call.createWebCall({
      agent_id: agentId,
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