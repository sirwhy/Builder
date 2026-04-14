import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session || session.user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const series = await prisma.series.findMany({
      include: {
        chapters: true
      },
      orderBy: {
        createdAt: "desc"
      }
    });
    return NextResponse.json(series);
  } catch (error) {
    console.error("Error fetching series:", error);
    return NextResponse.json({ error: "Failed to fetch series" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session || session.user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { title, slug, description, author, artist, status, genres } = body;

    const series = await prisma.series.create({
      data: {
        title,
        slug,
        description,
        author,
        artist,
        status: status || "Ongoing",
        genres: genres || [],
      }
    });

    return NextResponse.json(series);
  } catch (error) {
    console.error("Error creating series:", error);
    return NextResponse.json({ error: "Failed to create series" }, { status: 500 });
  }
}
