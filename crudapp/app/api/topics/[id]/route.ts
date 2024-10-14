import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

interface UpdateRequest {
  newTitle: string;
  newDescription: string;
}

interface Params {
  id: string;
}

export async function PUT(
  request: Request,
  { params }: { params: Params }
): Promise<NextResponse> {
  const { id } = params;
  const { newTitle: title, newDescription: description }: UpdateRequest =
    await request.json();

  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });

  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(
  request: Request,
  { params }: { params: Params }
): Promise<NextResponse> {
  const { id } = params;

  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });

  return NextResponse.json({ topic }, { status: 200 });
}
