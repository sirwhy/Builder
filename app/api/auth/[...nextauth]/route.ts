import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

// Handle all HTTP methods for NextAuth
export async function GET(request: NextRequest) {
  return auth(request);
}

export async function POST(request: NextRequest) {
  return auth(request);
}

export async function PUT(request: NextRequest) {
  return auth(request);
}

export async function DELETE(request: NextRequest) {
  return auth(request);
}
