import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Confession from "@/models/Confession";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { content, category } = await req.json();
    const newConfession = await Confession.create({ content, category });
    return NextResponse.json(newConfession, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Lỗi khi đăng bài" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const confessions = await Confession.find({}).sort({ createdAt: -1 });
    return NextResponse.json(confessions);
  } catch (error) {
    return NextResponse.json({ error: "Lỗi khi tải dữ liệu" }, { status: 500 });
  }
}