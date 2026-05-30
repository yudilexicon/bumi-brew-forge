import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  country: z.string().min(2),
  roasteryType: z.enum(["specialty", "commercial", "importer", "other"]),
  weeklyVolume: z.string().min(1),
  targetPrice: z.string().min(1),
  preferredOrigin: z.string().optional(),
  preferredProcess: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // TODO: send via Resend to hello@bumi-kopi.com and log to HubSpot
    console.log("Sample request:", data);

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
