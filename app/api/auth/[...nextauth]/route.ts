import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

// Handle all HTTP methods for NextAuth
export async function GET(request: NextRequest) {
  const result = await auth(request);
  if (!result) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(result);
}

export async function POST(request: NextRequest) {
  const result = await auth(request);
  if (!result) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(result);
}

export async function PUT(request: NextRequest) {
  const result = await auth(request);
  if (!result) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(result);
}

export async function DELETE(request: NextRequest) {
  const result = await auth(request);
  if (!result) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(result);
}
