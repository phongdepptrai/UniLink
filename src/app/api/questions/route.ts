import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Question from "@/models/Question";

export async function GET() {
  await dbConnect();
  const questions = await Question.find({}).sort({ createdAt: -1 });
  return NextResponse.json(questions);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  
  // Nếu có questionId thì là đang trả lời, nếu không là đăng câu hỏi mới
  if (body.questionId) {
    const question = await Question.findByIdAndUpdate(
      body.questionId,
      { $push: { answers: { content: body.content } } },
      { new: true }
    );
    return NextResponse.json(question);
  }

  const newQuestion = await Question.create(body);
  return NextResponse.json(newQuestion, { status: 201 });
}