import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email : "";

  return NextResponse.json(
    {
      ok: true,
      message:
        "Placeholder login endpoint only. Investor authentication is not yet enabled.",
      email,
    },
    { status: 200 },
  );
}
