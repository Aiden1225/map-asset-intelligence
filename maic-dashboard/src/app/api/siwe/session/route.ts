export async function GET() {
    const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
    return NextResponse.json({ address: session.address, chainId: session.chainId });
  }
