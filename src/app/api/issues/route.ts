import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../../prisma/client";

const createIssueSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(500),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json({message: "didn't validate well"}, { status: 400 });

  try {
    const newIssue = await prisma.issue.create({
      data: { title: body.title, description: body.description },
    });
  } catch (err) {
    return NextResponse.json({ message: `${err}` }, { status: 401 });
  }

  return NextResponse.json(
    { message: `${body.title} was created` },
    { status: 201 }
  );
}
