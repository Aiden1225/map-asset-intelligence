import { NextResponse } from "next/server";
import { SiweMessage } from "siwe";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";

export async function POST(req: Request) {
  const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
  const { message, signature } = await req.json();

  try {
    const siweMessage = new SiweMessage(message);
    
    // Verify the message against the signature and stored nonce
    const { data } = await siweMessage.verify({
      signature,
      nonce: session.nonce,
    });

    if (data.nonce !== session.nonce) {
      return NextResponse.json({ message: "Invalid nonce" }, { status: 422 });
    }

    // Success: Store address in the encrypted session
    session.address = data.address;
    session.chainId = data.chainId;
    await session.save();

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: "Verification failed" }, { status: 400 });
  }
}