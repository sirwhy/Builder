import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await auth();
  if (!session || session.user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { title, slug, description, author, artist, status, genres, cover } = body;

    if (!title || !slug) {
      return NextResponse.json({ error: "Title and slug are required" }, { status: 400 });
    }

    const series = await prisma.series.create({
      data: {
        title,
        slug,
        description: description || "",
        author: author || "",
        artist: artist || "",
        status: status || "Ongoing",
        genres: genres || [],
        cover: cover || "",
      }
    });

    return NextResponse.json(series);
  } catch (error) {
    console.error("Error creating series:", error);
    return NextResponse.json({ error: "Failed to create series" }, { status: 500 });
  }
}
